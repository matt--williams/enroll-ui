export interface BrokerStaff {
  hbxId: string | number;
  fullName: string;
  dob: Date;
  brokerStaffRoles: BrokerStaffRole[];
}

export interface BrokerStaffRole {
  id: string | number;
  currentState: BrokerStaffRoleState;
  brokerAgency: BrokerAgencyForBrokerStaff;
  auditTrail: BrokerStaffRoleAuditTrail[];
}

export const enum BrokerStaffRoleState {
  Active = 'Active',
  Pending = 'Pending',
  Terminated = 'Terminated',
}

export interface BrokerAgencyForBrokerStaff {
  legalName: string;
  npn: number;
  writingAgent: string;
}

export interface BrokerStaffRoleAuditTrail {
  fromState: BrokerStaffRoleState;
  toState: BrokerStaffRoleState;
  transitionTime: Date;
  editor: string;
}
