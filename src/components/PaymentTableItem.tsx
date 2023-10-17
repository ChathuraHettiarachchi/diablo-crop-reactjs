import { PaymentTableItemProps } from "@/types";
import Link from "next/link";
import React from "react";
import PaymentStatus from "./PaymentStatus";

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
          <div className="table-row">
            <PaymentStatus status={props.status} />
          </div>
          <p className="table-row">{props.amount}</p>
        </div>
        <hr />
      </div>

      <div className="flex h-[100px] w-full items-center rounded-md bg-gray-100 hover:cursor-pointer lg:hidden">
        <div className="min-w-0 flex-1  p-4 ">
          <p className="text-md mb-4 truncate font-bold text-black">
            {props.name}
          </p>
          <p className="text-sm text-gray-600">Employee ID: {props.id}</p>
          <p className="text-sm text-gray-600">Pay Date: {props.payDay}</p>
        </div>

        <div className="h-full flex-col space-y-6 p-4">
          <p className="flex-1 text-end">
            <PaymentStatus status={props.status} />
          </p>
          <p className="text-right text-xl font-semibold text-black">
            ${props.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentTableItem;
