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
  }),
});

export const { useLoginUserMutation } = authApi;
