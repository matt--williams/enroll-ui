import { BrokerAgencyProfile, Agency } from '@hbx/api-interfaces';

import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';
import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';

export function mockBrokerAgency(
  agencyProfileId: string,
  primaryBrokerRoleId: string
): Agency {
  const benefitSponsorsOrg: Agency = {
    ...mockBaseBenefitSponsorsOrg(),
    profiles: [mockBrokerAgencyProfile(agencyProfileId, primaryBrokerRoleId)],
  };

  return benefitSponsorsOrg;
}

function mockBrokerAgencyProfile(
  agencyProfileId: string,
  primaryBrokerRoleId: string
): BrokerAgencyProfile {
  const profile: BrokerAgencyProfile = {
    ...mockBaseOrganizationProfile(),
    _type: `BenefitSponsors::Organizations::BrokerAgencyProfile`,
    _id: agencyProfileId,
    primary_broker_role_id: primaryBrokerRoleId,
  };

  return profile;
}
