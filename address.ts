export interface HbxAddress {
  _id: string;
  address_1: string;
  address_2?: string;
  address_3?: string;
  county?: string;
  country_name?: string;
  kind: string; // enum?
  city: string;
  state: string;
  zip: string;
  updated_at: string;
  created_at: string;
}
