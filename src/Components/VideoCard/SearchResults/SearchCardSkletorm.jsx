import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function SearchCardSkletorm() {
  return (
    <>
      <div className=" row d-flex   bg-transparent text-light overflow-hidden p-0 w-100 px-xl-5 ">
        <div
          className="col-12 col-sm-4 rounded-1 p-0   overflow-hidden object-fit-contain"
          style={{ height: '190px' }}
        >
          <Skeleton
            className="h-100"
            baseColor="#202020"
            highlightColor="#444"
          ></Skeleton>
        </div>
        <div className="col-12 col-sm-8 h-100 d-flex px-1 gap-2 p-sm-2 ">
          <div className="d-sm-none">
            <div
              className=" rounded-circle mt-2 ms-1 overflow-hidden"
              style={{ width: '40px', height: '40px' }}
            >
              <Skeleton
                className="h-100 rounded-circle"
                baseColor="#202020"
                highlightColor="#444"
              ></Skeleton>
            </div>
          </div>

          <div className=" w-100 p-2  ">
            <div className=" w-50">
              {' '}
              <Skeleton baseColor="#202020" highlightColor="#444"></Skeleton>
            </div>

            <div className="  mt-2 w-25 ">
              {' '}
              <Skeleton
                className="h-100"
                baseColor="#202020"
                highlightColor="#444"
              ></Skeleton>
            </div>
            <div className="d-none d-sm-block w-25 mt-1 ">
              <Skeleton
                className="h-100"
                baseColor="#202020"
                highlightColor="#444"
              ></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCardSkletorm;
