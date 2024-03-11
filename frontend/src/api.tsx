import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TResponse } from './types';

export const listApi = createApi({
  reducerPath: 'listApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
  endpoints: (builder) => ({
    getList: builder.query<TResponse[], string>({
      query: () => ({ url: 'list', method: 'GET' }),
    }),
  }),
});

export const { useGetListQuery } = listApi;
