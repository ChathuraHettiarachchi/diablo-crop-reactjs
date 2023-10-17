"use client";

import React, { useEffect, useState } from "react";
import { DeductionState, PaySheetProps, PaymentState } from "@/types";
import { ActionButton, PayPacket } from ".";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { totalPay, calculateIncomeTax } from "@/utils/calculations";
import { updatePayment } from "@/redux/features/payrun-slice";

const PaySheet = () => {
  const employee = useAppSelector((state) => state.payrunEmployeeReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const [grossPayObject, setGrossPayObject] = useState({} as PaymentState);
  const [deductionObject, setDeductionObject] = useState({} as DeductionState);
  const [grossPay, setGrossPay] = useState(totalPay(employee));
  const [totalDeduction, setTotalDeduction] = useState(
    calculateIncomeTax(
      employee.payRunHours,
      employee.hourlyRate,
      employee.weeksPerCycle,
    ),
  );

  useEffect(() => {
    setGrossPayObject({
      id: 0,
      name: "Gross Pay",
      description: "",
      amount: grossPay,
    });

    setDeductionObject({
      id: 0,
      name: "Total Deduction",
      description: "",
      amount: totalDeduction,
    });
  }, [employee]);

  return (
    <div>
      <div className="h-[300px] rounded-xl bg-gray-200 bg-clip-border">
        <div className="hidden h-14 w-full grid-cols-11 items-center justify-between rounded-t-xl bg-gray-300 pl-4 pr-2 md:grid">
          <p className="col-span-3 w-full font-semibold">Name</p>
          <p className="col-span-4 font-semibold">Description</p>
          <p className="col-span-2 font-semibold">Amount</p>
          <p className="col-span-2 font-semibold"></p>
        </div>
        {employee.payments.map((pay) => (
          <PayPacket payData={pay} />
        ))}
        <PayPacket
          payData={grossPayObject}
          nameClass="font-bold"
          amountClass="font-bold"
        />
        <div className="flex justify-end">
          <ActionButton title="Add Payment" action={() => {}} />
        </div>
        <p className="p-4 font-bold">Deductions</p>
        {employee.deductions.map((deduct) => (
          <PayPacket payData={deduct} />
        ))}
      </div>
    </div>
  );
};

export default PaySheet;
