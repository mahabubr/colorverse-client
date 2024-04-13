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
  }),
});

export const { useCreatePalletMutation } = palletApi;
