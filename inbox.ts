export interface HbxInbox {
  _id: string;
  access_key: string;
  messages?: HbxMessage[];
}

export interface HbxMessage {
  _id: string;
  sender_id?: string;
  parent_message_id?: string;
  from: string;
  to?: string;
  subject: string;
  body: string;
  message_read: boolean;
  folder?: string;
  created_at: string;
}
