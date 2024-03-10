import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/users.api";

export const store = configureStore({
  reducer: combineReducers({
    [userApi.reducerPath]: userApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
