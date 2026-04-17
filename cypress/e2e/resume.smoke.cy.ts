import { assertGlobalLayout } from './helpers';

describe('Resume page smoke test', () => {
  it('loads major resume sections', () => {
    cy.visit('/resume');
    assertGlobalLayout();
    cy.url().should('include', '/resume');
    cy.title().should('eq', 'Resume | Joanna Chen');
    cy.contains('h2', 'Experience').should('be.visible');
    cy.contains('h2', 'Projects').should('be.visible');
    cy.contains('h2', 'Education').should('be.visible');
    cy.contains('h3', 'Zendesk').should('be.visible');
    cy.get('button[aria-label="View Joanna Chen\'s resume"]').should(
      'be.visible'
    );
  });
});
