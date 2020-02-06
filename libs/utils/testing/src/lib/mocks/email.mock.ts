import * as faker from 'faker/locale/en_US';
import { EmailKind, ApiEmail } from '@hbx/api-interfaces';

export function mockEmail(kind = EmailKind.Work): ApiEmail {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const email: ApiEmail = {
    _id: faker.random.uuid(),
    kind,
    address: faker.internet.email(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    tracking_version: 1,
  };

  return email;
}
