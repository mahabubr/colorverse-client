import api from "../../Api/api";
import { tagTypes } from "../../Types/tagTypes";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ payload }) => ({
        url: "/users/create",
        method: "POST",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getSingleUser: builder.query({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useCreateUserMutation, useGetSingleUserQuery } = userApi;
