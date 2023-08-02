import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import HomeLeft from '../Components/HomeLeft/HomeLeft'
import VideoCard from '../Components/VideoCard/VideoCard'
import VideoCardSkeleton from '../Components/VideoCard/VideoCardSkeleton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/DataReducer'

function Home() {
  const {data ,loading, showSideBar} = useSelector(state=>state.dataReducer)
  
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch( fetchData('malayalam') )
  }, [])
  return (
    <>
      <Header></Header>
      <div className=' w-100 row p-0 me-0'style={{marginTop:'70px', marginLeft:'0px'}}>
      {/* <div className=' d-none d-xl-block col-xl-2 position-fixed start-0 '> */}

          <div className= {` col-xl-2 position-fixed start-0 side-bar ${showSideBar && 'side-bar-active'} `}> {/* class name in index.css */}
            <HomeLeft></HomeLeft>
            
          </div>
          <div className=" p-0 m-0 col-xl-10  col-12 pt-2 px-1 p-xl-4 pt-0 row  d-flex   gap-2 gap-md-0 overflow-auto videos-container "  >
            {!loading ? data?.map((video, index) => video.type === 'video' &&  <VideoCard video = {video} key={index}></VideoCard> ) :( Array.from({ length: 8 }).map((_, index) => (
                  <VideoCardSkeleton key={index} />
             )) )}
            
          </div>
      </div>
    </>
  )
}

export default Home
