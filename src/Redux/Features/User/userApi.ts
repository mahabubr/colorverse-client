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
    getTopContributor: builder.query({
      query: () => ({
        url: "/users/top-contributor",
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.user, tagTypes.pallet],
    }),
    getRecentUsers: builder.query({
      query: () => ({
        url: "/users/recent-users",
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.user, tagTypes.pallet],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetSingleUserQuery,
  useGetTopContributorQuery,
  useGetRecentUsersQuery
} = userApi;
