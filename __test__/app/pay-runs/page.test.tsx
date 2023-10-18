import React from "react";
import { render, screen } from "@testing-library/react";
import PayRuns from "@/app/pay-runs/page";
import { ReduxProvider } from "@/redux/provider";

describe("Pay-runs page", () => {
  it("should have render <TitleWithSearch /> to show title", () => {
    const { getByTestId } = render(
      <ReduxProvider>
        <PayRuns />
      </ReduxProvider>,
    );
    const element = getByTestId("title-with-search");
    expect(element).toBeInTheDocument();
  });
});
