import * as faker from 'faker/locale/en_US';

import {
  BrokerAgencyStaff,
  PrimaryBrokerStaff,
  ApiBrokerAgencyStaffRole,
  BrokerAgencyStaffRoleState,
  ApiBrokerRole,
  ProviderKind,
  BrokerRoleState,
} from '@hbx/api-interfaces';

import { mockBasePerson } from './person.mock';

export function mockPrimaryBroker(
  associatedAgencyId: string
): PrimaryBrokerStaff {
  const primaryBroker: PrimaryBrokerStaff = {
    ...mockBasePerson(),
    broker_role: mockBrokerRole(associatedAgencyId),
  };

  return primaryBroker;
}

export function mockBrokerAgencyStaff(): BrokerAgencyStaff {
  const brokerStaff: BrokerAgencyStaff = {
    ...mockBasePerson(),
    broker_agency_staff_roles: [mockBrokerAgencyStaffRole()],
  };

  return brokerStaff;
}

export function mockBrokerAgencyStaffRole(): ApiBrokerAgencyStaffRole {
  const recent = faker.date.recent().toISOString();

  const staffRole: ApiBrokerAgencyStaffRole = {
    _id: faker.random.uuid(),
    npn: faker.random.number({ min: 1111111111, max: 9999999999 }).toString(),
    aasm_state: BrokerAgencyStaffRoleState.Active,
    tracking_version: 1,
    workflow_state_transitions: [
      {
        _id: faker.random.uuid(),
        from_state: BrokerAgencyStaffRoleState.Pending,
        to_state: BrokerAgencyStaffRoleState.Active,
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

export function mockBrokerRole(associatedAgencyId: string): ApiBrokerRole {
  const now = new Date();
  const created = faker.date.recent();
  const updated = faker.date.between(created, now);

  const brokerRole: ApiBrokerRole = {
    _id: faker.random.uuid(), // must match broker agency primary_broker_role_id
    languages_spoken: ['en'],
    carrier_appointments: {
      'Aetna Health Inc': true,
      'Aetna Life Insurance Company': true,
      'Carefirst Bluechoice Inc': true,
      'Group Hospitalization and Medical Services Inc': true,
      'Kaiser Foundation': true,
      'Optimum Choice': true,
      'United Health Care Insurance': true,
      'United Health Care Mid Atlantic': true,
    },
    provider_kind: ProviderKind.Broker,
    npn: faker.random.number({ min: 111111111, max: 999999999 }).toString(),
    benefit_sponsors_broker_agency_profile_id: associatedAgencyId,
    aasm_state: BrokerRoleState.Active,
    created_at: created.toString(),
    updated_at: updated.toString(),
    working_hours: false,
    workflow_state_transitions: [
      {
        _id: faker.random.uuid(),
        to_state: BrokerRoleState.Applicant,
        transition_at: created.toISOString(),
      },
      {
        _id: faker.random.uuid(),
        from_state: BrokerRoleState.Applicant,
        to_state: BrokerRoleState.Active,
        event: 'approve!',
        transition_at: updated.toISOString(),
        updated_at: updated.toISOString(),
        created_at: updated.toISOString(),
      },
    ],
    reason: '',
    tracking_version: 1,
    license: true,
    training: true,
  };

  return brokerRole;
}
