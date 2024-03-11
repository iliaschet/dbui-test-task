import { configureStore } from '@reduxjs/toolkit';
import { listApi } from './api';

export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(listApi.middleware),
});
