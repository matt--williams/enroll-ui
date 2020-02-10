import { BaseBenefitSponsorsOrganization } from './benefitSponsorsOrg';
import { BrokerAgencyProfile } from './brokerAgencyProfile';

export interface BrokerAgency extends BaseBenefitSponsorsOrganization {
  _type: 'BenefitSponsors::Organizations::ExemptOrganization';
  profiles: BrokerAgencyProfile[];
}
