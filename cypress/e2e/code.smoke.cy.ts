import { assertGlobalLayout } from './helpers';

describe('Code page smoke test', () => {
  it('loads projects and external links', () => {
    cy.visit('/code');
    assertGlobalLayout();
    cy.url().should('include', '/code');
    cy.title().should('eq', 'Code | Joanna Chen');
    cy.contains('h2', 'Pomoplan').should('be.visible');
    cy.contains('h2', 'Brewer').should('be.visible');
    cy.get('article img').should('have.length.at.least', 3);
    cy.get('a[aria-label="Pomoplan"]').should('have.attr', 'target', '_blank');
    cy.get('a[aria-label="Pomoplan GitHub"]').should(
      'have.attr',
      'target',
      '_blank'
    );
  });
});
