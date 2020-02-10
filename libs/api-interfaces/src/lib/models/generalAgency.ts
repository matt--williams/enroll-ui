import { BaseBenefitSponsorsOrganization } from './benefitSponsorsOrg';
import { GeneralAgencyProfile } from './generalAgencyProfile';

export interface GeneralAgency extends BaseBenefitSponsorsOrganization {
  _type: 'BenefitSponsors::Organizations::GeneralOrganization';
  profiles: GeneralAgencyProfile[];
}
