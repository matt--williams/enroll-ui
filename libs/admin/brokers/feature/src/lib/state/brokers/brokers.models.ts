import { EntityKind } from '@hbx/api-interfaces';

/**
 * Interface for the 'Brokers' data
 */
export interface BrokersEntity {
  id: string | number; // Primary ID
  type: string;
  agencyId?: string;
  entity: EntityKind;
  fein: string;
  dba: string;
  legalName: string;
  homePage?: string;
  siteId: string;
  hbxId: string;

  updatedAt: Date;
  createdAt: Date;

  profiles: OrganizationProfile;
}
