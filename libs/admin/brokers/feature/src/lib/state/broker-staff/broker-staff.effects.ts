import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromBrokerStaff from './broker-staff.reducer';
import * as BrokerStaffActions from './broker-staff.actions';

@Injectable()
export class BrokerStaffEffects {
  loadBrokerStaff$ = createEffect(() =>
    this.dataPersistence.fetch(BrokerStaffActions.loadBrokerStaff, {
      run: (
        action: ReturnType<typeof BrokerStaffActions.loadBrokerStaff>,
        state: fromBrokerStaff.BrokerStaffPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return BrokerStaffActions.loadBrokerStaffSuccess({ brokerStaff: [] });
      },

      onError: (
        action: ReturnType<typeof BrokerStaffActions.loadBrokerStaff>,
        error
      ) => {
        console.error('Error', error);
        return BrokerStaffActions.loadBrokerStaffFailure({ error });
      },
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<
      fromBrokerStaff.BrokerStaffPartialState
    >
  ) {}
}
