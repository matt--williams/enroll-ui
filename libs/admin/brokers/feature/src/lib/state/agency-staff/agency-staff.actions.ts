import { createAction, props } from '@ngrx/store';
import {
  PrimaryBrokerStaff,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
} from '@hbx/api-interfaces';

export const loadAgencyStaff = createAction('[AgencyStaff] Load AgencyStaff');

export const loadAgencyStaffSuccess = createAction(
  '[AgencyStaff] Load AgencyStaff Success',
  props<{
    agencyStaff: Array<
      PrimaryBrokerStaff | GeneralAgencyStaff | BrokerAgencyStaff
    >;
  }>()
);

export const loadAgencyStaffFailure = createAction(
  '[AgencyStaff] Load AgencyStaff Failure',
  props<{ error: any }>()
);
