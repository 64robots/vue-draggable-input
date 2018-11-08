// Create custom Cypress commands and overwrite existing ones.
// https://on.cypress.io/custom-commands

Cypress.Commands.add('componentsAreRenderedCorrectly', () => {
  cy.get('div').find('input')
})
