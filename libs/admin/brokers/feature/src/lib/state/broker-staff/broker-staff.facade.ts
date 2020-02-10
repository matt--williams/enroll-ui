import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromBrokerStaff from './broker-staff.reducer';
import * as BrokerStaffSelectors from './broker-staff.selectors';

@Injectable()
export class BrokerStaffFacade {
  loaded$ = this.store.pipe(select(BrokerStaffSelectors.getBrokerStaffLoaded));
  allBrokerStaff$ = this.store.pipe(
    select(BrokerStaffSelectors.getAllBrokerStaff)
  );
  selectedBrokerStaff$ = this.store.pipe(
    select(BrokerStaffSelectors.getSelected)
  );

  constructor(private store: Store<fromBrokerStaff.BrokerStaffPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
