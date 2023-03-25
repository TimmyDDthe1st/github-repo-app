import React from "react";
import Form from "./Form";
import { MockCurrencies } from "@/testUtils/mocks";

describe("<Form />", () => {
  beforeEach(() => {
    cy.mount(<Form currencies={MockCurrencies} />);
  });

  it("has default values", () => {
    cy.get("input").should("have.value", "");
    cy.contains("GBP/Great British Pounds");
    cy.contains("USD/United States Dollar");
    cy.get(":button").should("be.disabled");
  });
});

describe("Amount Input", () => {
  beforeEach(() => {
    cy.mount(<Form currencies={MockCurrencies} />);
  });

  it("adding valid amount enables button", () => {
    cy.get("input[name='amount']").type("1");

    cy.get(":button").should("be.enabled");
  });

  it("shows error when amount is not a number", () => {
    cy.get("input[name='amount']").type("asdf");

    cy.contains("This is not a valid number");

    cy.get(":button").should("be.disabled");
  });

  it("shows error when amount is less than 0.01", () => {
    const input = cy.get("input[name='amount']");
    input.type("0.00");

    cy.contains("You can convert a minimum of 0.01");

    cy.get(":button").should("be.disabled");

    input.clear();
    input.type("-1");

    cy.contains("You can convert a minimum of 0.01");

    cy.get(":button").should("be.disabled");
  });

  it("shows error when amount is more than 1000000", () => {
    const input = cy.get("input[name='amount']");
    input.type("10000000");

    cy.contains("You can convert a maximum of 1,000,000");

    cy.get(":button").should("be.disabled");

    input.clear();
    input.type("1000000.01");

    cy.contains("You can convert a maximum of 1,000,000");

    cy.get(":button").should("be.disabled");
  });

  it("shows error when symbols are input", () => {
    const input = cy.get("input[name='amount']");
    input.type("!@£$%&^%$£$%^&*");

    cy.contains("This is not a valid number");

    cy.get(":button").should("be.disabled");
  });
});
