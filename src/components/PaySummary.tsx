import { PaySummaryProps } from "@/types";
import { payField } from "@/utils/constant";
import React from "react";
import { PayPacket } from ".";

const PaySummary = ({ taxable, tax, netPay }: PaySummaryProps) => {
  return (
    <div className="min-h-min overflow-hidden rounded-xl bg-gray-200">
      <p className="p-4 font-bold">Payment Summary</p>
      <div className="hidden h-14 w-full grid-cols-11 items-center justify-between  bg-gray-300 pl-4 pr-2 md:grid">
        <p className="col-span-3 w-full font-semibold">Name</p>
        <p className="col-span-4 font-semibold"></p>
        <p className="col-span-2 font-semibold">Amount</p>
        <p className="col-span-2 font-semibold"></p>
      </div>

      <PayPacket
        payData={payField("Gross Taxable", taxable, "")}
        isKeyHidden={true}
      />
      <PayPacket payData={payField("PAYE", tax, "")} isKeyHidden={true} />
      <PayPacket
        payData={payField("Direct Credited", netPay, "")}
        nameClass="font-bold"
        amountClass="font-bold"
        isKeyHidden={true}
      />
    </div>
  );
};

export default PaySummary;
