import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
  'X-RapidAPI-Key': import.meta.env.VITE_RAPI_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
};
export const fetchData = createApi({
  reducerPath: 'fetchData',

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getHomeFeed: builder.query({
      query: () => ({
        url: '/home',
        headers: headers,
      }),
      extraOptions: { maxRetries: 10 },
    }),
    getVideoById: builder.query({
      query: (id) => ({
        url: '/dl',
        params: {
          id: id,
          cgeo: 'IN',
        },
        headers,
      }),
    }),
    searchVideos: builder.query({
      query: (query) => ({
        url: 'search',
        params: {
          query,
        },
        headers,
      }),
    }),
  }),
});

export const {
  useGetHomeFeedQuery,
  useGetVideoByIdQuery,
  useSearchVideosQuery,
} = fetchData;
