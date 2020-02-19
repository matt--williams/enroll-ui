import { mockAgencies } from '@hbx/utils/testing';
import { getSearchBox, getStaffList } from '../support/agency-staff.po';

describe('Agency Staff', () => {
  const { agencies, agencyStaff } = mockAgencies();

  beforeEach(() => {
    cy.server();
    cy.route('**/agencies', agencies).as('agencies');
    cy.route('**/agencies/agency_staff', agencyStaff).as('agencyStaff');
    cy.visit('/');
  });

  it('display a complete list of agency staff', () => {
    cy.wait('@agencyStaff');
    cy.get('hbx-staff-container').should('have.length', 25);
  });

  it('should return one result if an agent name is used for the search', () => {
    const [nonPrimaryAgent] = agencyStaff.filter(
      staff => staff.broker_agency_staff_roles
    );

    getSearchBox().type(nonPrimaryAgent.first_name);

    getStaffList().should('have.length', 1);

    getSearchBox().clear();

    getStaffList().should('have.length', 25);
  });

  it('should show a helpful message if the search query returns no results', () => {
    getSearchBox().type('2345oi8uasdlfkjl23423');

    getStaffList().should('have.length', 0);
    cy.get('.no-results-container').should('exist');
  });
});
