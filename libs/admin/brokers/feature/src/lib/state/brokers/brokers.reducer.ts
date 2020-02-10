import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BrokersActions from './brokers.actions';
import { BaseBenefitSponsorsOrganization } from '@hbx/api-interfaces';

export const BROKERS_FEATURE_KEY = 'brokers';

function selectAgencyId(a: BaseBenefitSponsorsOrganization): string {
  //In this case this would be optional since primary key is id
  return a._id;
}

export interface State extends EntityState<BaseBenefitSponsorsOrganization> {
  selectedId?: string | number; // which Brokers record has been selected
  loaded: boolean; // has the Brokers list been loaded
  error?: string | null; // last none error (if any)
}

export interface BrokersPartialState {
  readonly [BROKERS_FEATURE_KEY]: State;
}

export const brokersAdapter: EntityAdapter<BaseBenefitSponsorsOrganization> = createEntityAdapter<
  BaseBenefitSponsorsOrganization
>({
  selectId: selectAgencyId,
});

export const initialState: State = brokersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const brokersReducer = createReducer(
  initialState,
  on(BrokersActions.loadBrokers, state => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BrokersActions.loadBrokersSuccess, (state, { brokers }) =>
    brokersAdapter.setAll(brokers, { ...state, loaded: true })
  ),
  on(BrokersActions.loadBrokersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return brokersReducer(state, action);
}
