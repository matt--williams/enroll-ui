import * as faker from 'faker/locale/en_US';
import {
  ApiBenefitSponsorsOrganization,
  ApiOrganizationProfile,
  ApiOfficeLocation,
} from '../../../../../benefitSponsorsOrg';
import { mockInbox } from './inbox.mock';
import { mockPhone } from './phone.mock';
import { mockOfficeAddress } from './address.mock';

export function mockGeneralAgency(
  existingId: string = faker.random.uuid()
): ApiBenefitSponsorsOrganization {
  const benefitSponsorsOrg: ApiBenefitSponsorsOrganization = {
    ...partialBenefitSponsorsOrg(),
    profiles: [mockOrgProfile(existingId, 'General')],
  };

  return benefitSponsorsOrg;
}

export function mockBrokerAgency(
  existingId: string = faker.random.uuid()
): ApiBenefitSponsorsOrganization {
  const benefitSponsorsOrg: ApiBenefitSponsorsOrganization = {
    ...partialBenefitSponsorsOrg(),
    profiles: [mockOrgProfile(existingId, 'Broker')],
  };

  return benefitSponsorsOrg;
}

export function mockOrgProfile(
  id: string,
  agencyType: 'General' | 'Broker'
): ApiOrganizationProfile {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const profile: ApiOrganizationProfile = {
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

export function mockOfficeLocation(): ApiOfficeLocation {
  const officeLocation: ApiOfficeLocation = {
    _id: faker.random.uuid(),
    is_primary: true,
    address: mockOfficeAddress(),
    phone: mockPhone(),
  };

  return officeLocation;
}

function partialBenefitSponsorsOrg(): Omit<
  ApiBenefitSponsorsOrganization,
  'profiles'
> {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const partialOrg: Omit<ApiBenefitSponsorsOrganization, 'profiles'> = {
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
  };

  return partialOrg;
}
