import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchData = createApi({
  reducerPath: "fetchData",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://simple-youtube-search.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (query) => ({
        url: `/search?query=${query}`,
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPI_KEY,
          "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
        },
      }),
      extraOptions: { maxRetries: 10 },
    }),
  }),
});

export const { useGetDataQuery, useLazyGetDataQuery } = fetchData;
