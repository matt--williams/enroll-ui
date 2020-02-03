import { getGreeting } from '../support/app.po';
import { mockPerson } from '../support/mocks/person.mock';
import { mockBenefitSponsorsOrg } from '../support/mocks/organization.mock';

describe('admin', () => {
  beforeEach(() => {
    cy.server();
    cy.route('**/people', [mockPerson()]).as('people');
    cy.route('**/organizations', [mockBenefitSponsorsOrg('Broker')]).as(
      'organizations'
    );
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.wait('@people');
    cy.wait('@organizations');
  });
});
