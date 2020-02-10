import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BROKERSTAFF_FEATURE_KEY,
  State,
  BrokerStaffPartialState,
  brokerStaffAdapter,
} from './broker-staff.reducer';

// Lookup the 'BrokerStaff' feature state managed by NgRx
export const getBrokerStaffState = createFeatureSelector<
  BrokerStaffPartialState,
  State
>(BROKERSTAFF_FEATURE_KEY);

const { selectAll, selectEntities } = brokerStaffAdapter.getSelectors();

export const getBrokerStaffLoaded = createSelector(
  getBrokerStaffState,
  (state: State) => state.loaded
);

export const getBrokerStaffError = createSelector(
  getBrokerStaffState,
  (state: State) => state.error
);

export const getAllBrokerStaff = createSelector(
  getBrokerStaffState,
  (state: State) => selectAll(state)
);

export const getBrokerStaffEntities = createSelector(
  getBrokerStaffState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBrokerStaffState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBrokerStaffEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
