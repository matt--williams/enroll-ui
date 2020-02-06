import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBrokers from './state/brokers/brokers.reducer';
import { BrokersEffects } from './state/brokers/brokers.effects';
import { BrokersFacade } from './state/brokers/brokers.facade';
import { BrokersFeatureShellComponent } from './brokers-feature-shell/brokers-feature-shell.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BrokersFeatureShellComponent },
    ]),

    StoreModule.forFeature(
      fromBrokers.BROKERS_FEATURE_KEY,
      fromBrokers.reducer
    ),

    EffectsModule.forFeature([BrokersEffects]),
  ],
  providers: [BrokersFacade],
  declarations: [BrokersFeatureShellComponent],
})
export class AdminBrokersFeatureModule {}
