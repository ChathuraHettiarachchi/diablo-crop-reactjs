"use client";

import React, { useEffect, useState } from "react";
import { PaymentState } from "@/types";
import { ActionButton, PayPacket, PaySummary } from ".";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { totalPay } from "@/utils/calculations";
import { payField } from "@/utils/constant";
import { addPayment } from "@/redux/features/payrunEmployee-slice";

const PaySheet = () => {
  const employee = useAppSelector((state) => state.payrunEmployeeReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const [grossPay, setGrossPay] = useState(totalPay(employee));

  const netPay = () => {
    return (parseFloat(grossPay) - employee.deductions[0].amount).toFixed(2);
  };

  const addNewPayment = () => {
    const payment = {
      id: employee.payments.length + 1,
      amount: 0,
      name: "",
      description: "Description",
    } as PaymentState;

    dispatch(addPayment(payment));
    setGrossPay(totalPay(employee));
  };

  useEffect(() => {
    setGrossPay(totalPay(employee));
  }, [employee]);

  return (
    <div>
      <div className="min-h-min overflow-hidden rounded-xl bg-gray-200">
        <div className="hidden h-14 w-full grid-cols-11 items-center justify-between rounded-t-xl bg-gray-300 pl-4 pr-2 md:grid">
          <p className="col-span-3 w-full font-semibold">Name</p>
          <p className="col-span-4 font-semibold">Description</p>
          <p className="col-span-2 font-semibold">Amount</p>
          <p className="col-span-2 font-semibold"></p>
        </div>

        {/* payments */}
        {employee.payments.map((pay) => (
          <PayPacket payData={pay} />
        ))}
        <PayPacket
          payData={payField("Gross Pay", grossPay, "")}
          nameClass="font-bold"
          amountClass="font-bold"
          isKeyHidden={true}
        />
        <div className="flex justify-end">
          <ActionButton title="Add Payment" action={addNewPayment} />
        </div>

        {/* deductions */}
        <p className="p-4 font-bold">Deductions</p>
        {employee.deductions.map((deduct) => (
          <PayPacket payData={deduct} />
        ))}
        <PayPacket
          payData={payField(
            "Total Deductions",
            employee.deductions[0].amount,
            "",
          )}
          nameClass="font-bold"
          amountClass="font-bold"
          isKeyHidden={true}
        />
        <PayPacket
          payData={payField("Net Pay", netPay(), "")}
          nameClass="font-bold"
          amountClass="font-bold"
          isKeyHidden={true}
        />

        {/* banking */}
        <br />
        <p className="p-4 font-bold">Banking</p>
        <PayPacket
          payData={payField(
            "Banking Credit Balance",
            netPay(),
            "12-1234-123456-123",
          )}
        />
        <div className="overflow-hidden rounded-b-xl">
          <PayPacket
            payData={payField("Total Banking", netPay(), "")}
            nameClass="font-bold"
            amountClass="font-bold"
            isKeyHidden={true}
          />
        </div>
      </div>
      <br />
      <PaySummary
        taxable={employee.payments[0].amount}
        tax={employee.deductions[0].amount}
        netPay={netPay()}
      />
    </div>
  );
};

export default PaySheet;
