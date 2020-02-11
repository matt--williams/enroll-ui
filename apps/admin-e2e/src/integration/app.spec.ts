import { mockAgencies } from '@hbx/utils/testing';

describe('brokers and broker staff', () => {
  const { agencies, agencyStaff } = mockAgencies();

  beforeEach(() => {
    cy.server();
    cy.route('**/agencies', agencies).as('agencies');
    cy.route('**/agencies/agency-staff', agencyStaff).as('agencyStaff');
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.wait('@agencyStaff');
  });
});
