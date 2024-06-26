import api from "../../Api/api";
import { tagTypes } from "../../Types/tagTypes";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ payload }) => ({
        url: "/auth/login",
        method: "POST",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    refreshUser: builder.mutation({
      query: ({ payload }) => ({
        url: "/auth/refresh-token",
        method: "POST",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    me: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "POST",
        params: {},
        body: {},
      }),
      providesTags: [tagTypes.auth, tagTypes.user],
    }),
  }),
});

export const { useLoginUserMutation, useRefreshUserMutation, useMeQuery } =
  authApi;
