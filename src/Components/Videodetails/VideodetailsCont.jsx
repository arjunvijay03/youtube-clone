import React from 'react';
import Video from './Video';
import RelatedVideoCard from '../VideoCard/RelatedVideos/RelatedVideoCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import RelatedVideoSkeleton from '../VideoCard/RelatedVideos/RelatedVideoSkeleton';
import {
  useGetVideoByIdQuery,
  useSearchVideosQuery,
} from '../../API/FetchData';

function VideodetailsCont({ id }) {
  const { data: currentVideo } = useGetVideoByIdQuery(id);
  const { data: relatedVideosData, isLoading } = useSearchVideosQuery(
    currentVideo?.title
  );
  const relatedVideos = relatedVideosData?.data;

  return (
    <div
      className="container-fluid   p-xl-5 mt-xl-0"
      style={{ marginTop: '60px' }}
    >
      <div className="row  mt-5">
        <div
          className="col-12 col-xl-8 p-0  px-xl-5"
          style={{ height: 'mincontent' }}
        >
          <div className="w-100 ratio ratio-16x9">
            <Video id={id}></Video>
          </div>
          <div>
            <h6
              className=" text-white p-3 pb-1 fs-5 video-title mb-0 px-2 "
              style={{ lineHeight: '1.6rem' }}
            >
              {currentVideo?.title || (
                <Skeleton
                  className="h-100"
                  baseColor="#202020"
                  highlightColor="#444"
                ></Skeleton>
              )}
            </h6>
            <div className="w-100 row h-25 d-flex ">
              <div className="px-3 p-0 d-flex w-100 align-items-center gap-3 ">
                <div
                  className=" rounded-circle mt-2 ms-1 object-fit-contain overflow-hidden"
                  style={{ width: '50px', height: '50px' }}
                >
                  {!currentVideo ? (
                    <Skeleton
                      className="h-100"
                      baseColor="#202020"
                      highlightColor="#444"
                    ></Skeleton>
                  ) : (
                    <img
                      className="w-100"
                      src={currentVideo?.channel?.icon}
                      alt=""
                    />
                  )}
                </div>
                <h6
                  className="text-white  m-0 fs-6 "
                  style={{ lineHeight: '1.3rem' }}
                >
                  {currentVideo?.channelTitle || (
                    <Skeleton
                      className="h-100"
                      baseColor="#202020"
                      highlightColor="#444"
                    ></Skeleton>
                  )}
                  <br />
                  <span className="text-white-50 " style={{ fontSize: '13px' }}>
                    100k subscribers
                  </span>
                </h6>
              </div>
              {/* <div className="col-10 ">
                  <div className=" mt-2 video-title  " >{currentVideo?.title}</div>
                  <div className='text-white-50 mt-1 lh-1'>{currentVideo?.author?.name}</div>
                 
                </div> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 d-flex flex-column gap-3 pt-3 pt-xl-0">
          {!isLoading
            ? relatedVideos?.map(
                (video, index) =>
                  video.type === 'video' && (
                    <RelatedVideoCard
                      key={index}
                      video={video}
                    ></RelatedVideoCard>
                  )
              )
            : Array.from({ length: 8 }).map((_, index) => (
                <RelatedVideoSkeleton key={index} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default VideodetailsCont;
