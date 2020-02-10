import { BaseOrganizationProfile } from './benefitSponsorsOrg';

export interface BrokerAgencyProfile extends BaseOrganizationProfile {
  _id: string;
  _type: 'BenefitSponsors::Organizations::BrokerAgencyProfile'; // enum?
  primary_broker_role_id: string; // check this
}
