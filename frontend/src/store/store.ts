import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { usersApi } from "./api";

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
