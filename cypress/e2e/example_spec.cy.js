describe('My First Test', () => {
  it('Visits the Kitchen Sink and checks for a title', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('filter').click();
    cy.url().should('include', '/commands/traversal');
  });
});

describe('My Second Test', () => {
  it("should filter id 'filter'", () => {
    cy.visit('https://example.cypress.io/commands/traversal');
    cy.get('h4').filter('#filter').should('contain', '.filter()');
  });
});

describe('My Third Practice Test', () => {
  it("Should be use eq to get eq", () => {
    cy.visit('https://example.cypress.io');
    cy.get(".home-list>li>ul>li").eq(6).should('contain', 'eq');
  });
  it("Try to be simpler", () => {
      cy.visit('http://example.cypress.io');
      cy.get(".home-list").find('a').contains('eq').click();
      cy.url().should('contain', "/commands/traversal");
  });
});