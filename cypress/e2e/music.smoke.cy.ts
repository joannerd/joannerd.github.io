import { assertGlobalLayout } from './helpers';

describe('Music page smoke test', () => {
  it('loads recordings and events', () => {
    cy.visit('/music');
    assertGlobalLayout();
    cy.url().should('include', '/music');
    cy.title().should('eq', 'Music | Joanna Chen');
    cy.contains('h2', 'Recordings').should('be.visible');
    cy.contains('h2', 'Events').should('be.visible');
    cy.get('iframe[title]').should('have.length.at.least', 3);
    cy.contains('h3', '2021').should('be.visible');
    cy.contains('p', 'Southern California Marimba').should('be.visible');
  });
});
