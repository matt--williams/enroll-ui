import * as faker from 'faker/locale/en_US';
import {
  GeneralAgencyStaff,
  ApiGeneralAgencyStaffRole,
  GeneralAgencyStaffRoleState,
} from '@hbx/api-interfaces';

import { mockBasePerson } from './person.mock';

/**
 * Creates a General Agency Staff
 */
export function mockGeneralAgencyStaff(
  isPrimaryAgent: boolean = false,
  agencyProfileId: string
): GeneralAgencyStaff {
  const generalAgencyStaff: GeneralAgencyStaff = {
    ...mockBasePerson(),
    general_agency_staff_roles: [
      mockGeneralAgencyStaffRole(isPrimaryAgent, agencyProfileId),
    ],
  };

  return generalAgencyStaff;
}

function mockGeneralAgencyStaffRole(
  isPrimaryAgent: boolean,
  agencyProfileId: string
): ApiGeneralAgencyStaffRole {
  const recent = faker.date.recent().toISOString();

  const staffRole: ApiGeneralAgencyStaffRole = {
    _id: faker.random.uuid(),
    npn: faker.random.number({ min: 1111111111, max: 9999999999 }).toString(),
    aasm_state: GeneralAgencyStaffRoleState.Active,
    tracking_version: 1,
    workflow_state_transitions: [
      {
        _id: faker.random.uuid(),
        from_state: GeneralAgencyStaffRoleState.Applicant,
        to_state: GeneralAgencyStaffRoleState.Active,
        event: 'approve!',
        transition_at: recent,
        created_at: recent,
        updated_at: recent,
      },
    ],

    // Must match the General Agency
    benefit_sponsors_general_agency_profile_id: agencyProfileId,
    is_primary: isPrimaryAgent,
  };

  return staffRole;
}
