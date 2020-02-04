export interface ApiPhone {
  _id: string;
  kind: string; // enum?
  country_code?: string;
  area_code: string;
  number: string;
  extension?: string;
  full_phone_number: string;
  updated_at: string;
  created_at: string;
}
