import { mockGeneralAgencyStaff } from '@hbx/utils/testing';
import {
  BrokerAgencyStaff,
  BrokerAgencyStaffRoleState,
  PersonPhoneKind,
  PersonAddressKind,
  EmailKind,
  Gender,
  PrimaryBrokerStaff,
  ProviderKind,
  BrokerRoleState,
} from '@hbx/api-interfaces';

import { convertStaff } from './convertStaff';
import { StaffRole } from '../state/agency-staff/agency-staff.models';
import { AgencyRoleState } from '../shared/models';

const brokerStaff: BrokerAgencyStaff = {
  _id: '51b151a1-1562-4844-bcd6-aa0754eb416b',
  version: 1,
  is_tobacco_user: 'unknown',
  no_dc_address: false,
  no_dc_address_reason: '',
  is_active: true,
  hbx_id: 'ac95b3d5-1b8b-40a4-980a-7d134fcd7fd2',
  first_name: 'Ahmad',
  last_name: 'Stracke',
  dob: '1990-03-10T21:29:55.605Z',
  gender: Gender.Male,
  encrypted_ssn: '2f2twls7k58azjndkk',
  updated_by_id: '5b0702f1-fb09-4672-95f8-e3423ca3e060',
  updated_at: '2020-02-10T13:35:34.854Z',
  created_at: '2020-02-08T16:33:23.444Z',
  addresses: [
    {
      _id: 'd97f8723-a391-4098-aa91-ac18256601d2',
      address_1: '91590 Kulas Lock',
      city: 'Washington',
      state: 'DC',
      zip: '20036',
      updated_at: '2020-02-10T18:15:01.640Z',
      created_at: '2020-02-10T14:28:20.051Z',
      kind: PersonAddressKind.Home,
    },
  ],
  tracking_version: 1,
  emails: [
    {
      _id: '1381a65f-fe39-4c6a-a6be-2414213ec054',
      kind: EmailKind.Home,
      address: 'Retta.Balistreri@yahoo.com',
      updated_at: '2020-02-10T18:05:18.572Z',
      created_at: '2020-02-10T08:15:17.170Z',
      tracking_version: 1,
    },
  ],
  inbox: {
    _id: '62a7cae3-93bd-472a-acc1-840635e63a22',
    access_key: 'g',
    messages: [
      {
        _id: 'bcaa3146-a23b-4ec2-ac20-44bcb2b0dc68',
        subject: 'deposit transmit Orchestrator',
        body:
          'Borders eyeballs Dynamic supply-chains action-items Mississippi Rhode Island plug-and-play Shoes database Usability Handcrafted Soft Cheese systems bottom-line Chief real-time Avon Optimization quantifying Kroon',
        from: 'Rippin, Flatley and Rippin',
        message_read: false,
        created_at: '2020-02-06T01:21:13.278Z',
      },
      {
        _id: 'ca9e5d4a-2e56-462f-ba43-6a43d84e0569',
        subject: 'Regional executive gold',
        body:
          'Engineer Shore RSS generating optimize Iowa Fundamental maroon Borders Ireland Practical Practical Cotton Soap Practical Frozen Chair bus application Configurable solutions Consultant programming needs-based',
        from: 'Goyette LLC',
        message_read: true,
        created_at: '2020-02-03T07:12:43.175Z',
      },
      {
        _id: '2c6fd2b9-9522-436e-ba0a-77ff4ae237c4',
        subject: 'West Virginia Synergized Architect',
        body:
          'adapter Electronics PNG Washington neural Plains Jamaica high-level Lithuanian Litas Music GB salmon Program target Tuvalu Lake Agent Books Kids e-markets',
        from: 'Kuhic, Bartoletti and Casper',
        message_read: false,
        created_at: '2020-02-06T23:39:02.143Z',
      },
    ],
  },
  phones: [
    {
      _id: 'eb9eea8a-dda5-477b-bac0-9e4ca2b6caae',
      area_code: '869',
      number: '9559424',
      full_phone_number: '8699559424',
      updated_at: '2020-02-10T13:08:41.688Z',
      created_at: '2020-02-10T06:20:13.932Z',
      kind: PersonPhoneKind.Home,
    },
  ],
  broker_agency_staff_roles: [
    {
      _id: 'd1fa61e6-a5bd-418f-b5c9-b0f26117fe35',
      npn: '2652525496',
      aasm_state: BrokerAgencyStaffRoleState.Active,
      tracking_version: 1,
      workflow_state_transitions: [
        {
          _id: '44e2c0b3-f49d-4118-b382-23a2515d072c',
          from_state: BrokerAgencyStaffRoleState.Pending,
          to_state: BrokerAgencyStaffRoleState.Active,
          event: 'broker_agency_accept!',
          transition_at: '2020-02-09T19:52:38.653Z',
          created_at: '2020-02-09T19:52:38.653Z',
          updated_at: '2020-02-09T19:52:38.653Z',
        },
      ],
      benefit_sponsors_broker_agency_profile_id: '123123',
    },
  ],
};

