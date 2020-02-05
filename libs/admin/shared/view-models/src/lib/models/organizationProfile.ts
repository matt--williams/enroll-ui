import {
  ContactMethod,
  MarketKind,
  OrganizationAasmState,
} from '@hbx/api-interfaces';
import { OfficeLocation } from './officeLocation';
import { Inbox } from './inbox';

export interface OrganizationProfile {
  id: string;
  primaryBrokerRoleId: string;

  type: string;
  contactMethod: ContactMethod;
  market: MarketKind;
  homePage?: any;
  acceptingNewClients: boolean;
  workingHours: boolean;
  ach?: {
    routingNumber: string;
    accountNumber: string;
  };
  benefitSponsorEligible: boolean;
  aasmState: OrganizationAasmState;

  updatedById: string;
  updatedAt: Date;
  createdAt: Date;

  officeLocations: OfficeLocation[];
  inbox: Inbox;
}
