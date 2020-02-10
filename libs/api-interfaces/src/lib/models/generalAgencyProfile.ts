import { BaseOrganizationProfile } from './benefitSponsorsOrg';

export interface GeneralAgencyProfile extends BaseOrganizationProfile {
  _id: string;
  _type: 'BenefitSponsors::Organizations::GeneralAgencyProfile'; // enum?
}
