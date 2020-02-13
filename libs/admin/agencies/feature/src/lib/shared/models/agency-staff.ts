import { AgencyAssociation } from './agency';

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
  npn: string;
}

export const enum AgencyRoleState {
  Pending = 'Pending',
  Active = 'Active',
  Terminated = 'Terminated',
  Other = 'Other',
}
