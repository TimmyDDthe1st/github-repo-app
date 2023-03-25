import React from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import { MockCurrencies } from "@/testUtils/mocks";

describe("<CurrencyDropdown />", () => {
  beforeEach(() =>
    cy.mount(
      <CurrencyDropdown
        currencies={MockCurrencies}
        value={"USD"}
        handleChange={() => {}}
        name="currency"
        setShowConversionCard={() => {}}
      />
    )
  );

  it("renders", () => {
    cy.contains("USD");
    cy.contains("United States Dollar");
  });
});
