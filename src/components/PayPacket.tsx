import { PayPacketProps, PaymentState } from "@/types";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import { useAppSelector } from "@/redux/store";

import clsx from "clsx";

const PayPacket = (props: PayPacketProps) => {
  const payData = props.payData;
  const employee = useAppSelector((state) => state.payrunEmployeeReducer.value);
  const isBlocked = payData.id < 2;

  const amount = () => {
    if (payData.amount < 0) {
      console.log(employee.hourlyRate);
      console.log(employee.payRunHours);
      return employee.hourlyRate * employee.payRunHours;
    } else {
      return payData.amount;
    }
  };

  return (
    <div className="">
      {window.innerWidth < 768 ? (
        <div className="flex items-center rounded-t-xl bg-gray-100 p-4">
          <div className="flex-1">
            <p className="mb-1">
              <span className="text-gray-500">Name: </span>
              {payData.name}
            </p>
            <p className="mb-1">
              <span className="text-gray-500">Description: </span>
              {payData.description}
            </p>
            <p className="mb-1">
              <span className="text-gray-500">Amount: </span>$ {amount()}
            </p>
          </div>
          <div
            className={clsx(
              "flex h-[80px] w-12 flex-col items-center justify-between",
              isBlocked && "hidden",
            )}
          >
            <BiEdit className="text-blue-700" />
            <RiDeleteBin2Fill className="text-red-700" />
            <IoMdDoneAll className="text-green-700" />
          </div>
        </div>
      ) : (
        <div className="hidden h-12 w-full grid-cols-11 items-center justify-between  bg-gray-100 pl-4 pr-2 md:grid">
          <p className={`col-span-3 ${props.nameClass}`}>{payData.name}</p>
          <p className={`col-span-4 ${props.descriptionClass}`}>
            {payData.description}
          </p>
          <p className={`col-span-2 ${props.amountClass}`}>$ {amount()}</p>
          <div
            className={clsx(
              "order-last col-span-2 grid grid-cols-4",
              isBlocked && "hidden",
            )}
          >
            <></>
            <BiEdit className="text-blue-700" />
            <RiDeleteBin2Fill className="text-red-700" />
            <IoMdDoneAll className="text-green-700" />
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default PayPacket;
