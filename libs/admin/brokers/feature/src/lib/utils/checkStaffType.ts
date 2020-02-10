import {
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  GeneralAgencyStaff,
} from '@hbx/api-interfaces';

export function isPrimaryBroker(
  staff: PrimaryBrokerStaff | BrokerAgencyStaff
): staff is PrimaryBrokerStaff {
  return (staff as PrimaryBrokerStaff).broker_role !== undefined;
}

export function isGeneralAgencyStaff(
  staff: GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff
): staff is GeneralAgencyStaff {
  return (staff as GeneralAgencyStaff).general_agency_staff_roles !== undefined;
}
