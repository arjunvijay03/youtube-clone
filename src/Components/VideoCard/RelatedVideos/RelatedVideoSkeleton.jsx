import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function RelatedVideoSkelton() {
  return (
    <>
      <div className=" " style={{ height: '100px' }}>
        <div className=" row d-flex align-items-center  h-100 bg-transparent text-light overflow-hidden">
          <div className="col-5  h-100 rounded-3 overflow-hidden">
            <Skeleton
              className="h-100"
              baseColor="#202020"
              highlightColor="#444"
            ></Skeleton>
          </div>
          <div className=" col-7  ">
            <div className=" fw-bold mt-2 video-title m-0 fs-6 ">
              <Skeleton
                className="h-100"
                baseColor="#202020"
                highlightColor="#444"
              ></Skeleton>
            </div>
            <div className="text-white-50 mt-1 lh-1 mt-2">
              <Skeleton
                className="h-100"
                baseColor="#202020"
                highlightColor="#444"
              ></Skeleton>
            </div>
            <div className="text-white-50 mt-1">
              <Skeleton
                className="h-100"
                baseColor="#202020"
                highlightColor="#444"
              ></Skeleton>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedVideoSkelton;
