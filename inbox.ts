export interface HbxInbox {
  _id: string;
  access_key: string;
  messages?: HbxMessage[];
}

export interface HbxMessage {
  _id: string;
  subject: string;
  body: string;
  from: string;
  message_read: boolean;
  created_at: string;
}
