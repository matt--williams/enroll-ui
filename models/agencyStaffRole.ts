import { WorkflowStateTransition } from 'models/workflowStateTransition';

export interface ApiAgencyStaffRole {
  _id: string;
  npn: string;
  updated_by_id?: any;
  tracking_version: number;
}

export interface ApiGeneralAgencyStaffRole extends ApiAgencyStaffRole {
  aasm_state: GeneralAgencyStaffRoleState; // enum;
  benefit_sponsors_general_agency_profile_id: string;
  workflow_state_transitions: WorkflowStateTransition<
    GeneralAgencyStaffRoleState
  >[];
}

export interface ApiBrokerAgencyStaffRole extends ApiAgencyStaffRole {
  aasm_state: BrokerAgencyStaffRoleState; // enum;
  benefit_sponsors_broker_agency_profile_id: string;
  workflow_state_transitions: WorkflowStateTransition<
    BrokerAgencyStaffRoleState
  >[];
}

export const enum BrokerAgencyStaffRoleState {
  Pending = 'broker_agency_pending',
  Active = 'active',
  Declined = 'broker_agency_declined',
  Terminated = 'broker_agency_terminated',
}

export const enum GeneralAgencyStaffRoleState {
  Applicant = 'applicant',
  Active = 'active',
  Denied = 'denied',
  Decertified = 'decertified',
  Pending = 'general_agency_pending',
  Declined = 'general_agency_declined',
  Terminated = 'general_agency_terminated',
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
