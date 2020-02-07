import * as faker from 'faker/locale/en_US';

import { ApiBasePerson, Gender } from '@hbx/api-interfaces';

import { mockEmail } from './email.mock';
import { mockInbox } from './inbox.mock';
import { mockPersonAddress } from './address.mock';
import { mockPersonPhone } from './phone.mock';

export function mockBasePerson(): ApiBasePerson {
  const genderNumber = faker.random.number(1);
  const genderString: Gender = genderNumber === 0 ? Gender.Male : Gender.Female;

  const now = new Date();
  const created = faker.date.recent(30);
  const updated = faker.date.between(created, now);

  const person: ApiBasePerson = {
    _id: faker.random.uuid(),
    version: 1,
    is_tobacco_user: 'unknown',
    no_dc_address: false,
    no_dc_address_reason: '',
    is_active: true,
    hbx_id: faker.random.uuid(),
    first_name: faker.name.firstName(genderNumber),
    last_name: faker.name.lastName(),
    dob: faker.date.past(30).toISOString(),
    gender: genderString,
    encrypted_ssn: faker.random.alphaNumeric(18),
    updated_by_id: faker.random.uuid(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    addresses: [mockPersonAddress()],
    tracking_version: 1,
    emails: [mockEmail()],
    inbox: mockInbox(),
    phones: [mockPersonPhone()],
  };

  return person;
}
