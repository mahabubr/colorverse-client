import api from "../../Api/api";
import { tagTypes } from "../../Types/tagTypes";

const palletApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPallet: builder.mutation({
      query: ({ payload }) => ({
        url: "/pallet/create",
        method: "POST",
        params: {},
        body: payload,
      }),
      invalidatesTags: [tagTypes.pallet],
    }),
    getPallet: builder.query({
      query: ({ page, limit, search }) => ({
        url: "/pallet",
        method: "GET",
        params: { page, limit, search },
      }),
      providesTags: [tagTypes.pallet],
    }),
    getSinglePallet: builder.query({
      query: ({ id }) => ({
        url: `/pallet/${id}`,
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.pallet],
    }),
  }),
});

export const {
  useCreatePalletMutation,
  useGetPalletQuery,
  useGetSinglePalletQuery,
} = palletApi;
