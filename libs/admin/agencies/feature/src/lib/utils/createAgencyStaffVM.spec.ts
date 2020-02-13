import { approvedBrokerAgencyWithStaff } from '@hbx/utils/testing';

import {
  createBrokerAgencyStaffVM,
  createPrimaryBrokerDictionary,
  createAssociationProfileDictionaryFromAgency,
  Dictionary,
} from './createAgencyStaffVM';
import {
  AgencyStaffVM,
  AgencyAssociation,
  AgencyType,
  AgencyRoleState,
  AssociationProfile,
} from '../state/agency-staff/agency-staff.models';
import {
  Agency,
  BrokerAgencyStaff,
  PrimaryBrokerStaff,
} from '@hbx/api-interfaces';

let brokerAgency: Agency;
let brokerStaff: BrokerAgencyStaff[];
let primaryBroker: PrimaryBrokerStaff;

describe('Broker Agency Staff VM creation', () => {
  beforeEach(() => {
    const approvedAgency = approvedBrokerAgencyWithStaff();

    brokerAgency = approvedAgency.brokerAgency;
    brokerStaff = approvedAgency.brokerStaff;
    primaryBroker = approvedAgency.primaryBroker;
  });

  it('should create a dictionary of primary agents', () => {
    const { broker_role, first_name, last_name } = primaryBroker;

    const primaryBrokerDictionary = {
      [broker_role.benefit_sponsors_broker_agency_profile_id]: {
        brokerRoleId: broker_role._id,
        agencyProfileId: broker_role.benefit_sponsors_broker_agency_profile_id,
        fullName: `${first_name} ${last_name}`,
      },
    };

    expect(
      createPrimaryBrokerDictionary([...brokerStaff, primaryBroker])
    ).toEqual(primaryBrokerDictionary);

    expect(broker_role.benefit_sponsors_broker_agency_profile_id).toEqual(
      brokerAgency.profiles[0]._id
    );
  });

  it('should create a dictionary of Association Profiles from an agency', () => {
    const { _id, legal_name, profiles } = brokerAgency;
    const [profile] = profiles;

    const expectedDictionary: Dictionary<AssociationProfile> = {
      [profile._id]: {
        associationId: profile._id,
        agencyType:
          profile._type ===
          'BenefitSponsors::Organizations::GeneralAgencyProfile'
            ? AgencyType.General
            : AgencyType.Broker,
        agencyId: _id,
        agencyName: legal_name,
      },
    };

    expect(createAssociationProfileDictionaryFromAgency(brokerAgency)).toEqual(
      expectedDictionary
    );
  });

  it('create broker agency staff VMs with agency associations', () => {
    const [targetStaff] = brokerStaff;

    const {
      first_name,
      last_name,
      broker_agency_staff_roles: roles,
      _id,
      hbx_id,
    } = targetStaff;

    const { _id: agencyId, legal_name, profiles } = brokerAgency;
    const [targetProfile] = profiles;

    const agencyAssociation: AgencyAssociation = {
      agencyId,
      agencyName: legal_name,
      agencyType: AgencyType.Broker,
      associationId: targetProfile._id,
      currentState: AgencyRoleState.Active,
      primaryAgent: {
        brokerRoleId: primaryBroker.broker_role._id,
        fullName: `${primaryBroker.first_name} ${primaryBroker.last_name}`,
        agencyProfileId:
          primaryBroker.broker_role.benefit_sponsors_broker_agency_profile_id,
      },
    };

    const expectedBrokerVM: AgencyStaffVM = {
      agencyStaffId: _id,
      hbxId: hbx_id,
      fullName: `${first_name} ${last_name}`,
      agencyAssociations: [agencyAssociation],
    };

    expect(
      createBrokerAgencyStaffVM(targetStaff, [brokerAgency], [primaryBroker])
    ).toEqual(expectedBrokerVM);
  });
});
