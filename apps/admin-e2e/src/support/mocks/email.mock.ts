import * as faker from 'faker/locale/en_US';
import { HbxEmail } from '../../../../../person';

export function mockEmail(): HbxEmail {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const email: HbxEmail = {
    _id: faker.random.uuid(),
    kind: 'work',
    address: faker.internet.email(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    tracking_version: 1,
  };

  return email;
}
