export const assertGlobalLayout = () => {
  cy.contains('h1', 'Joanna Chen').should('be.visible');
  cy.get('nav button').should('have.length', 5);
  cy.contains('nav button', 'Profile').should('be.visible');
  cy.contains('nav button', 'Resume').should('be.visible');
  cy.contains('nav button', 'Code').should('be.visible');
  cy.contains('nav button', 'Music').should('be.visible');
  cy.contains('nav button', 'Photo').should('be.visible');
  cy.get('a[aria-label="GitHub"]')
    .should('be.visible')
    .and('have.attr', 'href', 'https://github.com/joannerd');
  cy.get('a[aria-label="LinkedIn"]')
    .should('be.visible')
    .and('have.attr', 'href', 'https://www.linkedin.com/in/joannerd/');
};
