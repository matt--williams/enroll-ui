import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  BrokerAgencyStaff,
  GeneralAgencyStaff,
  PrimaryBrokerStaff,
} from '@hbx/api-interfaces';

import {
  AGENCYSTAFF_FEATURE_KEY,
  State,
  AgencyStaffPartialState,
  agencyStaffAdapter,
} from './agency-staff.reducer';
import { AgencyStaffEntity } from './agency-staff.models';
import {
  isPrimaryBroker,
  isGeneralAgencyStaff,
  isBrokerAgencyStaff,
  isPrimaryGeneralAgencyStaff,
} from '../../utils/checkStaffType';
import { createPrimaryAgencyStaffDictionary } from '../../utils/createAgencyStaffVM';
import { Dictionary, PrimaryAgentVM } from '../../shared/models';

// Lookup the 'AgencyStaff' feature state managed by NgRx
export const getAgencyStaffState = createFeatureSelector<
  AgencyStaffPartialState,
  State
>(AGENCYSTAFF_FEATURE_KEY);

const { selectAll, selectEntities } = agencyStaffAdapter.getSelectors();

export const getAgencyStaffLoaded = createSelector(
  getAgencyStaffState,
  (state: State) => state.loaded
);

export const getAgencyStaffError = createSelector(
  getAgencyStaffState,
  (state: State) => state.error
);

export const getAllAgencyStaff = createSelector(
  getAgencyStaffState,
  (state: State) => selectAll(state)
);

export const getAgencyStaffEntities = createSelector(
  getAgencyStaffState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAgencyStaffState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getAgencyStaffEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getAllGeneralAgencyStaff = createSelector(
  getAllAgencyStaff,
  (agencyStaff: AgencyStaffEntity[]): GeneralAgencyStaff[] =>
    agencyStaff.filter(isGeneralAgencyStaff)
);

export const getNonPrimaryGeneralAgencyStaff = createSelector(
  getAllGeneralAgencyStaff,
  (agencyStaff: GeneralAgencyStaff[]): GeneralAgencyStaff[] =>
    agencyStaff.filter(staff => !isPrimaryGeneralAgencyStaff(staff))
);

export const getGeneralAgencyPrimaryStaff = createSelector(
  getAllGeneralAgencyStaff,
  (agencyStaff: GeneralAgencyStaff[]) =>
    agencyStaff.filter(isPrimaryGeneralAgencyStaff)
);

export const getPrimaryBrokers = createSelector(
  getAllAgencyStaff,
  (agencyStaff: AgencyStaffEntity[]) => agencyStaff.filter(isPrimaryBroker)
);

export const getBrokerAgencyStaff = createSelector(
  getAllAgencyStaff,
  (agencyStaff: AgencyStaffEntity[]): BrokerAgencyStaff[] =>
    agencyStaff.filter(isBrokerAgencyStaff)
);

export const getAllNonPrimaryAgencyStaff = createSelector(
  getBrokerAgencyStaff,
  getNonPrimaryGeneralAgencyStaff,
  (brokerAgencyStaff, generalAgencyStaff) => [
    ...brokerAgencyStaff,
    ...generalAgencyStaff,
  ]
);

// Putting this in entity form allows us to easily select a broker
// by their id instead of using array methods
export const primaryBrokerEntities = createSelector(
  getPrimaryBrokers,
  (
    primaryBrokers: PrimaryBrokerStaff[]
  ): { [_id: string]: PrimaryBrokerStaff } =>
    primaryBrokers.reduce((entities, staff) => {
      return {
        ...entities,
        [staff._id]: staff,
      };
    }, {})
);

export const generalAgencyPrimaryStaffEntities = createSelector(
  getGeneralAgencyPrimaryStaff,
  (
    generalAgencyPrimaryStaff: GeneralAgencyStaff[]
  ): { [_id: string]: GeneralAgencyStaff } =>
    generalAgencyPrimaryStaff.reduce((entities, staff) => {
      return {
        ...entities,
        [staff._id]: staff,
      };
    }, {})
);

export const primaryAgencyStaffDictionary = createSelector(
  getAllAgencyStaff,
  (agencyStaff): Dictionary<PrimaryAgentVM> =>
    createPrimaryAgencyStaffDictionary(agencyStaff)
);