const primaryBroker: PrimaryBrokerStaff = {
  _id: '4e70220b-8090-4d66-b6d9-8f900a7e3206',
  version: 1,
  is_tobacco_user: 'unknown',
  no_dc_address: false,
  no_dc_address_reason: '',
  is_active: true,
  hbx_id: 'dabb0ce6-2258-4849-bd7a-9e6b149d3194',
  first_name: 'Yoshiko',
  last_name: 'Medhurst',
  dob: '2000-09-27T04:21:28.735Z',
  gender: Gender.Female,
  encrypted_ssn: 'klrntztri0qb20sdca',
  updated_by_id: 'de2e3669-ce38-4333-b3cf-e156c61b9c89',
  updated_at: '2020-02-08T10:10:21.989Z',
  created_at: '2020-02-03T14:18:58.104Z',
  addresses: [
    {
      _id: 'b70b6c72-2134-47ee-9711-7721f9afaf71',
      address_1: '17172 Effertz Oval',
      city: 'Washington',
      state: 'DC',
      zip: '20036',
      updated_at: '2020-02-10T19:42:28.623Z',
      created_at: '2020-02-10T13:49:29.733Z',
      kind: PersonAddressKind.Home,
    },
  ],
  tracking_version: 1,
  emails: [
    {
      _id: '316b81dd-9591-4f8c-bb21-c9aa684a74b4',
      kind: EmailKind.Work,
      address: 'Kennedy_Durgan13@hotmail.com',
      updated_at: '2020-02-10T07:41:39.088Z',
      created_at: '2020-02-10T02:14:26.588Z',
      tracking_version: 1,
    },
  ],
  inbox: {
    _id: '1fedef47-e199-4486-a037-228a1a3ae6f2',
    access_key: 'p',
    messages: [
      {
        _id: 'd81fbf3c-3aa7-4606-9927-2e34cabf6ce5',
        subject: 'Practical connecting productize',
        body:
          'cutting-edge Reverse-engineered Baby Forward Michigan Mountains Shoes sticky Pants Plastic SDD Thailand azure Rubber Auto Loan Account connecting Alabama Green Handcrafted Cotton Chips Kids',
        from: 'Marvin LLC',
        message_read: true,
        created_at: '2020-02-06T15:37:24.246Z',
      },
      {
        _id: 'fce92d91-c09d-4e25-bab1-7af5e5a1f8bc',
        subject: 'calculating Cape compressing',
        body:
          'Ohio Belize Credit Card Account Manor mindshare Fantastic Soft Car Investment Account back up hard drive Unions Riel solution payment withdrawal human-resource payment Sri Lanka quantify Buckinghamshire Guinea-Bissau',
        from: 'Nitzsche, Ullrich and Feest',
        message_read: false,
        created_at: '2020-02-10T02:53:42.765Z',
      },
      {
        _id: 'd66fae0b-547b-4ad2-a961-61bd761682ae',
        subject: 'SAS Berkshire magnetic',
        body:
          'Cambridgeshire program overriding Auto Loan Account compressing deposit synergistic impactful Frozen Tokelau withdrawal virtual networks Intelligent Frozen Chips Generic Soft Keyboard programming orange Generic Heights USB',
        from: 'Bergstrom Group',
        message_read: true,
        created_at: '2020-02-04T08:53:55.306Z',
      },
    ],
  },
  phones: [
    {
      _id: '16ae5f58-b8f2-492f-aa1f-f350814634d6',
      area_code: '336',
      number: '2087539',
      full_phone_number: '3362087539',
      updated_at: '2020-02-10T10:48:59.201Z',
      created_at: '2020-02-10T07:28:49.679Z',
      kind: PersonPhoneKind.Home,
    },
  ],
  broker_role: {
    _id: '2334',
    languages_spoken: ['en'],
    carrier_appointments: {
      'Aetna Health Inc': true,
      'Aetna Life Insurance Company': true,
      'Carefirst Bluechoice Inc': true,
      'Group Hospitalization and Medical Services Inc': true,
      'Kaiser Foundation': true,
      'Optimum Choice': true,
      'United Health Care Insurance': true,
      'United Health Care Mid Atlantic': true,
    },
    provider_kind: ProviderKind.Broker,
    npn: '544434728',
    benefit_sponsors_broker_agency_profile_id: '123123',
    aasm_state: BrokerRoleState.Active,
    created_at: 'Sun Feb 09 2020 15:32:33 GMT-0500 (Eastern Standard Time)',
    updated_at: 'Sun Feb 09 2020 19:08:05 GMT-0500 (Eastern Standard Time)',
    working_hours: false,
    workflow_state_transitions: [
      {
        _id: '493f9edf-42b0-4f42-9f31-c627b49e4c32',
        from_state: BrokerRoleState.Applicant,
        to_state: BrokerRoleState.Applicant,
        transition_at: '2020-02-10T08:37:24.090Z',
      },
      {
        _id: '34e55a2c-9049-435d-b6e9-d61ea7be0e83',
        from_state: BrokerRoleState.Applicant,
        to_state: BrokerRoleState.Active,
        event: 'approve!',
        transition_at: '2020-02-10T18:59:21.443Z',
        updated_at: '2020-02-10T18:59:21.443Z',
        created_at: '2020-02-10T18:59:21.443Z',
      },
    ],
    reason: '',
    tracking_version: 1,
    license: true,
    training: true,
  },
};

