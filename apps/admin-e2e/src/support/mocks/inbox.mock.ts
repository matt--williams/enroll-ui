import { HbxInbox, HbxMessage } from '../../../../../inbox';
import * as faker from 'faker/locale/en_US';
import { v4 as uuid } from 'uuid';

export function mockInbox(): HbxInbox {
  const inbox: HbxInbox = {
    _id: uuid(),
    access_key: faker.random.alphaNumeric(),
    messages: [mockMessage(), mockMessage(), mockMessage()],
  };

  return inbox;
}

export function mockMessage(): HbxMessage {
  const message: HbxMessage = {
    _id: uuid(),
    subject: faker.random.words(3),
    body: faker.random.words(20),
    from: faker.company.companyName(),
    message_read: faker.random.boolean(),
    created_at: faker.date.recent(10).toISOString(),
  };

  return message;
}
