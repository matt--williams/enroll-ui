import { HbxInbox } from './inbox';
import { HbxAddress } from 'address';
import { HbxPhone } from 'phone';
import { BrokerAgencyStaffRole, GeneralAgencyStaffRole } from 'agencyStaffRole';
import { BrokerRole } from 'brokerRole';

export interface HbxBasePerson {
  _id: string;
  version: number;
  is_tobacco_user: string;
  no_dc_address: boolean;
  no_dc_address_reason: string;
  is_active: boolean;
  hbx_id: string;
  first_name: string;
  last_name: string;
  dob: string;
  gender: 'male' | 'female';
  encrypted_ssn: string;
  updated_by_id?: string;
  updated_at: string;
  created_at: string;
  tracking_version: number;
  person_relationships?: HbxRelationship[];
  addresses?: HbxAddress[];
  inbox: HbxInbox;
  emails: HbxEmail[];
  phones?: HbxPhone[];
  user_id?: string;
  broker_agency_staff_roles?: BrokerAgencyStaffRole[];
  general_agency_staff_roles?: GeneralAgencyStaffRole[];
  broker_role?: BrokerRole;
}

export interface HbxRelationship {
  _id: string;
  kind: string; // enum?
  relative_id: string;
  updated_at: string;
  created_at: string;
}

export interface HbxEmail {
  _id: string;
  kind: string; // enum?
  address: string;
  updated_at: string;
  created_at: string;
  tracking_version: number;
}
