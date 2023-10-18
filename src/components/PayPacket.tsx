"use client";
import { PayPacketProps, PaymentState } from "@/types";
import React, { ChangeEvent, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

import clsx from "clsx";
import {
  deletePayment,
  updatePayment,
} from "@/redux/features/payrunEmployee-slice";

const PayPacket = (props: PayPacketProps) => {
  const dispatch = useDispatch<AppDispatch>();
  var payData = props.payData;
  const employee = useAppSelector((state) => state.payrunEmployeeReducer.value);
  const isBlocked = payData.id < 2;
  const [isOnEdit, setIsOnEdit] = useState(false || payData.name == "");

  const amountValue = () => {
    if (payData.amount < 0) {
      return (employee.hourlyRate * employee.payRunHours).toFixed(2);
    } else {
      return (payData.amount * 1.0).toFixed(2);
    }
  };

  const saveValue = () => {
    setIsOnEdit(false);
    payData = {
      id: payData.id,
      name: name,
      description: description,
      amount: parseFloat(amount),
    };
    dispatch(updatePayment(payData));
  };

  const deleteOldPayment = () => {
    dispatch(deletePayment(payData.id));
  };

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSetDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const [name, setName] = useState(payData.name || "Name");
  const [description, setDescription] = useState(payData.description);
  const [amount, setAmount] = useState(amountValue());

  return (
    <div className="">
      {window.innerWidth < 768 ? (
        <div className="flex flex-col  bg-gray-100 p-4">
          <div className="flex justify-between">
            <div>
              <span className={`text-gray-500 ${props.descriptionClass}`}>
                Name:{" "}
                <input
                  type={"text"}
                  value={name}
                  onChange={handleSetName}
                  disabled={!isOnEdit || isBlocked}
                  className={`mb-1 ${props.nameClass} mr-2 h-8 rounded pl-2`}
                ></input>
              </span>

              <p className={`text-gray-500 ${props.descriptionClass}`}>
                Description:{" "}
                <input
                  type={"text"}
                  value={description}
                  onChange={handleSetDescription}
                  disabled={!isOnEdit || isBlocked}
                  className={`mb-1 ${props.descriptionClass} mr-2 h-8 rounded pl-2`}
                ></input>
              </p>
            </div>

            <div>
              <input
                type={"number"}
                value={amount}
                onChange={handleSetAmount}
                disabled={!isOnEdit || isBlocked}
                min={0}
                className={`mb-1 w-[120px] text-right ${props.amountClass} mr-2 h-8 rounded pl-2`}
              />
            </div>
          </div>

          <div
            className={clsx(
              "mx-4 flex h-10 items-center justify-between",
              isBlocked && "hidden",
            )}
          >
            <BiEdit
              className="text-blue-700"
              onClick={() => setIsOnEdit(true)}
            />
            <RiDeleteBin2Fill
              className="text-red-700"
              onClick={deleteOldPayment}
            />
            <IoMdDoneAll className="text-green-700" onClick={saveValue} />
          </div>
        </div>
      ) : (
        <div className="hidden h-12 w-full grid-cols-11 items-center justify-between  bg-gray-100 pl-4 pr-2 md:grid">
          <input
            type={"text"}
            value={name}
            onChange={handleSetName}
            disabled={!isOnEdit || isBlocked}
            className={`col-span-3 ${props.nameClass} mr-2 h-8 rounded pl-2`}
          />
          <input
            type={"text"}
            value={description}
            onChange={handleSetDescription}
            disabled={!isOnEdit || isBlocked}
            className={`col-span-4 ${props.descriptionClass} mr-2 h-8 rounded pl-2`}
          />
          <input
            type={"number"}
            value={amount}
            onChange={handleSetAmount}
            disabled={!isOnEdit || isBlocked}
            min={0}
            className={`col-span-2 ${props.amountClass} mr-2 h-8 rounded pl-2`}
          />

          <div
            className={clsx(
              "order-last col-span-2 grid grid-cols-4",
              isBlocked && "hidden",
            )}
          >
            <></>
            <BiEdit
              className="text-blue-700"
              onClick={() => setIsOnEdit(true)}
            />
            <RiDeleteBin2Fill
              className="text-red-700"
              onClick={deleteOldPayment}
            />
            <IoMdDoneAll className="text-green-700" onClick={saveValue} />
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default PayPacket;
