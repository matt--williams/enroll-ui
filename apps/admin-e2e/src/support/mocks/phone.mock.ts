import * as faker from 'faker/locale/en_US';
import { ApiPhone } from 'phone';

export function mockPhone(): ApiPhone {
  const area_code: string = faker.random
    .number({ min: 111, max: 999 })
    .toString();
  const number: string = faker.random
    .number({ min: 1111111, max: 9999999 })
    .toString();

  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const phone: ApiPhone = {
    _id: faker.random.uuid(),
    kind: 'phone main',
    area_code,
    number,
    full_phone_number: `${area_code}${number}`,
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
  };

  return phone;
}
