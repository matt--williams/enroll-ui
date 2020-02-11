import {
  PrimaryBrokerStaff,
  BrokerAgencyStaff,
  GeneralAgencyStaff,
} from '@hbx/api-interfaces';
import {
  mockPrimaryBroker,
  mockBrokerAgencyStaff,
  mockGeneralAgencyStaff,
} from '@hbx/utils/testing';
import { isGeneralAgencyStaff, isPrimaryBroker } from './checkStaffType';

const primaryBroker: PrimaryBrokerStaff = mockPrimaryBroker('123', '234');
const brokerStaff: BrokerAgencyStaff = mockBrokerAgencyStaff('533');
const generalAgencyStaff: GeneralAgencyStaff = mockGeneralAgencyStaff(
  false,
  '1234'
);

describe('Staff type checking', () => {
  it('Should correctly identify general agency staff', () => {
    expect(isGeneralAgencyStaff(generalAgencyStaff)).toBeTruthy();
    expect(isGeneralAgencyStaff(brokerStaff)).toBeFalsy();
  });

  it('Should correctly identify primary broker', () => {
    expect(isPrimaryBroker(primaryBroker)).toBeTruthy();
    expect(isPrimaryBroker(brokerStaff)).toBeFalsy();
  });

  it('Should allow for two levels of checking', () => {
    const brokerIsPrimary =
      !isGeneralAgencyStaff(primaryBroker) && isPrimaryBroker(primaryBroker);
    expect(brokerIsPrimary).toBeTruthy();
  });
});
