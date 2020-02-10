import { ApiInbox } from './inbox';
import { ApiPhone } from './phone';
import { ApiOfficeAddress } from './address';
import { ContactMethod } from './contactMethod';

export interface ApiBenefitSponsorsOrganization {
  _id: string;
  _type: string; // enum?
  agency_id?: any;
  entity_kind: EntityKind;
  fein: string; // also number?
  dba: string;
  legal_name: string;
  home_page?: any;
  site_id: string;
  hbx_id: string;
  updated_at: string;
  created_at: string;
  plan_design_author_ids?: any[];
  plan_design_subject_ids?: any[];
  profiles: BaseOrganizationProfile[];
}

export interface BaseOrganizationProfile {
  contact_method: ContactMethod;
  languages_spoken: string[];
  market_kind: MarketKind;
  home_page?: any;
  accept_new_clients: boolean;
  working_hours: boolean;
  ach_routing_number?: any;
  ach_account_number?: any;
  is_benefit_sponsorship_eligible: boolean;
  aasm_state: OrganizationAasmState;
  updated_by_id: string;
  updated_at: string;
  created_at: string;
  office_locations: ApiOfficeLocation[];
  inbox: ApiInbox;
}

export interface ApiOfficeLocation {
  _id: string;
  is_primary: boolean;
  address: ApiOfficeAddress;
  phone: ApiPhone;
}

export const enum MarketKind {
  Individual = 'individual',
  Shop = 'shop',
  Both = 'both',
}

export const enum OrganizationAasmState {
  Applicant = 'is_applicant',
  Approved = 'is_approved',
  Rejected = 'is_rejected',
  Suspended = 'is_suspended',
  Closed = 'is_closed',
}

export const enum EntityKind {
  TaxExempt = 'tax_exempt_organization',
  CCorporation = 'c_corporation',
  SCorporation = 's_corporation',
  Partnership = 'partnership',
  LLC = 'limited_liability_corporation',
  LLP = 'limited_liability_partnership',
  Household = 'household_employer',
  Government = 'governmental_employer',
  Foreign = 'foreign_embassy_or_consulate',
}
