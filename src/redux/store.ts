import { configureStore } from "@reduxjs/toolkit";
import payRunReducer from "./features/payrun-slice";

export const store = configureStore({
  reducer: {
    payRunReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
