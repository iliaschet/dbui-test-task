import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getUsers = createApi({
  reducerPath: "getUsers",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/api/v1/list",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = getUsers;
export const { useLazyGetAllUsersQuery } = getUsers;
