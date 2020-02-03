import { HbxBasePerson } from 'person';
import { BrokerAgencyStaffRole } from 'brokerAgencyStaff';
import { AgencyStaffRole } from 'agencyStaffRole';

export interface GeneralAgencyStaff extends HbxBasePerson {
  general_agency_staff_roles: BrokerAgencyStaffRole[];
}

export interface GeneralAgencyStaffRole extends AgencyStaffRole {
  benefit_sponsors_general_agency_profile_id: string;
}
