import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBrokers from './state/brokers/brokers.reducer';
import { BrokersEffects } from './state/brokers/brokers.effects';
import { BrokersFacade } from './state/brokers/brokers.facade';
import { BrokersFeatureShellComponent } from './brokers-feature-shell/brokers-feature-shell.component';
import * as fromBrokerStaff from './state/broker-staff/broker-staff.reducer';
import { BrokerStaffEffects } from './state/broker-staff/broker-staff.effects';
import { BrokerStaffFacade } from './state/broker-staff/broker-staff.facade';

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
      fromBrokerStaff.BROKERSTAFF_FEATURE_KEY,
      fromBrokerStaff.reducer
    ),
    EffectsModule.forFeature([BrokerStaffEffects]),
  ],
  providers: [BrokersFacade, BrokerStaffFacade],
  declarations: [BrokersFeatureShellComponent],
})
export class AdminBrokersFeatureModule {}
