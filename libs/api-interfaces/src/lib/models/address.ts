export interface ApiBaseAddress {
  _id: string;
  address_1: string;
  address_2?: string;
  address_3?: string;
  county?: string;
  country_name?: string;
  city: string;
  state: string;
  zip: string;
  updated_at: string;
  created_at: string;
}

export interface ApiPersonAddress extends ApiBaseAddress {
  kind: PersonAddressKind;
}
export interface ApiOfficeAddress extends ApiBaseAddress {
  kind: OfficeAddressKind;
}

export const enum OfficeAddressKind {
  Primary = 'primary',
  Mailing = 'mailing',
  Branch = 'branch',
}

export const enum PersonAddressKind {
  Home = 'home',
  Work = 'work',
  Mailing = 'mailing',
}
