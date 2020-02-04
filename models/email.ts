export interface ApiEmail {
  _id: string;
  kind: EmailKind;
  address: string;
  updated_at: string;
  created_at: string;
  tracking_version: number;
  modifier_id?: any;
}

export const enum EmailKind {
  Home = 'home',
  Work = 'work',
}
