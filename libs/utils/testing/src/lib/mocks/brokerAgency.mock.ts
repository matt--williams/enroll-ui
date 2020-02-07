import {
  ApiBenefitSponsorsOrganization,
  ApiOrganizationProfile,
} from '@hbx/api-interfaces';

import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';
import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';

export function mockBrokerAgency(
  primaryBrokerId: string
): ApiBenefitSponsorsOrganization {
  const benefitSponsorsOrg: ApiBenefitSponsorsOrganization = {
    ...mockBaseBenefitSponsorsOrg(),
    profiles: [mockBrokerAgencyProfile(primaryBrokerId)],
  };

  return benefitSponsorsOrg;
}

function mockBrokerAgencyProfile(
  primaryBrokerId: string
): ApiOrganizationProfile {
  const profile: ApiOrganizationProfile = {
    ...mockBaseOrganizationProfile(primaryBrokerId),
    _type: `BenefitSponsors::Organizations::BrokerAgencyProfile`,
  };

  return profile;
}
