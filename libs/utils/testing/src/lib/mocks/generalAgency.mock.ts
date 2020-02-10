import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';
import {
  ApiBenefitSponsorsOrganization,
  GeneralAgencyProfile,
} from '@hbx/api-interfaces';
import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';

export function mockGeneralAgency(
  agencyProfileId: string
): ApiBenefitSponsorsOrganization {
  const benefitSponsorsOrg: ApiBenefitSponsorsOrganization = {
    ...mockBaseBenefitSponsorsOrg(),
    profiles: [mockGeneralAgencyProfile(agencyProfileId)],
  };

  return benefitSponsorsOrg;
}

function mockGeneralAgencyProfile(
  agencyProfileId: string
): GeneralAgencyProfile {
  const profile: GeneralAgencyProfile = {
    ...mockBaseOrganizationProfile(),
    _id: agencyProfileId,
    _type: `BenefitSponsors::Organizations::GeneralAgencyProfile`,
  };

  return profile;
}
