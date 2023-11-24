import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "../objects/User";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (build) => ({
    fetchUsers: build.query<Array<User>, string>({
      query: () => ({
        url: "/list",
      }),
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
