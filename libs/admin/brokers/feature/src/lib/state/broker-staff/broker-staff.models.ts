// Eventually use this file as a View Model entity interface

import {
  ApiBasePerson,
  AgencyStaffRole,
  WorkflowStateTransition,
} from '@hbx/api-interfaces';

/**
 * Interface for the 'BrokerStaff' data
 */
export interface BrokerStaffEntity extends ApiBasePerson {
  primaryStaff: boolean;
  staffRoles: StaffRole[];
}

export interface StaffRole extends AgencyStaffRole {
  aasm_state: AgencyRoleState;
  workflow_sate_transitions: WorkflowStateTransition<AgencyRoleState>;
  agencyId: string;
}

export const enum AgencyRoleState {
  Pending = 'Pending',
  Active = 'Active',
  Terminated = 'Terminated',
}
