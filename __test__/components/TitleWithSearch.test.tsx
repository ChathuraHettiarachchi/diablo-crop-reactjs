import { render, screen } from "@testing-library/react";
import { TitleWithSearch } from "@/components";

describe("TitleWithSearch component", () => {
  it("should have render <TitleWithSearch /> with Employee Payments as title", () => {
    render(<TitleWithSearch title="Employee Payments" onChange={() => {}} />);

    const element = screen.getByText("Employee Payments");
    expect(element).toBeInTheDocument();
  });

  it("should have render <TitleWithSearch /> with input for search", () => {
    render(<TitleWithSearch title="Employee Payments" onChange={() => {}} />);

    const element = screen.getByTestId("search-view");
    expect(element).toBeInTheDocument();
  });
});
