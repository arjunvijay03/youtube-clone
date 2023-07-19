import React from 'react'
import HomeLeft from '../Components/HomeLeft/HomeLeft'
import Header from '../Components/Header/Header'
import { useSelector } from 'react-redux'
import SearchResultCard from '../Components/VideoCard/SearchResults/SearchResultCard'
import SearchCardSkletorm from '../Components/VideoCard/SearchResults/SearchCardSkletorm'

function SearchResultPage() {
    const {searchResult, loading} = useSelector(state=>state.dataReducer)

  return (
    <>
      <Header></Header>
      <div className=' w-100 row p-0 me-0'style={{marginTop:'70px', marginLeft:'0px'}}>
          <div className=' d-none d-xl-block col-xl-2 position-fixed start-0 '>
            <HomeLeft></HomeLeft>
            
          </div>
          <div className="  p-0 m-0 col-xl-10  col-12 pt-2 px-1 p-xl-4 pt-0 row  d-flex justify-content-center   gap-2  overflow-auto px-xl-5 videos-container "  >
            {/* <SearchCardSkletorm></SearchCardSkletorm> */}
           { loading ? ( Array.from({ length: 8 }).map((_, index) => (
            <SearchCardSkletorm key={index} />))) :  searchResult?.map(video=>video.type === 'video' && <SearchResultCard video={video}></SearchResultCard>)  }
            
          </div>
      </div>
    </>
  )
}

export default SearchResultPage
