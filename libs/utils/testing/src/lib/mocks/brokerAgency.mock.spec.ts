import { BrokerAgencyProfile } from '@hbx/api-interfaces';
import { mockBrokerAgency } from './brokerAgency.mock';

describe('Mocking Broker Agency', () => {
  it('staff, primary, and agency should all have matching id', () => {
    const brokerAgency = mockBrokerAgency('agencyProfileId', 'brokerRoleId');

    const [profile] = brokerAgency.profiles;

    expect((profile as BrokerAgencyProfile).primary_broker_role_id).toEqual(
      'brokerRoleId'
    );
  });
});
