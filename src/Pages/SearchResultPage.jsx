import React from 'react';
import HomeLeft from '../Components/HomeLeft/HomeLeft';
import Header from '../Components/Header/Header';
import { useSelector } from 'react-redux';
import SearchResultCard from '../Components/VideoCard/SearchResults/SearchResultCard';
import SearchCardSkletorm from '../Components/VideoCard/SearchResults/SearchCardSkletorm';
import { useSearchVideosQuery } from '../API/FetchData';

import { useParams } from 'react-router-dom';

function SearchResultPage() {
  const { query } = useParams();
  const { showSideBar } = useSelector((state) => state.dataReducer);
  const { data, isLoading } = useSearchVideosQuery(query);
  let searchResult = data?.data;

  return (
    <>
      <Header></Header>
      <div
        className=" w-100 row p-0 me-0"
        style={{ marginTop: '70px', marginLeft: '0px' }}
      >
        <div
          className={` col-xl-2 position-fixed start-0 side-bar ${
            showSideBar && 'side-bar-active'
          } `}
        >
          {/* class name in index.css */}
          <HomeLeft></HomeLeft>
        </div>
        <div className="  p-0 m-0 col-xl-10  col-12 pt-2 px-1 p-xl-4 pt-0 row  d-flex justify-content-center   gap-2  overflow-auto px-xl-5 videos-container ">
          {isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <SearchCardSkletorm key={index} />
              ))
            : searchResult?.map(
                (video, index) =>
                  video.type === 'video' && (
                    <SearchResultCard
                      video={video}
                      key={index}
                    ></SearchResultCard>
                  )
              )}
        </div>
      </div>
    </>
  );
}

export default SearchResultPage;
