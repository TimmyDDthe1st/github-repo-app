import React from "react";
import ValidityTimer from "./ValidityTimer";

describe("<ValidityTimer />", () => {
  beforeEach(() => {
    cy.mount(
      <ValidityTimer
        initialMinute={10}
        initialSeconds={0}
        amount={0}
        currency1={"USD"}
        currency2={"GBP"}
        setShowConversionCard={() => {}}
      />
    );
  });

  it("renders", () => {
    cy.contains("Expires in: 10:00");
  });
});

describe("Expired timer", () => {
  beforeEach(() => {
    cy.mount(
      <ValidityTimer
        initialMinute={0}
        initialSeconds={0}
        amount={0}
        currency1={"USD"}
        currency2={"GBP"}
        setShowConversionCard={() => {}}
      />
    );
  });

  it("renders the timed out text", () => {
    cy.contains("Rate has expired");
  });
});
