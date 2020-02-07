import { ApiBasePerson } from './person';
import { ApiGeneralAgencyStaffRole } from './generalAgencyStaffRole';
import {
  ApiPrimaryBrokerRole,
  ApiBrokerAgencyStaffRole,
} from './brokerAgencyStaffRole';

export interface GeneralAgencyStaff extends ApiBasePerson {
  // Required role to be a General Agency Staff
  general_agency_staff_roles: ApiGeneralAgencyStaffRole[];

  // Optional Roles
  broker_role?: ApiPrimaryBrokerRole;
  broker_agency_staff_roles?: ApiBrokerAgencyStaffRole[];
  hbx_staff_role?: any;
  assister_role?: any;
  csr_role?: any;
  consumer_role?: any;
}
