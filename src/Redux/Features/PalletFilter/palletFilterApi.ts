import api from "../../Api/api";
import { tagTypes } from "../../Types/tagTypes";

const PalletFilterApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPalletFilterOptions: builder.query({
      query: () => ({
        url: "/pallet-filter/options",
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.pallet],
    }),
    getUserPallet: builder.query({
      query: ({ id }) => ({
        url: `/pallet-filter/user/${id}`,
        method: "GET",
        params: {},
      }),
      providesTags: [tagTypes.pallet],
    }),
  }),
});

export const { useGetPalletFilterOptionsQuery, useGetUserPalletQuery } =
  PalletFilterApi;
