import {
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  GeneralAgencyStaff,
} from '@hbx/api-interfaces';

export function isPrimaryBroker(
  staff: GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff
): staff is PrimaryBrokerStaff {
  return (staff as PrimaryBrokerStaff).broker_role !== undefined;
}

export function isGeneralAgencyStaff(
  staff: GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff
): staff is GeneralAgencyStaff {
  return (staff as GeneralAgencyStaff).general_agency_staff_roles !== undefined;
}

export function isBrokerAgencyStaff(
  staff: GeneralAgencyStaff | PrimaryBrokerStaff | BrokerAgencyStaff
): staff is BrokerAgencyStaff {
  return (staff as BrokerAgencyStaff).broker_agency_staff_roles !== undefined;
}

export function isPrimaryGeneralAgencyStaff(
  agencyStaff: GeneralAgencyStaff
): boolean {
  return (
    agencyStaff.general_agency_staff_roles.filter(role => role.is_primary)
      .length > 0
  );
}
