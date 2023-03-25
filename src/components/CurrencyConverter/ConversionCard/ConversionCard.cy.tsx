import React from "react";
import ConversionCard from "./ConversionCard";

describe("<ConversionCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ConversionCard
        amount={1}
        rate={2}
        currency1={"USD"}
        currency2={"GBP"}
        setShowConversionCard={() => {}}
      />
    );

    cy.contains("1 USD is equivalent to 2.00 GBP");
    cy.contains("The current rate is 2");
    cy.contains("Expires in: 10:00");
  });
});
