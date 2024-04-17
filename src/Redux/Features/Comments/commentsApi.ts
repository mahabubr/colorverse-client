import api from "../../Api/api";
import { tagTypes } from "../../Types/tagTypes";

const commentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createComments: builder.mutation({
      query: ({ payload }) => ({
        url: "/comments/create",
        method: "POST",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.pallet, tagTypes.comments],
    }),
    getComments: builder.query({
      query: ({ id }) => ({
        url: `/comments/${id}`,
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.pallet, tagTypes.comments],
    }),
    getRecentComments: builder.query({
      query: () => ({
        url: "/comments/recent",
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.pallet, tagTypes.comments],
    }),
  }),
});

export const {
  useCreateCommentsMutation,
  useGetCommentsQuery,
  useGetRecentCommentsQuery,
} = commentsApi;
