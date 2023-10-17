import Link from "next/link";
import React from "react";
import PaymentStatus from "./PaymentStatus";

import { PaymentTableItemProps } from "@/types";
import { totalPay } from "@/utils/calculations";

const PaymentTableItem = (props: PaymentTableItemProps) => {
  const emp = props.employee;

  return (
    <div>
      <div className="hidden hover:cursor-pointer lg:grid">
        <div className="hidden h-14 grid-cols-5 items-center bg-gray-100 lg:grid">
          <Link href={"#"} className="table-row underline">
            {emp.employeeId}
          </Link>
          <p className="table-row">{emp.employeeName}</p>
          <p className="table-row">{emp.payDate}</p>
          <div className="table-row">
            <PaymentStatus status={emp.status} />
          </div>
          <p className="table-row">${totalPay(emp)}</p>
        </div>
        <hr />
      </div>

      <div className="flex h-[100px] w-full items-center rounded-md bg-gray-100 hover:cursor-pointer lg:hidden">
        <div className="min-w-0 flex-1  p-4 ">
          <p className="text-md mb-4 truncate font-bold text-black">
            {emp.employeeName}
          </p>
          <p className="text-sm text-gray-600">Employee ID: {emp.employeeId}</p>
          <p className="text-sm text-gray-600">Pay Date: {emp.payDate}</p>
        </div>

        <div className="h-full flex-col space-y-6 p-4">
          <p className="flex-1 text-end">
            <PaymentStatus status={emp.status} />
          </p>
          <p className="text-right text-xl font-semibold text-black">
            ${totalPay(emp)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentTableItem;
