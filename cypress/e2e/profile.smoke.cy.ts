import { assertGlobalLayout } from './helpers';

describe('Profile page smoke test', () => {
  it('loads profile content and metadata', () => {
    cy.visit('/');
    assertGlobalLayout();
    cy.url().should('include', '/');
    cy.title().should('eq', 'Joanna Chen - Software Engineer | Percussionist');
    cy.contains('h2', 'Software Engineer').should('be.visible');
    cy.get('img[alt="Joanna Chen"]').should('be.visible');
    cy.contains('p', 'senior doggo named Lemon').should('be.visible');
  });
});
