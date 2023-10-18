import { render, screen } from "@testing-library/react";
import { PaymentStatus } from "@/components";

describe("PaymentStatus component", () => {
  it("should have render <PaymentStatus /> with Approved text for 'Approved' text", () => {
    const { getByTestId } = render(<PaymentStatus status="Approved" />);

    const elementId = getByTestId("status");
    const elementText = screen.getByText("Approved");

    expect(elementId).toBeInTheDocument();
    expect(elementText).toBeInTheDocument();
  });

  it("should have render <PaymentStatus /> with Pending text for 'Pending Approval' text", () => {
    const { getByTestId } = render(<PaymentStatus status="Pending" />);

    const elementId = getByTestId("status");
    const elementText = screen.getByText("Pending Approval");

    expect(elementId).toBeInTheDocument();
    expect(elementText).toBeInTheDocument();
  });

  it("should have render <PaymentStatus /> with Rejected text for 'Rejected' text", () => {
    const { getByTestId } = render(<PaymentStatus status="Rejected" />);

    const elementId = getByTestId("status");
    const elementText = screen.getByText("Rejected");

    expect(elementId).toBeInTheDocument();
    expect(elementText).toBeInTheDocument();
  });

  //-------------------------------------------------------------------

  it("should have render <PaymentStatus /> with Approved and change class to bg-green-500' text", () => {
    const { getByTestId } = render(<PaymentStatus status="Approved" />);

    const elementId = getByTestId("status");
    expect(elementId).toBeInTheDocument();
    expect(elementId.classList.contains("bg-green-500")).toBe(true);
  });

  it("should have render <PaymentStatus /> with Pending and change class to bg-gray-500", () => {
    const { getByTestId } = render(<PaymentStatus status="Pending" />);

    const elementId = getByTestId("status");
    expect(elementId).toBeInTheDocument();
    expect(elementId.classList.contains("bg-gray-500")).toBe(true);
  });

  it("should have render <PaymentStatus /> with Rejected and change class to bg-red-500", () => {
    const { getByTestId } = render(<PaymentStatus status="Rejected" />);

    const elementId = getByTestId("status");
    expect(elementId).toBeInTheDocument();
    expect(elementId.classList.contains("bg-red-500")).toBe(true);
  });
});
