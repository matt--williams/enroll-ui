import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromAgencies from './state/agencies/agencies.reducer';
import { AgenciesEffects } from './state/agencies/agencies.effects';
import { AgenciesFacade } from './state/agencies/agencies.facade';
import { BrokersFeatureShellComponent } from './brokers-feature-shell/brokers-feature-shell.component';
import * as fromAgencyStaff from './state/agency-staff/agency-staff.reducer';
import { AgencyStaffEffects } from './state/agency-staff/agency-staff.effects';
import { AgencyStaffFacade } from './state/agency-staff/agency-staff.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: BrokersFeatureShellComponent,
        children: [
          {
            path: 'agency-staff',
            loadChildren: () =>
              import('./agency-staff/agency-staff.module').then(
                m => m.AgencyStaffModule
              ),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'agency-staff',
          },
        ],
      },
    ]),

    // NgRx Feature Module Setup
    StoreModule.forFeature(
      fromAgencies.AGENCIES_FEATURE_KEY,
      fromAgencies.reducer
    ),
    EffectsModule.forFeature([AgenciesEffects]),

    StoreModule.forFeature(
      fromAgencyStaff.AGENCYSTAFF_FEATURE_KEY,
      fromAgencyStaff.reducer
    ),
    EffectsModule.forFeature([AgencyStaffEffects]),
  ],
  providers: [AgenciesFacade, AgencyStaffFacade],
  declarations: [BrokersFeatureShellComponent],
})
export class AdminBrokersFeatureModule {}
