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
    getUsers: builder.query({
      query: ({ page, limit, search }) => ({
        url: "/users",
        method: "GET",
        params: { page, limit, search },
      }),
      providesTags: [tagTypes.pallet],
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
    updateUser: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetSingleUserQuery,
  useGetTopContributorQuery,
  useGetRecentUsersQuery,
  useGetUsersQuery,
  useUpdateUserMutation
} = userApi;
