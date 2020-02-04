import { WorkflowStateTransition } from 'models/workflowStateTransition';

export interface ApiAgencyStaffRole {
  _id: string;
  npn: string;
  aasm_state: string; // enum;
  updated_by_id?: any;
  tracking_version: number;
  workflow_state_transitions: WorkflowStateTransition[];
}

export interface ApiGeneralAgencyStaffRole extends ApiAgencyStaffRole {
  benefit_sponsors_general_agency_profile_id: string;
}

export interface ApiBrokerAgencyStaffRole extends ApiAgencyStaffRole {
  benefit_sponsors_broker_agency_profile_id: string;
}
