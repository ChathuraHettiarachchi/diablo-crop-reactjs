import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PaymentState,
  DeductionState,
  EmployeeState,
  InitialState,
} from "@/types";

const initialState = {
  value: [
    {
      employeeId: 1001,
      employeeName: "Jhon Carter",
      payDate: "12/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 51.5,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $51.5",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Relocation",
          description: "Relocation Payment",
          amount: 5000,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1002,
      employeeName: "Alice Johnson",
      payDate: "13/10/2023",
      status: "Pending",
      payRunHours: 75,
      hourlyRate: 55.2,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $55.2",
          amount: -1,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1003,
      employeeName: "Michael Davis",
      payDate: "14/10/2023",
      status: "Rejected",
      payRunHours: 75,
      hourlyRate: 60.7,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $60.7",
          amount: -1,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1004,
      employeeName: "Emma White",
      payDate: "15/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 65.8,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $65.8",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Incentive",
          description: "Performance Incentive",
          amount: 8000,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1005,
      employeeName: "David Lee",
      payDate: "16/10/2023",
      status: "Pending",
      payRunHours: 75,
      hourlyRate: 70.2,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $70.2",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Bonus",
          description: "Performance Bonus",
          amount: 9000,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1006,
      employeeName: "Sophia Taylor",
      payDate: "17/10/2023",
      status: "Rejected",
      payRunHours: 75,
      hourlyRate: 42.9,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $42.9",
          amount: -1,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1007,
      employeeName: "Ethan Hall",
      payDate: "18/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 50.3,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $50.3",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Incentive",
          description: "Performance Incentive",
          amount: 7500,
        },
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1008,
      employeeName: "Ava Martinez",
      payDate: "19/10/2023",
      status: "Pending",
      payRunHours: 75,
      hourlyRate: 46.6,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $46.6",
          amount: -1,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1009,
      employeeName: "Oliver Garcia",
      payDate: "20/10/2023",
      status: "Rejected",
      payRunHours: 75,
      hourlyRate: 68.9,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $68.9",
          amount: -1,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1010,
      employeeName: "Mia Martinez",
      payDate: "21/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 62.4,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $62.4",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Incentive",
          description: "Performance Incentive",
          amount: 9200,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1011,
      employeeName: "Noah Robinson",
      payDate: "22/10/2023",
      status: "Pending",
      payRunHours: 75,
      hourlyRate: 67.8,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $67.8",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Bonus",
          description: "Performance Bonus",
          amount: 7400,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,

    {
      employeeId: 1012,
      employeeName: "Liam Carter",
      payDate: "23/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 55.9,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $55.9",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Incentive",
          description: "Performance Incentive",
          amount: 6800,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,

    {
      employeeId: 1013,
      employeeName: "Charlotte Wilson",
      payDate: "24/10/2023",
      status: "Rejected",
      payRunHours: 75,
      hourlyRate: 49.3,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $49.3",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Overtime",
          description: "Extra Hours Payment",
          amount: 5900,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,

    {
      employeeId: 1014,
      employeeName: "Amelia Hughes",
      payDate: "25/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 64.7,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $64.7",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Bonus",
          description: "Performance Bonus",
          amount: 8500,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,

    {
      employeeId: 1015,
      employeeName: "Lucas Butler",
      payDate: "26/10/2023",
      status: "Pending",
      payRunHours: 75,
      hourlyRate: 42.5,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $42.5",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Allowance",
          description: "Additional Allowance",
          amount: 10000,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,

    {
      employeeId: 1016,
      employeeName: "Olivia Young",
      payDate: "27/10/2023",
      status: "Rejected",
      payRunHours: 75,
      hourlyRate: 57.6,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $57.6",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Incentive",
          description: "Performance Incentive",
          amount: 7800,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1017,
      employeeName: "Elijah Reed",
      payDate: "28/10/2023",
      status: "Approved",
      payRunHours: 75,
      hourlyRate: 63.8,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $63.8",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Bonus",
          description: "Performance Bonus",
          amount: 9300,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1018,
      employeeName: "Aiden Turner",
      payDate: "29/10/2023",
      status: "Pending",
      payRunHours: 75,
      hourlyRate: 46.9,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $46.9",
          amount: -1,
        } as PaymentState,
        {
          id: 2,
          name: "Bonus",
          description: "Performance Bonus",
          amount: 7200,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
    {
      employeeId: 1019,
      employeeName: "Scarlett Ward",
      payDate: "30/10/2023",
      status: "Rejected",
      payRunHours: 75,
      hourlyRate: 69.5,
      weeksPerCycle: 2,
      payments: [
        {
          id: 1,
          name: "Ordinary Pay",
          description: "75 Hours @ $69.5",
          amount: -1,
        } as PaymentState,
        {
          name: "Overtime",
          description: "Extra Hours Payment",
          amount: 7900,
        } as PaymentState,
      ],
      deductions: [
        {
          id: 1,
          name: "PAYE",
          description: "M Tax Code",
          amount: -1,
        } as DeductionState,
      ],
    } as EmployeeState,
  ],
} as InitialState;

export const payrun = createSlice({
  name: "payrun",
  initialState,
  reducers: {
    addPayment: (state, action: PayloadAction<any>) => {},
    deletePayment: (state, action: PayloadAction<number>) => {},
    updatePayment: (state, action: PayloadAction<EmployeeState>) => {
      const filtered = state.value.findIndex(
        (i) => i.employeeId == action.payload.employeeId,
      );
      state.value[filtered] = action.payload;
    },
  },
});

export const { addPayment, deletePayment, updatePayment } = payrun.actions;
export default payrun.reducer;
