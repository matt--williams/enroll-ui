import { ApiInbox } from './inbox';
import { ApiPersonAddress } from 'models/address';
import { ApiPhone } from 'phone';
import {
  ApiBrokerAgencyStaffRole,
  ApiGeneralAgencyStaffRole,
} from 'models/agencyStaffRole';
import { ApiBrokerRole } from 'models/brokerRole';
import { ApiEmail } from './email';
import { ApiRelationship, GenericRelationship } from './relationship';

export interface ApiBasePerson {
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
  person_relationships?: ApiRelationship<GenericRelationship>[];
  addresses?: ApiPersonAddress[];
  inbox: ApiInbox;
  emails: ApiEmail[];
  phones?: ApiPhone[];
  user_id?: string;
  broker_agency_staff_roles?: ApiBrokerAgencyStaffRole[];
  general_agency_staff_roles?: ApiGeneralAgencyStaffRole[];
  broker_role?: ApiBrokerRole;
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}
