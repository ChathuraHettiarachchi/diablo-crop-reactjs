import React from "react";
import { StatusProps } from "@/types";
import { Status } from "@/types";

const PaymentStatus = ({ status }: StatusProps) => {
  const resolveStatus = (status: string) => {
    var label;
    switch (status) {
      case "Approved":
        label = (
          <span data-testid="status" className="status bg-green-500">
            {Status.Approved}
          </span>
        );
        break;
      case "Pending":
        label = (
          <span data-testid="status" className=" status bg-gray-500">
            {Status.Pending}
          </span>
        );
        break;
      case "Rejected":
        label = (
          <span data-testid="status" className="status bg-red-500">
            {Status.Rejected}
          </span>
        );
        break;
    }
    return label;
  };
  return <>{resolveStatus(status)}</>;
};

export default PaymentStatus;
