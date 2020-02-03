import { WorkflowStateTransition } from 'workflowStateTransition';

export interface AgencyStaffRole {
  _id: string;
  npn: string;
  aasm_state: string; // enum;
  updated_by_id?: any;
  tracking_version: number;
  workflow_state_transitions: WorkflowStateTransition[];
}
