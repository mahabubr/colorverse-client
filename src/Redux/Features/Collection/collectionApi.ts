import api from "../../Api/api";
import { tagTypes } from "../../Types/tagTypes";

const collectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCollection: builder.mutation({
      query: ({ payload }) => ({
        url: "/collection/create",
        method: "POST",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.collection],
    }),
    getCollection: builder.query({
      query: ({ id }) => ({
        url: `/collection/${id}`,
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.collection],
    }),
    deleteCollection: builder.mutation({
      query: ({ id }) => ({
        url: `/collection/${id}`,
        method: "DELETE",
        params: {},
      }),
      invalidatesTags: [tagTypes.collection],
    }),
  }),
});

export const {
  useCreateCollectionMutation,
  useGetCollectionQuery,
  useDeleteCollectionMutation,
} = collectionApi;
