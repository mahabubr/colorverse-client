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
      providesTags: [tagTypes.palletFilter],
    }),
  }),
});

export const { useGetPalletFilterOptionsQuery } = PalletFilterApi;
