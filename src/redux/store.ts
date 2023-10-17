import { combineReducers, configureStore } from "@reduxjs/toolkit";
import payrunReducer from "./features/payrun-slice";
import payrunEmployeeReducer from "./features/payrunEmployee-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
};

const rootReducer = combineReducers({
  payrunReducer,
  payrunEmployeeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
