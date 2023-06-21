/// <reference types="cypress" />

describe('Empty author state', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('displays as expected with default values', () => {
    cy.contains('Github Repository Viewer')
    cy.contains('No Repositories Found')
  })
})
