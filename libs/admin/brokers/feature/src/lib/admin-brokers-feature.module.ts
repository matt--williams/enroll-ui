import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBrokers from './state/brokers/agencies.reducer';
import { BrokersEffects } from './state/brokers/agencies.effects';
import { BrokersFacade } from './state/brokers/agencies.facade';
import { BrokersFeatureShellComponent } from './brokers-feature-shell/brokers-feature-shell.component';
import * as fromBrokerStaff from './state/broker-staff/agency-staff.reducer';
import { AgencyStaffEffects } from './state/broker-staff/agency-staff.effects';
import { AgencyStaffFacade } from './state/broker-staff/agency-staff.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BrokersFeatureShellComponent },
    ]),

    // NgRx Feature Module Setup
    StoreModule.forFeature(
      fromBrokers.BROKERS_FEATURE_KEY,
      fromBrokers.reducer
    ),
    EffectsModule.forFeature([BrokersEffects]),
    StoreModule.forFeature(
      fromBrokerStaff.AGENCYSTAFF_FEATURE_KEY,
      fromBrokerStaff.reducer
    ),
    EffectsModule.forFeature([AgencyStaffEffects]),
  ],
  providers: [BrokersFacade, AgencyStaffFacade],
  declarations: [BrokersFeatureShellComponent],
})
export class AdminBrokersFeatureModule {}
