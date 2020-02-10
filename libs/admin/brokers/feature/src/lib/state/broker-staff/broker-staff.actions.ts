import { createAction, props } from '@ngrx/store';
import { BrokerStaffEntity } from './broker-staff.models';

export const loadBrokerStaff = createAction('[BrokerStaff] Load BrokerStaff');

export const loadBrokerStaffSuccess = createAction(
  '[BrokerStaff] Load BrokerStaff Success',
  props<{ brokerStaff: BrokerStaffEntity[] }>()
);

export const loadBrokerStaffFailure = createAction(
  '[BrokerStaff] Load BrokerStaff Failure',
  props<{ error: any }>()
);
