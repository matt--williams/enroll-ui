import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { BrokersApiService } from '@hbx/admin/brokers/data-access';

import * as fromBrokers from './brokers.reducer';
import * as BrokersActions from './brokers.actions';

@Injectable()
export class BrokersEffects {
  loadBrokers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrokersActions.loadBrokers),
      fetch({
        run: action => {
          return this.brokerApiService
            .getAllBrokers()
            .pipe(
              map(brokers => BrokersActions.loadBrokersSuccess({ brokers: [] }))
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return BrokersActions.loadBrokersFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private brokerApiService: BrokersApiService
  ) {}
}
