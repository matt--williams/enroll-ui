import { approvedBrokerAgencyWithStaff } from '@hbx/utils/testing';
import {
  Agency,
  BrokerAgencyStaff,
  PrimaryBrokerStaff,
} from '@hbx/api-interfaces';

import {
  createBrokerAgencyStaffVM,
  createPrimaryAgencyStaffDictionary,
  createAssociationProfileDictionaryFromSingleAgency,
  createBrokerAgencyPrimaryAgent,
} from './createAgencyStaffVM';
import {
  AssociationProfile,
  AgencyType,
  AgencyAssociation,
  AgencyRoleState,
  AgencyStaffVM,
  PrimaryAgentVM,
} from '../shared/models';
import { Dictionary } from '@ngrx/entity';

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

    const primaryBrokerDictionary: Dictionary<PrimaryAgentVM> = {
      [broker_role.benefit_sponsors_broker_agency_profile_id]: {
        brokerRoleId: broker_role._id,
        agencyProfileId: broker_role.benefit_sponsors_broker_agency_profile_id,
        fullName: `${first_name} ${last_name}`,
        npn: broker_role.npn,
      },
    };

    expect(
      createPrimaryAgencyStaffDictionary([...brokerStaff, primaryBroker])
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
        agencyProfileId: profile._id,
        agencyType:
          profile._type ===
          'BenefitSponsors::Organizations::GeneralAgencyProfile'
            ? AgencyType.General
            : AgencyType.Broker,
        agencyId: _id,
        agencyName: legal_name,
      },
    };

    expect(
      createAssociationProfileDictionaryFromSingleAgency(brokerAgency)
    ).toEqual(expectedDictionary);
  });

  it('create broker agency staff VMs with agency associations', () => {
    const [targetStaff] = brokerStaff;

    const { first_name, last_name, _id, hbx_id } = targetStaff;

    const { _id: agencyId, legal_name, profiles } = brokerAgency;
    const [targetProfile] = profiles;

    const agencyAssociation: AgencyAssociation = {
      agencyId,
      agencyName: legal_name,
      agencyType: AgencyType.Broker,
      agencyProfileId: targetProfile._id,
      currentState: AgencyRoleState.Active,
      primaryAgent: {
        brokerRoleId: primaryBroker.broker_role._id,
        fullName: `${primaryBroker.first_name} ${primaryBroker.last_name}`,
        agencyProfileId:
          primaryBroker.broker_role.benefit_sponsors_broker_agency_profile_id,
        npn: primaryBroker.broker_role.npn,
      },
    };

    const expectedBrokerVM: AgencyStaffVM = {
      agencyStaffId: _id,
      hbxId: hbx_id,
      fullName: `${first_name} ${last_name}`,
      agencyAssociations: [agencyAssociation],
    };

    const associationDictionary = createAssociationProfileDictionaryFromSingleAgency(
      brokerAgency
    );

    const primaryAgentVM = createBrokerAgencyPrimaryAgent(primaryBroker);

    expect(
      createBrokerAgencyStaffVM(
        targetStaff,
        associationDictionary,
        primaryAgentVM
      )
    ).toEqual(expectedBrokerVM);
  });
});

describe('Agency VM creation', () => {
  beforeEach(() => {
    const approvedAgencies = Array.from(
      { length: 5 },
      approvedBrokerAgencyWithStaff
    );

    const allAgencies = approvedAgencies
      .map(agency => agency.brokerAgency)
      .flat();
  });
  xit('should create a single agency VM', () => {});
});
