import {
  Agency,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
  PrimaryBrokerStaff,
} from '@hbx/api-interfaces';

import {
  approvedBrokerAgencyWithStaff,
  ApprovedBrokerAgencyWithStaff,
} from './approvedBrokerAgencyWithStaff';
import {
  approvedGeneralAgencyWithStaff,
  ApprovedGeneralAgencyWithStaff,
} from './approvedGeneralAgencyWithStaff';

export interface FullAgencies {
  agencies: Agency[];
  agencyStaff: Array<
    GeneralAgencyStaff | BrokerAgencyStaff | PrimaryBrokerStaff
  >;
}

export function mockAgencies(totalAgencies: number = 5): FullAgencies {
  const numberOfBrokerAgencies = totalAgencies - 1;
  const numberOfGeneralAgencies = 1;

  const approvedBrokerAgencies: ApprovedBrokerAgencyWithStaff[] = Array.from(
    { length: numberOfBrokerAgencies },
    approvedBrokerAgencyWithStaff
  );

  const approvedGeneralAgencies: ApprovedGeneralAgencyWithStaff[] = Array.from(
    { length: numberOfGeneralAgencies },
    approvedGeneralAgencyWithStaff
  );

  const approvedBrokerAgencyStaff: Array<
    BrokerAgencyStaff | PrimaryBrokerStaff
  > = approvedBrokerAgencies.reduce((staff, agency) => {
    return [...staff, ...agency.brokerStaff, agency.primaryBroker];
  }, []);

  const approvedGeneralAgencyStaff: GeneralAgencyStaff[] = approvedGeneralAgencies.reduce(
    (staff, agency) => {
      return [...staff, ...agency.agencyStaff, agency.primaryAgent];
    },
    []
  );

  const brokerAgencies = approvedBrokerAgencies.map(
    agency => agency.brokerAgency
  );
  const generalAgencies = approvedGeneralAgencies.map(
    agency => agency.generalAgency
  );

  const agencies: Agency[] = [...brokerAgencies, ...generalAgencies];

  const agencyStaff = [
    ...approvedBrokerAgencyStaff,
    ...approvedGeneralAgencyStaff,
  ];

  return {
    agencies,
    agencyStaff,
  };
}
