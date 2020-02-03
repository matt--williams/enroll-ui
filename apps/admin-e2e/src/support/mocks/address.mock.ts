import * as faker from 'faker/locale/en_US';
import { HbxAddress } from 'address';
import { create } from 'domain';

export function mockAddress(): HbxAddress {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const address: HbxAddress = {
    _id: faker.random.uuid(),
    kind: 'primary',
    address_1: faker.address.streetAddress(),
    city: 'Washington',
    state: 'DC',
    zip: '20036',
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
  };

  return address;
}
