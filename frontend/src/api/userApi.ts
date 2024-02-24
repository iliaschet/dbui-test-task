import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserRawData } from "./types";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `/list`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ name }) => ({ type: "User", id: name }) as const,
              ),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
      transformResponse: (response: UserRawData[]): User[] => {
        return response.reduce((acc: User[], user, index) => {
          const newUser = { id: index, ...user };
          acc.push(newUser);
          return acc;
        }, []);
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
