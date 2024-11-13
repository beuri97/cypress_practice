describe('My First Test', () => {
  it('Visits the Kitchen Sink and checks for a title', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });
});