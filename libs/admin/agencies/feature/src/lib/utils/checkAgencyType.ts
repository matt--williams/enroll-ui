import { AgenciesEntity } from '../state/agencies/agencies.models';

export function isGeneralAgency(agency: AgenciesEntity): boolean {
  return agency.profiles.some(
    profile =>
      profile._type === 'BenefitSponsors::Organizations::GeneralAgencyProfile'
  );
}

export function isBrokerAgency(agency: AgenciesEntity): boolean {
  return agency.profiles.some(
    profile =>
      profile._type === 'BenefitSponsors::Organizations::BrokerAgencyProfile'
  );
}
