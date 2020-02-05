import { WorkflowStateTransition } from './workflowStateTransition';
import { BrokerRoleState, ProviderKind } from './agencyStaffRole';

export interface ApiBrokerRole {
  _id: string;
  languages_spoken: string[];
  carrier_appointments: CarrierAppointments;
  provider_kind: ProviderKind;
  npn: string;
  benefit_sponsors_broker_agency_profile_id: string;
  market_kind?: any;
  aasm_state: BrokerRoleState;
  updated_by_id: string;
  updated_at: string;
  created_at: string;
  workflow_state_transitions: WorkflowStateTransition<BrokerRoleState>[];
  reason: string;
  license: boolean;
  training: boolean;
}

export interface CarrierAppointments {
  'Aetna Health Inc': boolean;
  'Aetna Life Insurance Company': boolean;
  'Carefirst Bluechoice Inc': boolean;
  'Group Hospitalization and Medical Services Inc': boolean;
  'Kaiser Foundation': boolean;
  'Optimum Choice': boolean;
  'United Health Care Insurance': boolean;
  'United Health Care Mid Atlantic': boolean;
}
