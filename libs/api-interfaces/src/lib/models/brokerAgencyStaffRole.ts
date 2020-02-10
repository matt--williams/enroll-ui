import { WorkflowStateTransition } from './workflowStateTransition';

export interface AgencyStaffRole {
  _id: string;
  npn: string;
  updated_by_id?: any;
  tracking_version: number;
}

export interface ApiBrokerAgencyStaffRole extends AgencyStaffRole {
  aasm_state: BrokerAgencyStaffRoleState; // enum;
  benefit_sponsors_broker_agency_profile_id: string;
  workflow_state_transitions: WorkflowStateTransition<
    BrokerAgencyStaffRoleState
  >[];
}

// This interface is only related to Broker Agencies
export interface ApiPrimaryBrokerRole extends AgencyStaffRole {
  aasm_state: BrokerRoleState;
  benefit_sponsors_broker_agency_profile_id: string;
  workflow_state_transitions: WorkflowStateTransition<BrokerRoleState>[];

  languages_spoken: string[];
  carrier_appointments: CarrierAppointments;
  provider_kind: ProviderKind;
  market_kind?: any;
  updated_at: string;
  created_at: string;
  reason: string;
  license: boolean;
  training: boolean;
  working_hours: boolean;
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

export const enum BrokerAgencyStaffRoleState {
  Pending = 'broker_agency_pending',
  Active = 'active',
  Declined = 'broker_agency_declined',
  Terminated = 'broker_agency_terminated',
}

export const enum BrokerRoleState {
  Applicant = 'applicant',
  Active = 'active',
  Denied = 'denied',
  Decertified = 'decertified',
  Pending = 'broker_agency_pending',
  Declined = 'broker_agency_declined',
  Terminated = 'broker_agency_terminated',
}

export const enum ProviderKind {
  Broker = 'broker',
  Assister = 'assister',
}
