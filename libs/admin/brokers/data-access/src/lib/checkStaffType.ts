import {
  ApiGeneralAgencyStaffRole,
  ApiBrokerAgencyStaffRole,
} from '@hbx/api-interfaces';

export function isGeneralBrokerStaff(
  staff: ApiGeneralAgencyStaffRole | ApiBrokerAgencyStaffRole
): staff is ApiGeneralAgencyStaffRole {
  return (
    (staff as ApiGeneralAgencyStaffRole)
      .benefit_sponsors_general_agency_profile_id !== undefined
  );
}
