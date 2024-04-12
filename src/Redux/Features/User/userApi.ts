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
  }),
});

export const { useCreateUserMutation } = userApi;
