import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getlist: builder.query({
      query: () => `list`,
    }),
  }),
});

export const { useGetlistQuery } = listApi;
