import { PaymentTableItemProps } from "@/types";
import Link from "next/link";
import React from "react";

const PaymentTableItem = (props: PaymentTableItemProps) => {
  return (
    <div>
      <div className="hidden hover:cursor-pointer lg:grid">
        <div className="hidden h-14 grid-cols-5 items-center bg-gray-100 lg:grid">
          <Link href={"#"} className="table-row underline">
            {props.id}
          </Link>
          <p className="table-row">{props.name}</p>
          <p className="table-row">{props.payDay}</p>
          <p className="table-row">{props.status}</p>
          <p className="table-row">{props.amount}</p>
        </div>
        <hr />
      </div>

      <div className="flex h-[100px] w-full items-center rounded-md bg-gray-100 p-4 hover:cursor-pointer lg:hidden">
        <div className="min-w-0 flex-1">
          <p className="text-md mb-4 truncate font-bold text-black">
            Name of the Employee
          </p>
          <p className="text-sm text-gray-600">Employee ID: 123123</p>
          <p className="text-sm text-gray-600">Pay Date: 12/12/2022</p>
        </div>

        <div className="flex-col items-center">
          <p className="">Status</p>
          <p className="mb-4 text-right text-xl font-semibold text-black">
            $4,567.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentTableItem;
