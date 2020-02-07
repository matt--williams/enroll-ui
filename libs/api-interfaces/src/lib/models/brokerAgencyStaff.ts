import { ApiBasePerson } from './person';
import {
  ApiBrokerAgencyStaffRole,
  ApiPrimaryBrokerRole,
} from './brokerAgencyStaffRole';
import { ApiGeneralAgencyStaffRole } from './generalAgencyStaffRole';

export interface PrimaryBrokerStaff extends ApiBasePerson {
  // Required role to be a Primary Broker Staff
  broker_role: ApiPrimaryBrokerRole;

  // Optional Roles
  broker_agency_staff_roles?: ApiBrokerAgencyStaffRole[];
  general_agency_staff_roles?: ApiGeneralAgencyStaffRole[];
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}

export interface BrokerAgencyStaff extends ApiBasePerson {
  // Required role to be a Primary Broker Staff
  broker_agency_staff_roles: ApiBrokerAgencyStaffRole[];

  // Optional Roles
  broker_role?: ApiPrimaryBrokerRole;
  general_agency_staff_roles?: ApiGeneralAgencyStaffRole[];
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}
