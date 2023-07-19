import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function VideoCardSkeleton() {
  return (
    <div className='col-xl-4 col-md-6 p-0 d-flex justify-content-center  p-md-4' style={{height:'320px'}} >
      <div className=" card position-relative w-100 bg-transparent text-light overflow-hidden" style={{zIndex:'0'}}  >
           
            <div className='w-100 ratio ratio-16x9 rounded-3 overflow-hidden '  >
                <Skeleton className='h-100' baseColor="#202020" highlightColor="#444"></Skeleton>
            </div>
            <div className="w-100 row h-25 ">
                <div className=" col-2 ">
                  <div ><Skeleton className="rounded-circle mt-2 ms-1 " style={{width:'40px', height:'40px'}} baseColor="#202020" highlightColor="#444"></Skeleton></div>
                </div>
                <div className="col-10 ">
                  <div className=" mt-2 video-title  " >
                    <Skeleton baseColor="#202020" highlightColor="#444"></Skeleton>
                    </div>
                  <div className='text-white-50 mt-1 lh-1'>
                  <Skeleton baseColor="#202020" highlightColor="#444"></Skeleton>
                  </div>
                 
                </div>
            </div>
      </div>
    </div>
  )
}

export default VideoCardSkeleton
