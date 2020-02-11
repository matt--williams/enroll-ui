import { BrokerAgencyProfile, Agency } from '@hbx/api-interfaces';

import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';
import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';

export function mockBrokerAgency(
  brokerRoleId: string,
  agencyProfileId: string
): Agency {
  const benefitSponsorsOrg: Agency = {
    ...mockBaseBenefitSponsorsOrg(),
    profiles: [mockBrokerAgencyProfile(brokerRoleId, agencyProfileId)],
  };

  return benefitSponsorsOrg;
}

function mockBrokerAgencyProfile(
  brokerRoleId: string,
  agencyProfileId: string
): BrokerAgencyProfile {
  const profile: BrokerAgencyProfile = {
    ...mockBaseOrganizationProfile(),
    _type: `BenefitSponsors::Organizations::BrokerAgencyProfile`,
    _id: agencyProfileId,
    primary_broker_role_id: brokerRoleId,
  };

  return profile;
}
