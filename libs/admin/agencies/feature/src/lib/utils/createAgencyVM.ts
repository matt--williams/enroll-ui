import {
  PrimaryBrokerStaff,
  Agency,
  OrganizationAasmState,
  GeneralAgencyStaff,
  BrokerAgencyStaff,
} from '@hbx/api-interfaces';
import {
  AssociationProfile,
  AgencyType,
  AgencyVM,
  Dictionary,
  PrimaryAgentVM,
} from '@hbx/admin/shared/view-models';

import { createPrimaryAgencyStaffDictionary } from './createAgencyStaffVM';

export function createAssociationProfilesFromSingleAgency(
  agency: Agency
): AssociationProfile[] {
  const { _id, legal_name, profiles } = agency;

  const activeProfiles = profiles.filter(
    profile => profile.aasm_state === OrganizationAasmState.Approved
  );

  return activeProfiles.map(profile => {
    const associationProfile: AssociationProfile = {
      agencyProfileId: profile._id,
      agencyId: agency._id,
      agencyType:
        profile._type === 'BenefitSponsors::Organizations::GeneralAgencyProfile'
          ? AgencyType.General
          : AgencyType.Broker,
      agencyName: legal_name,
    };

    return associationProfile;
  });
}

export function createAgencyVMsFromAssociationProfiles(
  agencyProfiles: AssociationProfile[],
  primaryStaff: Dictionary<PrimaryAgentVM>
): AgencyVM[] {
  const agencyVMs: AgencyVM[] = agencyProfiles.map(profile => {
    const agencyVM: AgencyVM = {
      ...profile,
      primaryAgent: primaryStaff[profile.agencyProfileId],
    };

    return agencyVM;
  });

  return agencyVMs;
}

export function createAgencyVMs(
  agencies: Agency[],
  agencyStaff: Array<
    PrimaryBrokerStaff | GeneralAgencyStaff | BrokerAgencyStaff
  >
): AgencyVM[] {
  const brokerDictionary: Dictionary<PrimaryAgentVM> = createPrimaryAgencyStaffDictionary(
    agencyStaff
  );
  const agencyProfiles = agencies
    .map(createAssociationProfilesFromSingleAgency)
    .flat();

  const agencyVMs: AgencyVM[] = createAgencyVMsFromAssociationProfiles(
    agencyProfiles,
    brokerDictionary
  );

  return agencyVMs;
}
