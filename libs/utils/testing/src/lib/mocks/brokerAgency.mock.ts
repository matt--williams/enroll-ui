import { BrokerAgencyProfile, BrokerAgency } from '@hbx/api-interfaces';

import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';
import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';

export function mockBrokerAgency(
  brokerRoleId: string,
  agencyProfileId: string
): BrokerAgency {
  const benefitSponsorsOrg: BrokerAgency = {
    ...mockBaseBenefitSponsorsOrg(),
    _type: 'BenefitSponsors::Organizations::ExemptOrganization',
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
