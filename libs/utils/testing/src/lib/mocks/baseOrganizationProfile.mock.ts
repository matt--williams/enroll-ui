import * as faker from 'faker/locale/en_US';

import {
  BaseOrganizationProfile,
  MarketKind,
  ContactMethod,
  OrganizationAasmState,
} from '@hbx/api-interfaces';

import { mockOfficeLocation } from './officeLocation.mock';
import { mockInbox } from './inbox.mock';

export function mockBaseOrganizationProfile(): BaseOrganizationProfile {
  const now = new Date();
  const created = faker.date.recent(30);
  const updated = faker.date.between(created, now);

  const profile: BaseOrganizationProfile = {
    contact_method: ContactMethod.PaperAndElectronic,
    languages_spoken: ['en'],
    market_kind: MarketKind.Individual,
    accept_new_clients: true,
    working_hours: faker.random.boolean(),
    is_benefit_sponsorship_eligible: true,
    aasm_state: OrganizationAasmState.Approved,
    updated_by_id: faker.random.uuid(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    office_locations: [mockOfficeLocation()],
    inbox: mockInbox(),
  };

  return profile;
}
