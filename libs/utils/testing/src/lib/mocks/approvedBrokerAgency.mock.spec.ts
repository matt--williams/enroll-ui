import { BrokerAgencyProfile } from '@hbx/api-interfaces';

import { approvedBrokerAgencyWithStaff } from './approvedBrokerAgencyWithStaff.mock';

describe('Mocking Broker Agency', () => {
  it('staff, primary, and agency should all have matching id', () => {
    const {
      brokerAgency,
      primaryBroker,
      brokerStaff,
    } = approvedBrokerAgencyWithStaff();

    const [profile] = brokerAgency.profiles;

    // console.log('Agency Staff role', brokerStaff[0].broker_agency_staff_roles);
    // console.log('Primary Agent role', primaryBroker.broker_role);
    // console.log('Agency profile', brokerAgency.profiles[0]);

    expect(
      brokerStaff[0].broker_agency_staff_roles[0]
        .benefit_sponsors_broker_agency_profile_id
    ).toEqual(brokerAgency.profiles[0]._id);

    expect(
      brokerStaff[0].broker_agency_staff_roles[0]
        .benefit_sponsors_broker_agency_profile_id
    ).toEqual(
      primaryBroker.broker_role.benefit_sponsors_broker_agency_profile_id
    );

    expect((profile as BrokerAgencyProfile).primary_broker_role_id).toEqual(
      primaryBroker.broker_role._id
    );
  });
});
