import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import HomeLeft from "../Components/HomeLeft/HomeLeft";
import VideoCard from "../Components/VideoCard/VideoCard";
import VideoCardSkeleton from "../Components/VideoCard/VideoCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setAllVideos, setLoading } from "../Redux/DataReducer";
import { useGetDataQuery } from "../API/FetchData";

function MusicPage() {
  const { showSideBar, allVideos } = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  const {
    data: video,
    error,
    isError,
    isSuccess,
    isLoading,
    refetch,
  } = useGetDataQuery("music");

  let data = video?.results;
  useEffect(() => {
    // -------API CALL SUCCESS
    if (isSuccess) {
      dispatch(setLoading(false));
      dispatch(setAllVideos(data));
      sessionStorage.setItem(
        "allvideos",
        JSON.stringify([...allVideos, ...data])
      );
    }
  }, [data]);
  // -------API CALL ERROR
  if (isError) {
    refetch();
  }
  return (
    <>
      <Header></Header>

      <div
        className=" w-100 row p-0 me-0"
        style={{ marginTop: "70px", marginLeft: "0px" }}
      >
        {/* <div className=' d-none d-xl-block col-xl-2 position-fixed start-0 '> */}

        <div
          className={` col-xl-2 position-fixed start-0 side-bar ${
            showSideBar && "side-bar-active"
          } `}
        >
          {" "}
          {/* class name in index.css */}
          <HomeLeft active={"music"}></HomeLeft>
        </div>
        <div className=" p-0 m-0 col-xl-10  col-12 pt-2 px-1 p-xl-4 pt-0 row  d-flex   gap-2 gap-md-0 overflow-auto videos-container ">
          {!isLoading
            ? data?.map(
                (video, index) =>
                  video.type === "video" && (
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

export default MusicPage;
