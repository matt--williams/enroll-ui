import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { BrokersApiService } from '@hbx/admin/brokers/data-access';

import * as fromBrokers from './brokers.reducer';
import * as BrokersActions from './brokers.actions';

@Injectable()
export class BrokersEffects {
  loadBrokers$ = createEffect(() =>
    this.dataPersistence.fetch(BrokersActions.loadBrokers, {
      run: (
        // action contains the payload if any
        action: ReturnType<typeof BrokersActions.loadBrokers>,
        // state is brought in just in case we need anything from it
        state: fromBrokers.BrokersPartialState
      ) => {
        return this.brokersApiService
          .getAllBrokers()
          .pipe(
            map(brokers => BrokersActions.loadBrokersSuccess({ brokers: [] }))
          );
      },

      onError: (
        action: ReturnType<typeof BrokersActions.loadBrokers>,
        error
      ) => {
        console.error('Error', error);
        return BrokersActions.loadBrokersFailure({ error });
      },
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<fromBrokers.BrokersPartialState>,
    private brokersApiService: BrokersApiService
  ) {}
}
