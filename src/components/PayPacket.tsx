"use client";
import { PayPacketProps, PaymentState } from "@/types";
import React, { useEffect } from "react";
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
      return employee.hourlyRate * employee.payRunHours;
    } else {
      return payData.amount;
    }
  };

  return (
    <div className="">
      {window.innerWidth < 768 ? (
        <div className="flex flex-col  bg-gray-100 p-4">
          <div className="flex justify-between">
            <div>
              <p className={`mb-1 ${props.amountClass}`}>
                <span
                  className={clsx(
                    `text-gray-500 ${props.nameClass}`,
                    props.isKeyHidden && "hidden",
                  )}
                >
                  Name:{" "}
                </span>
                {payData.name}
              </p>
              <p
                className={clsx(
                  `mb-1 ${props.descriptionClass}`,
                  props.isKeyHidden && "hidden",
                )}
              >
                <span className={`text-gray-500 ${props.descriptionClass}`}>
                  Description:{" "}
                </span>
                {payData.description}
              </p>
            </div>

            <div>
              <p className={`mb-1 ${props.amountClass} col-span-1`}>
                $ {amount()}
              </p>
            </div>
          </div>

          <div
            className={clsx(
              "mx-4 flex h-10 items-center justify-between",
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
