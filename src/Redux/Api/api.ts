import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../Types/tagTypes";
import baseUrl from "../../Constants/base-url";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      if (token != null) {
        headers.set("authorization", token);
        return headers;
      }
    },
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

export default api;
