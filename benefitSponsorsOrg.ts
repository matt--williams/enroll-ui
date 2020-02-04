import { ApiInbox } from 'inbox';
import { ApiAddress } from 'address';
import { ApiPhone } from 'phone';

export interface ApiBenefitSponsorsOrganization {
  _id: string;
  _type: string; // enum?
  entity_kind: string; // enum?
  fein: string; // also number?
  dba: string;
  legal_name: string;
  site_id: string;
  hbx_id: string;
  updated_at: string;
  created_at: string;
  profiles: ApiOrganizationProfile[];
}

export interface ApiOrganizationProfile {
  _id: string;
  contact_method: string; // enum?
  _type: string; // enum?
  languages_spoken: string[];
  market_kind: string; // enum?
  home_page?: any;
  accept_new_clients: boolean;
  working_hours: boolean;
  ach_routing_number?: any;
  ach_account_number?: any;
  is_benefit_sponsorship_eligible: boolean;
  aasm_state: string; // enum?
  updated_by_id: string;
  updated_at: string;
  created_at: string;
  office_locations: ApiOfficeLocation[];
  inbox: ApiInbox;
  primary_broker_role_id: string; // check this
}

export interface ApiOfficeLocation {
  _id: string;
  is_primary: boolean;
  address: ApiAddress;
  phone: ApiPhone;
}
