import {
  PrimaryBrokerStaff,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
  Agency,
  ApiGeneralAgencyStaffRole,
  ApiBrokerAgencyStaffRole,
} from '@hbx/api-interfaces';

import {
  isPrimaryGeneralAgencyStaff,
  isGeneralAgencyStaff,
  isPrimaryBroker,
} from './checkStaffType';
import { convertRoleState } from './convertStaff';
import {
  PrimaryAgentVM,
  AssociationProfile,
  AgencyType,
  AgencyAssociation,
  AgencyStaffVM,
} from '../state/agency-staff/agency-staff.models';

export interface Dictionary<T> {
  [id: string]: T;
}

export function createPrimaryBrokerDictionary(
  agencyStaff: Array<
    PrimaryBrokerStaff | GeneralAgencyStaff | BrokerAgencyStaff
  >
): Dictionary<PrimaryAgentVM> {
  const primaryGeneralAgencyStaff: GeneralAgencyStaff[] = agencyStaff
    .filter(isGeneralAgencyStaff)
    .filter(isPrimaryGeneralAgencyStaff);

  const primaryBrokerStaff: PrimaryBrokerStaff[] = agencyStaff.filter(
    isPrimaryBroker
  );

  // Broker Agency
  const brokerAgentDictionary: Dictionary<PrimaryAgentVM> = primaryBrokerStaff.reduce(
    (dictionary, primaryStaff) => {
      return {
        ...dictionary,
        ...createBrokerAgencyPrimaryAgent(primaryStaff),
      };
    },
    {}
  );

  // General Agency
  const generalAgentDictionary: Dictionary<PrimaryAgentVM> = primaryGeneralAgencyStaff.reduce(
    (dictionary, primaryStaff) => {
      return {
        ...dictionary,
        ...createGeneralAgencyPrimaryAgent(primaryStaff),
      };
    },
    {}
  );

  return {
    ...brokerAgentDictionary,
    ...generalAgentDictionary,
  };
}

export function createAssociationProfileDictionaryFromAgency(
  agency: Agency
): Dictionary<AssociationProfile> {
  const { _id, legal_name, profiles } = agency;

  const associationProfiles: AssociationProfile[] = profiles.map(profile => {
    return {
      associationId: profile._id,
      agencyType:
        profile._type === 'BenefitSponsors::Organizations::GeneralAgencyProfile'
          ? AgencyType.General
          : AgencyType.Broker,
      agencyId: _id,
      agencyName: legal_name,
    };
  });

  const profileDictionary: Dictionary<AssociationProfile> = associationProfiles.reduce(
    (dictionary, profile) => {
      return {
        ...dictionary,
        [profile.associationId]: profile,
      };
    },
    {}
  );

  return profileDictionary;
}

export function associationProfileDictionary(
  agencies: Agency[]
): Dictionary<AssociationProfile> {
  const profiles: Dictionary<AssociationProfile> = agencies.reduce(
    (dictionary, agency) => {
      return {
        ...dictionary,
        ...createAssociationProfileDictionaryFromAgency(agency),
      };
    },
    {}
  );

  return profiles;
}

export function createGeneralAgencyPrimaryAgent(
  primaryStaff: GeneralAgencyStaff
): Dictionary<PrimaryAgentVM> {
  const { first_name, last_name, general_agency_staff_roles } = primaryStaff;

  // Assume agent can only be primary on one agency
  const [primaryRole] = general_agency_staff_roles.filter(
    role => role.is_primary
  );

  return {
    [primaryRole.benefit_sponsors_general_agency_profile_id]: {
      brokerRoleId: primaryRole._id,
      agencyProfileId: primaryRole.benefit_sponsors_general_agency_profile_id,
      fullName: `${first_name} ${last_name}`,
    },
  };
}

export function createBrokerAgencyPrimaryAgent(
  primaryStaff: PrimaryBrokerStaff
): Dictionary<PrimaryAgentVM> {
  const { first_name, last_name, broker_role } = primaryStaff;
  return {
    [broker_role.benefit_sponsors_broker_agency_profile_id]: {
      brokerRoleId: broker_role._id,
      agencyProfileId: broker_role.benefit_sponsors_broker_agency_profile_id,
      fullName: `${first_name} ${last_name}`,
    },
  };
}

export function createGeneralAgencyAssociations(
  roles: ApiGeneralAgencyStaffRole[],
  associationProfiles: Dictionary<AssociationProfile>,
  primaryAgents: Dictionary<PrimaryAgentVM>
): AgencyAssociation[] {
  const associations: AgencyAssociation[] = roles.map(
    (role: ApiGeneralAgencyStaffRole) => {
      const { _id: associationId } = role;

      const associationProfile: AssociationProfile =
        associationProfiles[associationId];

      const primaryAgentVM: PrimaryAgentVM = primaryAgents[associationId];

      const association: AgencyAssociation = {
        ...associationProfile,
        primaryAgent: primaryAgentVM,
        currentState: convertRoleState(role.aasm_state),
      };

      return association;
    }
  );

  return associations;
}

export function createBrokerAgencyAssociations(
  roles: ApiBrokerAgencyStaffRole[],
  associationProfiles: Dictionary<AssociationProfile>,
  primaryAgents: Dictionary<PrimaryAgentVM>
): AgencyAssociation[] {
  const associations: AgencyAssociation[] = roles.map(
    (role: ApiBrokerAgencyStaffRole) => {
      const { _id: associationId } = role;

      const associationProfile: AssociationProfile =
        associationProfiles[associationId];

      const primaryAgentVM: PrimaryAgentVM = primaryAgents[associationId];

      const association: AgencyAssociation = {
        ...associationProfile,
        primaryAgent: primaryAgentVM,
        currentState: convertRoleState(role.aasm_state),
      };

      return association;
    }
  );

  return associations;
}

export function createBrokerAgencyStaffVM(
  agencyStaff: BrokerAgencyStaff,
  agencies: Agency[],
  primaryAgencyStaff: Array<
    PrimaryBrokerStaff | GeneralAgencyStaff | BrokerAgencyStaff
  >
): AgencyStaffVM {
  const {
    first_name,
    last_name,
    broker_agency_staff_roles: roles,
    _id,
    hbx_id,
  } = agencyStaff;

  const associationProfiles = associationProfileDictionary(agencies);
  const primaryAgentVMs = createPrimaryBrokerDictionary(primaryAgencyStaff);

  return {
    agencyStaffId: _id,
    hbxId: hbx_id,
    fullName: `${first_name} ${last_name}`,
    agencyAssociations: createBrokerAgencyAssociations(
      roles,
      associationProfiles,
      primaryAgentVMs
    ),
  };
}

export function generalAgencyStaffVM(
  agencyStaff: GeneralAgencyStaff,
  agencies: Agency[],
  primaryAgencyStaff: Array<
    PrimaryBrokerStaff | GeneralAgencyStaff | BrokerAgencyStaff
  >
): AgencyStaffVM {
  const {
    first_name,
    last_name,
    general_agency_staff_roles: roles,
    _id,
    hbx_id,
  } = agencyStaff;

  const associationProfiles = associationProfileDictionary(agencies);
  const primaryAgentVMs = createPrimaryBrokerDictionary(primaryAgencyStaff);

  return {
    agencyStaffId: _id,
    hbxId: hbx_id,
    fullName: `${first_name} ${last_name}`,
    agencyAssociations: createGeneralAgencyAssociations(
      roles,
      associationProfiles,
      primaryAgentVMs
    ),
  };
}
