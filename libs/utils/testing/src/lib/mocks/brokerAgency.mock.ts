import {
  ApiBenefitSponsorsOrganization,
  ApiOrganizationProfile,
} from '@hbx/api-interfaces';

import { mockBaseBenefitSponsorsOrg } from './baseOrganization.mock';
import { mockBaseOrganizationProfile } from './baseOrganizationProfile.mock';

export function mockBrokerAgency(
  brokerRoleId: string,
  agencyProfileId: string
): ApiBenefitSponsorsOrganization {
  const benefitSponsorsOrg: ApiBenefitSponsorsOrganization = {
    ...mockBaseBenefitSponsorsOrg(),
    profiles: [mockBrokerAgencyProfile(brokerRoleId, agencyProfileId)],
  };

  return benefitSponsorsOrg;
}

function mockBrokerAgencyProfile(
  brokerRoleId: string,
  agencyProfileId: string
): ApiOrganizationProfile {
  const profile: ApiOrganizationProfile = {
    ...mockBaseOrganizationProfile(),
    _type: `BenefitSponsors::Organizations::BrokerAgencyProfile`,
    _id: agencyProfileId,
    primary_broker_role_id: brokerRoleId,
  };

  return profile;
}
