
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const INITIAL_STATE = {
    data:[],
    relatedVideos : [],
    searchResult : [],
    loading : false,
    query:'',
    allVideos:[]
}
export const fetchData = createAsyncThunk('dataSlice/fetchData', async ({query, type})=>{
  console.log(import.meta.env.VITE_RAPI_KEY);
  const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: {
          q:query
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPI_KEY,
          'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
      };

      const response = await axios.request(options)
    return( {videos : response.data.items, videoType:type})
})
 


const dataSlice = createSlice({
    name : 'dataSlice',
    initialState : INITIAL_STATE,
    reducers : {
      handelQueryChange : ( state, action )=>{
        state.query = action.payload
      }
    },
    extraReducers : {
      [fetchData.pending] : (state)=>{
        state.loading = true
      },
      [fetchData.fulfilled] : (state, action)=>{
        const { videos, videoType } = action.payload
        state.loading = false
         if(videoType === 'feed'){
           state.data = [...videos]
           state.allVideos = [...state.allVideos, ...videos]
          }else if( videoType === 'related'){
            state.relatedVideos = [...videos]
           state.allVideos = [...state.allVideos, ...videos]

          }else if( videoType === 'search'){
            state.searchResult = [...videos]
           state.allVideos = [...state.allVideos, ...videos]

          }
      },
      [fetchData.rejected] : (state, action)=>{
        state.loading = false 
         alert('API call limit for today has been reached. Please try again tomorrow!')
      }
    }
 })
 

 export const { handelQueryChange } = dataSlice.actions
 export default dataSlice.reducer