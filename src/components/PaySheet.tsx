"use client";

import React, { useEffect, useState } from "react";
import { DeductionState, PaySheetProps, PaymentState } from "@/types";
import { ActionButton, PayPacket, PaySummary } from ".";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { totalPay, calculateIncomeTax } from "@/utils/calculations";
import { updatePayment } from "@/redux/features/payrun-slice";
import { payField } from "@/utils/constant";

const PaySheet = () => {
  const employee = useAppSelector((state) => state.payrunEmployeeReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const [grossPayObject, setGrossPayObject] = useState({} as PaymentState);
  const [grossPay, setGrossPay] = useState(totalPay(employee));

  const netPay = () => {
    return (parseFloat(grossPay) - employee.deductions[0].amount).toFixed(2);
  };

  useEffect(() => {
    setGrossPayObject(payField("Gross Pay", grossPay, ""));
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
          payData={grossPayObject}
          nameClass="font-bold"
          amountClass="font-bold"
          isKeyHidden={true}
        />
        <div className="flex justify-end">
          <ActionButton title="Add Payment" action={() => {}} />
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
