import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { AgenciesApiService } from '@hbx/admin/brokers/data-access';

import * as fromAgencies from './agencies.reducer';
import * as AgenciesActions from './agencies.actions';

@Injectable()
export class AgenciesEffects {
  loadBrokers$ = createEffect(() =>
    this.dataPersistence.fetch(AgenciesActions.loadAgencies, {
      run: (
        // action contains the payload if any
        _action: ReturnType<typeof AgenciesActions.loadAgencies>,
        // state is brought in just in case we need anything from it
        _state: fromAgencies.AgenciesPartialState
      ) => {
        return this.brokersApiService
          .getAllAgencyStaff()
          .pipe(
            map(_agencies =>
              AgenciesActions.loadAgenciesSuccess({ agencies: [] })
            )
          );
      },

      onError: (
        _action: ReturnType<typeof AgenciesActions.loadAgencies>,
        error
      ) => {
        console.error('Error', error);
        return AgenciesActions.loadAgenciesFailure({ error });
      },
    })
  );

  constructor(
    private dataPersistence: DataPersistence<fromAgencies.AgenciesPartialState>,
    private brokersApiService: AgenciesApiService
  ) {}
}
