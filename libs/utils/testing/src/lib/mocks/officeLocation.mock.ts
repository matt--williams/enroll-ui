import * as faker from 'faker/locale/en_US';
import { ApiOfficeLocation } from '@hbx/api-interfaces';
import { mockOfficeAddress } from './address.mock';
import { mockOfficePhone } from './phone.mock';

export function mockOfficeLocation(): ApiOfficeLocation {
  const officeLocation: ApiOfficeLocation = {
    _id: faker.random.uuid(),
    is_primary: true,
    address: mockOfficeAddress(),
    phone: mockOfficePhone(),
  };

  return officeLocation;
}
