import Link from "next/link";
import React from "react";
import PaymentStatus from "./PaymentStatus";

import { PaymentTableItemProps } from "@/types";
import { totalPay } from "@/utils/calculations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setEmployee } from "@/redux/features/payrunEmployee-slice";

const PaymentTableItem = (props: PaymentTableItemProps) => {
  const emp = props.employee;
  const dispatch = useDispatch<AppDispatch>();
  const url = "/pay-runs/packet?id=" + emp.employeeId;

  const setEmployeeData = () => {
    dispatch(setEmployee(emp));
  };

  return (
    <div>
      <div className="hidden hover:cursor-pointer lg:grid">
        <Link href={url} onClick={setEmployeeData}>
          <div className="hidden h-14 grid-cols-5 items-center bg-gray-100 lg:grid">
            <p className="table-row underline">{emp.employeeId}</p>
            <p className="table-row">{emp.employeeName}</p>
            <p className="table-row">{emp.payDate}</p>
            <div className="table-row">
              <PaymentStatus status={emp.status} />
            </div>
            <p className="table-row">${totalPay(emp)}</p>
          </div>
        </Link>
        <hr />
      </div>

      <div className="lg:hidden">
        <Link href={url} onClick={setEmployeeData}>
          <div
            className="flex h-[100px] w-full items-center rounded-md bg-gray-100 hover:cursor-pointer 
    "
          >
            <div className="min-w-0 flex-1  p-4 ">
              <p className="text-md mb-4 truncate font-bold text-black">
                {emp.employeeName}
              </p>
              <p className="text-sm text-gray-600">
                Employee ID: {emp.employeeId}
              </p>
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
        </Link>
      </div>
    </div>
  );
};

export default PaymentTableItem;
