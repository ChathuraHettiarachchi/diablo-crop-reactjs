import { HtmlHTMLAttributes } from "react";

export enum Status {
  Pending = "Pending Approval",
  Approved = "Approved",
  Rejected = "Rejected",
}

export interface CircleImageProps {
  url: string;
  height: number;
  width: number;
  alt: string;
}

export interface TitleSearchProps {
  title: string;
  onChange: () => any;
}

export interface PaymentTableItemProps {
  employee: EmployeeState;
}

export interface StatusProps {
  status: string;
}

export interface EmployeeProps {
  employee: EmployeeState;
}

export interface PaySheetProps {
  employee: EmployeeState;
}

export interface PayPacketProps {
  payData: PaymentState;
  nameClass?: string | undefined;
  descriptionClass?: string | undefined;
  amountClass?: string | undefined;
  isKeyHidden?: boolean | undefined;
}

export interface ActionButtonProps {
  title: string;
  action: () => any;
}

export interface PaySummaryProps {
  taxable: any;
  tax: any;
  netPay: any;
}
//----------------------------------------------------------
export type InitialState = {
  value: EmployeeState[];
};

export type EmployeeState = {
  employeeId: number;
  employeeName: string;
  payDate: string;
  status: string;
  payRunHours: number;
  hourlyRate: number;
  weeksPerCycle: number;
  payments: PaymentState[];
  deductions: DeductionState[];
};

export type AddPaymentState = {
  employeeId: number;
  payment: PaymentState;
};

export type PaymentState = {
  id: number;
  name: string;
  description: string;
  amount: number;
};

export type DeductionState = {
  id: number;
  name: string;
  description: string;
  amount: number;
};
