import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApiBenefitSponsorsOrganization } from '@hbx/api-interfaces';

import * as fromBrokers from './agencies.reducer';
import * as BrokersSelectors from './agencies.selectors';

@Injectable()
export class BrokersFacade {
  loaded$ = this.store.pipe(select(BrokersSelectors.getBrokersLoaded));
  allBrokers$: Observable<ApiBenefitSponsorsOrganization[]> = this.store.pipe(
    select(BrokersSelectors.getAllBrokers)
  );
  selectedBrokers$ = this.store.pipe(select(BrokersSelectors.getSelected));

  constructor(private store: Store<fromBrokers.BrokersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
