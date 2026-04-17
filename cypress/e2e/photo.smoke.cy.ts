import { assertGlobalLayout } from './helpers';

describe('Photo page smoke test', () => {
  it('loads image links', () => {
    cy.visit('/photo');
    assertGlobalLayout();
    cy.url().should('include', '/photo');
    cy.title().should('eq', 'Photography | Joanna Chen');
    cy.get('a[aria-label^="Photo #"]').should('have.length', 6);
    cy.get('article a img').should('have.length', 6);
    cy.get('article a')
      .first()
      .invoke('attr', 'href')
      .should('include', 'https://www.instagram.com/p/');
  });
});
