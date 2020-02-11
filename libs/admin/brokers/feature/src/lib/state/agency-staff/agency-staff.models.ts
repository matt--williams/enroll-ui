// Eventually use this file as a View Model entity interface

import { ApiBasePerson, AgencyStaffRole } from '@hbx/api-interfaces';

/**
 * Interface for the 'AgencyStaff' data
 */
export interface AgencyStaffEntity extends ApiBasePerson {
  staffRoles: StaffRole[];
}

export interface StaffRole extends AgencyStaffRole {
  aasm_state: AgencyRoleState;
  workflow_state_transitions: StateTransitionHistory[];
  agencyId: string;
  primaryStaff: boolean;
}

export const enum AgencyRoleState {
  Pending = 'Pending',
  Active = 'Active',
  Terminated = 'Terminated',
  Other = 'Other',
}

export interface StateTransitionHistory {
  _id: string;
  from_state: AgencyRoleState;
  to_state: AgencyRoleState;
  transition_at?: Date;
  updated_at?: Date;
  created_at?: Date;
}
