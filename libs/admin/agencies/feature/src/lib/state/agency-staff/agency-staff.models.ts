import {
  ApiBasePerson,
  AgencyStaffRole,
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  GeneralAgencyStaff,
} from '@hbx/api-interfaces';
import { AgencyRoleState } from '@hbx/admin/shared/view-models';

export interface AgencyStaff extends ApiBasePerson {
  staffRoles: StaffRole[];
}

export interface StaffRole extends AgencyStaffRole {
  aasm_state: AgencyRoleState;
  workflow_state_transitions: StateTransitionHistory[];
  agencyId: string;
  primaryStaff: boolean;
}

export interface StateTransitionHistory {
  _id: string;
  from_state: AgencyRoleState;
  to_state: AgencyRoleState;
  transition_at?: Date;
  updated_at?: Date;
  created_at?: Date;
}

export type AgencyStaffEntity =
  | PrimaryBrokerStaff
  | BrokerAgencyStaff
  | GeneralAgencyStaff;
