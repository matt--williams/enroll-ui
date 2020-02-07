import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';
import {
  ApiBenefitSponsorsOrganization,
  ApiOrganizationProfile,
} from '@hbx/api-interfaces';
import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';

export function mockGeneralAgency(
  primaryBrokerId: string
): ApiBenefitSponsorsOrganization {
  const benefitSponsorsOrg: ApiBenefitSponsorsOrganization = {
    ...mockBaseBenefitSponsorsOrg(),
    profiles: [mockGeneralAgencyProfile(primaryBrokerId)],
  };

  return benefitSponsorsOrg;
}

function mockGeneralAgencyProfile(
  primaryBrokerId: string
): ApiOrganizationProfile {
  const profile: ApiOrganizationProfile = {
    ...mockBaseOrganizationProfile(primaryBrokerId),
    _type: `BenefitSponsors::Organizations::GeneralAgencyProfile`,
  };

  return profile;
}
