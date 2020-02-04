import { getGreeting } from '../support/app.po';
import { mockBasePerson } from '../support/mocks/person.mock';
import { mockGeneralAgency } from '../support/mocks/organization.mock';

describe('admin', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/people', [mockBasePerson()]).as('people');
    cy.route('**/organizations', [mockGeneralAgency('Broker')]).as(
      'organizations'
    );
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.wait('@people');
    cy.wait('@organizations');
  });
});
