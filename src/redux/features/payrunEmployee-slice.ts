import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeState } from "@/types";
import { calculateIncomeTax } from "@/utils/calculations";

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
  },
});

export const { setEmployee } = payrunEmployee.actions;
export default payrunEmployee.reducer;
