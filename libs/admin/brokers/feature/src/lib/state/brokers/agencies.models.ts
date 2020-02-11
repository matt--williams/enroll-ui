import { EntityKind } from '@hbx/api-interfaces';
import { OrganizationProfile } from '@hbx/admin/shared/view-models';

/**
 * Interface for the 'Brokers' data
 * Eventually use this as the BrokersEntityModel
 */
export interface AgenciesEntity {
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

  profiles: OrganizationProfile[];

  planDesignAuthorIds?: any[];
  planDesignSubjectIds?: any[];
}
