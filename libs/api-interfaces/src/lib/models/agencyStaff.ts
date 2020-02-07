import { ApiBasePerson } from './person';
import {
  ApiBrokerAgencyStaffRole,
  ApiGeneralAgencyStaffRole,
} from './agencyStaffRole';
import { ApiBrokerRole } from './brokerRole';
import { ApiBaseAddress } from './address';

export interface PrimaryBrokerStaff extends ApiBasePerson {
  // Required role to be a Primary Broker Staff
  broker_role: ApiBrokerRole;

  // Optional Roles
  broker_agency_staff_roles?: ApiBrokerAgencyStaffRole[];
  general_agency_staff_roles?: ApiGeneralAgencyStaffRole[];
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}

export interface GeneralAgencyStaff extends ApiBasePerson {
  // Required role to be a General Agency Staff
  general_agency_staff_roles: ApiGeneralAgencyStaffRole[];

  // Optional Roles
  broker_role?: ApiBrokerRole;
  broker_agency_staff_roles?: ApiBrokerAgencyStaffRole[];
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}

export interface BrokerAgencyStaff extends ApiBasePerson {
  // Required role to be a Primary Broker Staff
  broker_agency_staff_roles: ApiBrokerAgencyStaffRole[];

  // Optional Roles
  broker_role?: ApiBrokerRole;
  general_agency_staff_roles?: ApiGeneralAgencyStaffRole[];
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}
