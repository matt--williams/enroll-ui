import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromAgencyStaff from './agency-staff.reducer';
import * as AgencyStaffSelectors from './agency-staff.selectors';

@Injectable()
export class AgencyStaffFacade {
  loaded$ = this.store.pipe(select(AgencyStaffSelectors.getAgencyStaffLoaded));
  allAgencyStaff$ = this.store.pipe(
    select(AgencyStaffSelectors.getAllAgencyStaff)
  );
  selectedAgencyStaff$ = this.store.pipe(
    select(AgencyStaffSelectors.getSelected)
  );

  nonPrimaryAgencyStaff$ = this.store.pipe(
    select(AgencyStaffSelectors.getAllNonPrimaryAgencyStaff)
  );

  primaryAgencyStaffEntities$ = this.store.pipe(
    select(AgencyStaffSelectors.primaryAgencyStaffDictionary)
  );

  constructor(private store: Store<fromAgencyStaff.AgencyStaffPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
