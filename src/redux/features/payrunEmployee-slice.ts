import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeState } from "@/types";

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
      state.value = action.payload;
    },
  },
});

export const { setEmployee } = payrunEmployee.actions;
export default payrunEmployee.reducer;
