import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REACT_APP_API_URL = "http://localhost:5000/api/v1/";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "list",
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
