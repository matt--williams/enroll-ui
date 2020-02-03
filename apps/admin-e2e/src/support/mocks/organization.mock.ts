import * as faker from 'faker/locale/en_US';
import {
  BenefitSponsorsOrganization,
  OrganizationProfile,
  OfficeLocation,
} from '../../../../../benefitSponsorsOrg';
import { mockInbox } from './inbox.mock';
import { mockAddress } from './address.mock';
import { mockPhone } from './phone.mock';

export function mockBenefitSponsorsOrg(
  agencyType: 'General' | 'Broker',
  existingId: string = faker.random.uuid()
): BenefitSponsorsOrganization {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const benefitSponsorsOrg: BenefitSponsorsOrganization = {
    _id: faker.random.uuid(),
    _type: 'BenefitSponsors::Organizations::GeneralOrganization',
    entity_kind: 's_corporation',
    fein: faker.random.number({ min: 111111111, max: 999999999 }).toString(),
    dba: faker.company.companyName(),
    legal_name: faker.company.companyName(),
    site_id: faker.random.uuid(),
    hbx_id: faker.random.uuid(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    profiles: [mockOrgProfile(existingId, agencyType)],
  };

  return benefitSponsorsOrg;
}

export function mockOrgProfile(
  id: string,
  agencyType: 'General' | 'Broker'
): OrganizationProfile {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const profile: OrganizationProfile = {
    _id: id,
    contact_method: 'paper_and_electronic',
    _type: `BenefitSponsors::Organizations::${agencyType}AgencyProfile`,
    languages_spoken: ['en'],
    market_kind: 'individual',
    accept_new_clients: true,
    working_hours: faker.random.boolean(),
    is_benefit_sponsorship_eligible: true,
    aasm_state: 'is_approved',
    updated_by_id: faker.random.uuid(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    office_locations: [mockOfficeLocation()],
    inbox: mockInbox(),
    primary_broker_role_id: faker.random.uuid(),
  };

  return profile;
}

export function mockOfficeLocation(): OfficeLocation {
  const officeLocation: OfficeLocation = {
    _id: faker.random.uuid(),
    is_primary: true,
    address: mockAddress(),
    phone: mockPhone(),
  };

  return officeLocation;
}
