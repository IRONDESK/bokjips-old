import { configureStore, combineReducers } from "@reduxjs/toolkit";

import LoggedState from "../store/LoggedState";

const rootReducer = combineReducers({
  logged: LoggedState,
});

export const store = configureStore({
  reducer: rootReducer,
});
