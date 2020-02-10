import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as BrokerStaffActions from './broker-staff.actions';
import { BrokerStaffEntity } from './broker-staff.models';

export const BROKERSTAFF_FEATURE_KEY = 'brokerStaff';

export interface State extends EntityState<BrokerStaffEntity> {
  selectedId?: string | number; // which BrokerStaff record has been selected
  loaded: boolean; // has the BrokerStaff list been loaded
  error?: string | null; // last none error (if any)
}

export interface BrokerStaffPartialState {
  readonly [BROKERSTAFF_FEATURE_KEY]: State;
}

export const brokerStaffAdapter: EntityAdapter<BrokerStaffEntity> = createEntityAdapter<
  BrokerStaffEntity
>();

export const initialState: State = brokerStaffAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const brokerStaffReducer = createReducer(
  initialState,
  on(BrokerStaffActions.loadBrokerStaff, state => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BrokerStaffActions.loadBrokerStaffSuccess, (state, { brokerStaff }) =>
    brokerStaffAdapter.addAll(brokerStaff, { ...state, loaded: true })
  ),
  on(BrokerStaffActions.loadBrokerStaffFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return brokerStaffReducer(state, action);
}
