import { BaseOrganization } from './organization';
import { BrokerAgencyProfile } from './brokerAgencyProfile';
import { GeneralAgencyProfile } from './generalAgencyProfile';

export interface Agency extends BaseOrganization {
  profiles: Array<BrokerAgencyProfile | GeneralAgencyProfile>;
}
