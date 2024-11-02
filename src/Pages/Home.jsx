import Header from '../Components/Header/Header';
import HomeLeft from '../Components/HomeLeft/HomeLeft';
import VideoCard from '../Components/VideoCard/VideoCard';
import VideoCardSkeleton from '../Components/VideoCard/VideoCardSkeleton';
import { useSelector } from 'react-redux';
import { useGetHomeFeedQuery, useSearchVideosQuery } from '../API/FetchData';
import { useSearchParams } from 'react-router-dom';
// import { useParams } from "react-router-dom";

function Home() {
  const { showSideBar } = useSelector((state) => state.dataReducer);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  let homeFeedData;
  if (!query) {
    var {
      data: video,
      error,
      isError,
      isLoading: isHomeLoading,
      refetch,
    } = useGetHomeFeedQuery();
    homeFeedData = video?.data;
  } else {
    var { data: videoData, isLoading: isSearchLoading } =
      useSearchVideosQuery(query);
    homeFeedData = videoData?.data;
  }
  const isLoading = isHomeLoading || isSearchLoading;
  if (isError) {
    error.status !== 429 && refetch();
  }

  return (
    <>
      <Header></Header>

      <div
        className=" w-100 row p-0 me-0"
        style={{ marginTop: '70px', marginLeft: '0px' }}
      >
        {/* <div className=' d-none d-xl-block col-xl-2 position-fixed start-0 '> */}

        <div
          className={` col-xl-2 position-fixed start-0 side-bar ${
            showSideBar && 'side-bar-active'
          } `}
        >
          {/* class name in index.css */}
          <HomeLeft active={query || ''}></HomeLeft>
        </div>
        <div className=" p-0 m-0 col-xl-10  col-12 pt-2 px-1 p-xl-4 pt-0 row  d-flex   gap-2 gap-md-0 overflow-auto videos-container ">
          {!isLoading
            ? homeFeedData?.map(
                (video, index) =>
                  video.type === 'video' && (
                    <VideoCard video={video} key={index}></VideoCard>
                  )
              )
            : Array.from({ length: 8 }).map((_, index) => (
                <VideoCardSkeleton key={index} />
              ))}
        </div>
      </div>
    </>
  );
}

export default Home;
