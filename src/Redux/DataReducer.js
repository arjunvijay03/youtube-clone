
import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'
const INITIAL_STATE = {
    data:[],
    relatedVideos : [],
    searchResult : [],
    loading : false,
    query:'',
    allVideos:[],
    showSideBar:false,
    feedType:'home'
}

// export const fetchData = createAsyncThunk('dataSlice/fetchData', async ({query, type})=>{
//   const options = {
//     method: 'GET',
//     url: 'https://simple-youtube-search.p.rapidapi.com/search',
//     params: {
//       query,
//       safesearch: 'false'
//     },
//     headers: {
//       // 'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1' ,
//       'X-RapidAPI-Key': '310afc8b1amsh5a06cae44957ba3p19e2e6jsn2b881e4cd8b1',
//       'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
//     }
//   };


//       const response = await axios.request(options)
      


      




//     return( {videos : response?.data?.results, videoType:type})
// })
 


const dataSlice = createSlice({
    name : 'dataSlice',
    initialState : INITIAL_STATE,
    reducers : {
      handelQueryChange : ( state, action )=>{
        state.query = action.payload
      },
      changeShowSideBar : ( state, action)=>{
        state.showSideBar = !state.showSideBar
      },
      setAllVideos : ( state, action ) =>{
        state.allVideos = [...state.allVideos, ...action.payload]
      },
      setLoading : ( state, action )=>{
        state.loading = action.payload
      },
      setFeedType : (state, action) =>{
        state.feedType = action.payload
      }
      
    },
    // extraReducers : {
    //   [fetchData.pending] : (state)=>{
    //     state.loading = true
    //   },
    //   [fetchData.fulfilled] : (state, action)=>{
    //     const { videos, videoType } = action.payload
    //     state.loading = false
        
    //      if(videoType === 'feed'){
          
    //        state.data = [...videos]
    //        state.allVideos = [...state.allVideos, ...videos]
    //       }else if( videoType === 'related'){
    //         state.relatedVideos = [...videos]
    //        state.allVideos = [...state.allVideos, ...videos]

    //       }else if( videoType === 'search'){
    //         state.searchResult = [...videos]
    //        state.allVideos = [...state.allVideos, ...videos]

    //       }
    //   },
    //   [fetchData.rejected] : (state, action)=>{
    //     state.loading = false 
    //     // alert(action)
    //     console.log(action.error.code);
    //     if(action.error.code === 'ERR_BAD_RESPONSE' || 'ERR_BAD_REQUEST'){
    //       console.log('adddddd');
    //       state.apiFailed = state.apiFailed + 1
    //     }
    //     // fetchData('malayalam')
    //     //  alert('API call limit for today has been reached. Please try again tomorrow!')
    //   }
    // }
 })
 

 export const { handelQueryChange, changeShowSideBar, setAllVideos, setLoading, setFeedType } = dataSlice.actions
 export default dataSlice.reducer











   // const options = {
  //       method: 'GET',
  //       url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  //       params: {
  //         q:query
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': import.meta.env.VITE_RAPI_KEY,
  //         'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  //       }
  //     };