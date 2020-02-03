import { WorkflowStateTransition } from 'workflowStateTransition';

export interface AgencyStaffRole {
  _id: string;
  npn: string;
  aasm_state: string; // enum;
  updated_by_id?: any;
  tracking_version: number;
  workflow_state_transitions: WorkflowStateTransition[];
}

export interface GeneralAgencyStaffRole extends AgencyStaffRole {
  benefit_sponsors_general_agency_profile_id: string;
}

export interface BrokerAgencyStaffRole extends AgencyStaffRole {
  benefit_sponsors_broker_agency_profile_id: string;
}
