import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const listUserApi = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
  endpoints: (build) => ({
    getProducts: build.query<any, string>({
      query: (name: string) => `/${name}`,
    }),
  }),
});

export const { useGetProductsQuery } = listUserApi;
