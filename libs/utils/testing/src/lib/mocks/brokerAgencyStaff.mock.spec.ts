import {
  mockPrimaryBroker,
  mockBrokerAgencyStaff,
} from './brokerAgencyStaff.mock';

describe('Mock Primary Broker Staff', () => {
  it('should create a primary broker with specific ids', () => {
    const primaryBroker = mockPrimaryBroker(
      'agencyProfileId',
      'primaryBrokerRoleId'
    );

    expect(primaryBroker.broker_role._id).toEqual('primaryBrokerRoleId');
    expect(
      primaryBroker.broker_role.benefit_sponsors_broker_agency_profile_id
    ).toEqual('agencyProfileId');
  });
});

describe('Mock Broker Agency Staff', () => {
  it('should create an agency staff with specific ids', () => {
    const agencyStaff = mockBrokerAgencyStaff('agencyProfileId');

    expect(
      agencyStaff.broker_agency_staff_roles[0]
        .benefit_sponsors_broker_agency_profile_id
    ).toEqual('agencyProfileId');
  });
});
