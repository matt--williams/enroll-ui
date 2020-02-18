import { PrimaryAgentVM, AgencyRoleState } from './agency-staff';

export interface AssociationProfile {
  agencyProfileId: string; // from profile
  agencyType: AgencyType; // from profile
  agencyId: string; // from agency
  agencyName: string; // from agency
}

export enum AgencyType {
  Broker = 'Broker',
  General = 'General',
}

export type AgencyAssociation = AssociationProfile & {
  primaryAgent: PrimaryAgentVM;
} & { currentState: AgencyRoleState };

export type AgencyVM = AssociationProfile & {
  primaryAgent: PrimaryAgentVM;
};
