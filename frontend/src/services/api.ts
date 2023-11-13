import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person } from "../types/types";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    getList: builder.query<Person[], void>({
      query: () => `list`,
    }),
  }),
});

export const { useGetListQuery } = listApi;
