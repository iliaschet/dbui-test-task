import { configureStore } from "@reduxjs/toolkit";
import { listUserApi } from "./users/listUserApi";
export const store = configureStore({
  reducer: {
    [listUserApi.reducerPath]: listUserApi.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([listUserApi.middleware]),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>;