describe('Converting agency staff to BrokerStaffEntity', () => {
  it('Should convert a broker agency staff to a BrokerStaffEntity', () => {
    const { staffRoles } = convertStaff(brokerStaff);

    const expectedRoles: StaffRole[] = [
      {
        _id: 'd1fa61e6-a5bd-418f-b5c9-b0f26117fe35',
        npn: '2652525496',
        tracking_version: 1,
        aasm_state: AgencyRoleState.Active,
        workflow_state_transitions: [
          {
            _id: '44e2c0b3-f49d-4118-b382-23a2515d072c',
            from_state: AgencyRoleState.Pending,
            to_state: AgencyRoleState.Active,
            transition_at: new Date('2020-02-09T19:52:38.653Z'),
            updated_at: new Date('2020-02-09T19:52:38.653Z'),
            created_at: new Date('2020-02-09T19:52:38.653Z'),
          },
        ],
        agencyId: '123123',
        primaryStaff: false,
      },
    ];

    expect(staffRoles).toEqual(expectedRoles);
  });

  it('Should convert a primary broker staff to a BrokerStaffEntity', () => {
    const { staffRoles } = convertStaff(primaryBroker);

    const expectedRoles: StaffRole[] = [
      {
        _id: '2334',
        npn: '544434728',
        tracking_version: 1,
        aasm_state: AgencyRoleState.Active,
        workflow_state_transitions: [
          {
            _id: '493f9edf-42b0-4f42-9f31-c627b49e4c32',
            from_state: AgencyRoleState.Other,
            to_state: AgencyRoleState.Other,
            transition_at: new Date('2020-02-10T08:37:24.090Z'),
          },
          {
            _id: '34e55a2c-9049-435d-b6e9-d61ea7be0e83',
            from_state: AgencyRoleState.Other,
            to_state: AgencyRoleState.Active,
            transition_at: new Date('2020-02-10T18:59:21.443Z'),
            updated_at: new Date('2020-02-10T18:59:21.443Z'),
            created_at: new Date('2020-02-10T18:59:21.443Z'),
          },
        ],
        agencyId: '123123',
        primaryStaff: true,
      },
    ];

    expect(staffRoles).toEqual(expectedRoles);
  });
  xit('Should convert a primary general agency staff to a BrokerStaffEntity', () => {
    const primaryGeneralAgencyStaff = mockGeneralAgencyStaff(true, '3425235');
    console.log(primaryGeneralAgencyStaff);
    console.log(primaryGeneralAgencyStaff.inbox.messages);
    console.log(primaryGeneralAgencyStaff);
  });
  xit('Should convert a non-primary general agency staff to a BrokerStaffEntity', () => {
    const generalAgencyStaff = mockGeneralAgencyStaff(false, '3425235');
    console.log(generalAgencyStaff);
  });
});
