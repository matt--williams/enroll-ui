import * as faker from 'faker/locale/en_US';
import {
  ApiBaseAddress,
  PersonAddressKind,
  ApiPersonAddress,
  ApiOfficeAddress,
  OfficeAddressKind,
} from 'address';

export function mockBaseAddress(): ApiBaseAddress {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const address: ApiBaseAddress = {
    _id: faker.random.uuid(),
    address_1: faker.address.streetAddress(),
    city: 'Washington',
    state: 'DC',
    zip: '20036',
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
  };

  return address;
}

export function mockPersonAddress(): ApiPersonAddress {
  const address: ApiPersonAddress = {
    ...mockBaseAddress(),
    kind: PersonAddressKind.Home,
  };

  return address;
}

export function mockOfficeAddress(): ApiOfficeAddress {
  const address: ApiOfficeAddress = {
    ...mockBaseAddress(),
    kind: OfficeAddressKind.Primary,
  };

  return address;
}
