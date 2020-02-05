export interface Inbox {
  id: string;
  accessKey: string;
  messages: Message[];
}

export interface Message {
  id: string;
  senderId: string;
  parentMessageId?: string;

  from: string;
  to?: string;
  subject: string;
  body: string;

  messageRead: boolean;
  folder?: string;

  createdAt: Date;
}
