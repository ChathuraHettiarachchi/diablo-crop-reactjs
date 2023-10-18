import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PaymentState,
  DeductionState,
  EmployeeState,
  AddPaymentState,
} from "@/types";
import { calculateIncomeTax } from "@/utils/calculations";
import { stat } from "fs";

type InitialState = {
  value: EmployeeState;
};

const initialState = {
  value: {},
} as InitialState;

export const payrunEmployee = createSlice({
  name: "payrunEmployee",
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      const emp = action.payload;
      emp.deductions[0].amount = calculateIncomeTax(
        emp.payRunHours,
        emp.hourlyRate,
        emp.weeksPerCycle,
      );
      state.value = emp;
    },
    addPayment: (state, action: PayloadAction<PaymentState>) => {
      var payments = state.value.payments;
      payments.push(action.payload);
      state.value.payments = payments;
    },
    deletePayment: (state, action: PayloadAction<number>) => {
      const index = state.value.payments.findIndex(
        (i) => i.id == action.payload,
      );
      state.value.payments.splice(index, 1);
    },
    updatePayment: (state, action: PayloadAction<PaymentState>) => {
      const index = state.value.payments.findIndex(
        (i) => i.id == action.payload.id,
      );
      state.value.payments[index] = action.payload;
    },
  },
});

export const { setEmployee, addPayment, deletePayment, updatePayment } =
  payrunEmployee.actions;
export default payrunEmployee.reducer;
