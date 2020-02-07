import { ApiAgencyStaffRole } from './brokerAgencyStaffRole';
import { WorkflowStateTransition } from './workflowStateTransition';

export interface ApiGeneralAgencyStaffRole extends ApiAgencyStaffRole {
  aasm_state: GeneralAgencyStaffRoleState; // enum;
  benefit_sponsors_general_agency_profile_id: string;
  workflow_state_transitions: WorkflowStateTransition<
    GeneralAgencyStaffRoleState
  >[];
  is_primary: boolean;
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
