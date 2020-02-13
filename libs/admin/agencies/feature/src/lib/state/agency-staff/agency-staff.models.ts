// Eventually use this file as a View Model entity interface

import {
  ApiBasePerson,
  AgencyStaffRole,
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  GeneralAgencyStaff,
} from '@hbx/api-interfaces';

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

export interface AgencyStaffVM {
  agencyStaffId: string;
  hbxId: string;
  fullName: string;
  agencyAssociations: AgencyAssociation[];
}

export interface PrimaryAgentVM {
  brokerRoleId: string; // from staff role
  agencyProfileId?: string; // from staff role
  fullName: string; //from staff object
}

export const enum AgencyType {
  Broker = 'Broker',
  General = 'General',
}

export const enum AgencyRoleState {
  Pending = 'Pending',
  Active = 'Active',
  Terminated = 'Terminated',
  Other = 'Other',
}

export interface AssociationProfile {
  associationId: string; // from profile
  agencyType: AgencyType; // from profile
  agencyId: string; // from agency
  agencyName: string; // from agency
}

export type AgencyAssociation = AssociationProfile & {
  primaryAgent: PrimaryAgentVM;
} & { currentState: AgencyRoleState };

export type AgencyStaffEntity =
  | PrimaryBrokerStaff
  | BrokerAgencyStaff
  | GeneralAgencyStaff;
