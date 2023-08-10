import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchData = createApi({
    reducerPath:'fetchData',
   
    baseQuery:fetchBaseQuery({baseUrl:'https://simple-youtube-search.p.rapidapi.com'}),
    endpoints: (builder)=>({
        getData:builder.query({
            query:(query)=>({url:`/search?query=${query}`,
          headers:{
            'X-RapidAPI-Key': '310afc8b1amsh5a06cae44957ba3p19e2e6jsn2b881e4cd8b1',
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        }, 
    }),
    extraOptions: { maxRetries: 10 },
        })
    }),
   
})

export const { useGetDataQuery, useLazyGetDataQuery } = fetchData