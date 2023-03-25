/// <reference types="cypress" />

describe('Currency conversion', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('displays as expected with default values', () => {
    cy.contains('Amount')
    cy.get('#mui-component-select-currency1').should('have.text', 'GBP/British Pound Sterling')
    cy.get('#mui-component-select-currency2').should('have.text', 'USD/United States Dollar')
    cy.get(':button').should('be.disabled')
  })

  it('converts GBP to USD', () => {
    cy.get('input[name="amount"]').clear().type('100')

    cy.contains('Convert').click()

    cy.contains('100 GBP is equivalent to 122.00 USD')
    cy.contains('The current rate is 1.22')
  })
})
