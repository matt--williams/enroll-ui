import * as faker from 'faker/locale/en_US';
import { ApiBasePerson } from '../../../../../models/person';
import { mockEmail } from './email.mock';
import { mockInbox } from './inbox.mock';
import {
  ApiBrokerAgencyStaffRole,
  ApiGeneralAgencyStaffRole,
} from 'models/agencyStaffRole';
import { mockPersonAddress } from './address.mock';

export function mockBasePerson(): ApiBasePerson {
  const genderNumber = faker.random.number(1);
  const genderString = genderNumber === 0 ? 'male' : 'female';

  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const person: ApiBasePerson = {
    _id: faker.random.uuid(),
    version: 1,
    is_tobacco_user: 'unknown',
    no_dc_address: false,
    no_dc_address_reason: '',
    is_active: true,
    hbx_id: faker.random.uuid(),
    first_name: faker.name.firstName(genderNumber),
    last_name: faker.name.lastName(),
    dob: faker.date.past(30).toISOString(),
    gender: genderString,
    encrypted_ssn: faker.random.alphaNumeric(18),
    updated_by_id: faker.random.uuid(),
    updated_at: updated.toISOString(),
    created_at: created.toISOString(),
    addresses: [mockPersonAddress()],
    tracking_version: 1,
    emails: [mockEmail()],
    inbox: mockInbox(),
  };

  return person;
}

export function mockBrokerStaff(): ApiBasePerson {
  const brokerStaff: ApiBasePerson = {
    ...mockBasePerson(),
    broker_agency_staff_roles: [mockBrokerAgencyStaffRole()],
  };

  return brokerStaff;
}

export function mockGeneralAgencyStaff(): ApiBasePerson {
  const generalAgencyStaff: ApiBasePerson = {
    ...mockBasePerson(),
    general_agency_staff_roles: [mockGeneralAgencyStaffRole()],
  };

  return generalAgencyStaff;
}

export function mockGeneralAgencyStaffRole(): ApiGeneralAgencyStaffRole {
  const recent = faker.date.recent().toISOString();

  const staffRole: ApiGeneralAgencyStaffRole = {
    _id: faker.random.uuid(),
    npn: faker.random.number({ min: 1111111111, max: 9999999999 }).toString(),
    aasm_state: 'active',
    tracking_version: 1,
    workflow_state_transitions: [
      {
        _id: faker.random.uuid(),
        from_state: 'applicant',
        to_state: 'active',
        event: 'approve!',
        transition_at: recent,
        created_at: recent,
        updated_at: recent,
      },
    ],
    benefit_sponsors_general_agency_profile_id: faker.random.uuid(),
  };

  return staffRole;
}

export function mockBrokerAgencyStaffRole(): ApiBrokerAgencyStaffRole {
  const recent = faker.date.recent().toISOString();

  const staffRole: ApiBrokerAgencyStaffRole = {
    _id: faker.random.uuid(),
    npn: faker.random.number({ min: 1111111111, max: 9999999999 }).toString(),
    aasm_state: 'active',
    tracking_version: 1,
    workflow_state_transitions: [
      {
        _id: faker.random.uuid(),
        from_state: 'broker_agency_pending',
        to_state: 'active',
        event: 'broker_agency_accept!',
        transition_at: recent,
        created_at: recent,
        updated_at: recent,
      },
    ],
    benefit_sponsors_broker_agency_profile_id: faker.random.uuid(),
  };

  return staffRole;
}
