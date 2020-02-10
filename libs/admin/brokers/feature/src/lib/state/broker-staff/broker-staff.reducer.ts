import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { BrokerStaffEntity } from './broker-staff.models';
import * as BrokerStaffActions from './broker-staff.actions';

export const BROKERSTAFF_FEATURE_KEY = 'brokerStaff';

function selectBrokerId(a: BrokerStaffEntity): string {
  //In this case this would be optional since primary key is id
  return a._id;
}

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
>({
  selectId: selectBrokerId,
});

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
    brokerStaffAdapter.setAll(brokerStaff, { ...state, loaded: true })
  ),
  on(BrokerStaffActions.loadBrokerStaffFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return brokerStaffReducer(state, action);
}
