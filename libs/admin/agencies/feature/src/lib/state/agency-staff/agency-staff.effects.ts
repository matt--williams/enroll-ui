import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { AgenciesApiService } from '@hbx/admin/agencies/data-access';

import * as fromAgencyStaff from './agency-staff.reducer';
import * as AgencyStaffActions from './agency-staff.actions';

@Injectable()
export class AgencyStaffEffects {
  loadAgencyStaff$ = createEffect(() =>
    this.dataPersistence.fetch(AgencyStaffActions.loadAgencyStaff, {
      run: (
        _action: ReturnType<typeof AgencyStaffActions.loadAgencyStaff>,
        _state: fromAgencyStaff.AgencyStaffPartialState
      ) => {
        console.log('EFFECT RUNNING');
        return this.agenciesApiService.getAllAgencyStaff().pipe(
          tap(agencyStaff => console.log({ agencyStaff })),
          map(agencyStaff =>
            AgencyStaffActions.loadAgencyStaffSuccess({ agencyStaff })
          )
        );
      },
      onError: (
        _action: ReturnType<typeof AgencyStaffActions.loadAgencyStaff>,
        error: any
      ) => {
        console.error('Error', error);
        return AgencyStaffActions.loadAgencyStaffFailure({ error });
      },
    })
  );

  constructor(
    private dataPersistence: DataPersistence<
      fromAgencyStaff.AgencyStaffPartialState
    >,
    private agenciesApiService: AgenciesApiService
  ) {}
}
