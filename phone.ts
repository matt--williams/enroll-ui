export interface ApiPhone {
  _id: string;
  country_code?: string;
  area_code: string;
  number: string;
  extension?: string;
  full_phone_number: string;
  updated_at: string;
  created_at: string;
}

export interface ApiPersonPhone extends ApiPhone {
  kind: PersonPhoneKind;
}

export const enum PersonPhoneKind {
  Home = 'home',
  Work = 'work',
  Mobile = 'mobile',
  Main = 'main',
  Fax = 'fax',
}

export interface ApiOfficePhone extends ApiPhone {
  kind: 'phone main';
}
