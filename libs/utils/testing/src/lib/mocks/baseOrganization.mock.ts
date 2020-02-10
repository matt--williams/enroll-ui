import * as faker from 'faker';
import {
  BaseBenefitSponsorsOrganization,
  EntityKind,
} from '@hbx/api-interfaces';

/**
 * Returns a BenefitSponsorsOrganization minus the profiles property
 */
export function mockBaseBenefitSponsorsOrg(): BaseBenefitSponsorsOrganization {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const baseOrganization: BaseBenefitSponsorsOrganization = {
    _id: faker.random.uuid(),
    entity_kind: EntityKind.SCorporation,
    fein: faker.random.number({ min: 111111111, max: 999999999 }).toString(),
    dba: faker.company.companyName(),
    legal_name: faker.company.companyName(),
    site_id: faker.random.uuid(),
    hbx_id: faker.random.uuid(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
  };

  return baseOrganization;
}
