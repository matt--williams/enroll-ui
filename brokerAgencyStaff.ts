import { HbxBasePerson } from 'person';
import { AgencyStaffRole } from 'agencyStaffRole';

export interface BrokerAgencyStaff extends HbxBasePerson {
  broker_agency_staff_roles: BrokerAgencyStaffRole[];
}

export interface BrokerAgencyStaffRole extends AgencyStaffRole {
  benefit_sponsors_broker_agency_profile_id: string;
}
