import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as fromAgencies from './agencies.reducer';
import * as AgenciesSelectors from './agencies.selectors';

@Injectable()
export class AgenciesFacade {
  loaded$ = this.store.pipe(select(AgenciesSelectors.getAgenciesLoaded));
  allAgencies$ = this.store.pipe(select(AgenciesSelectors.getAllAgencies));
  selectedAgency$ = this.store.pipe(select(AgenciesSelectors.getSelected));

  constructor(private store: Store<fromAgencies.AgenciesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
