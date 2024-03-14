import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data } from "./types";

const BASE_URL = "http://localhost:5000/api/v11";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getList: builder.query<Data[], void>({
      query: () => "/list",
    }),
  }),
});

export const { useGetListQuery } = userApi;
