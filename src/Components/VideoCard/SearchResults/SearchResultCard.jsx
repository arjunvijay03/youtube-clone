import millify from 'millify'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchResultCard({video}) {
  const navigate = useNavigate()
  return (
    <>
    {/* <div onClick={()=>navigate(`/video/${video?.id}`)} className=' ' > */}
       <div role='button' onClick={()=>navigate(`/video/${video?.id}`)} className=" row d-flex   bg-transparent text-light overflow-hidden p-0 w-100 px-xl-5 "  >
            
            <div className='col-12 col-sm-4 rounded-1 p-0   overflow-hidden object-fit-contain' style={{maxHeight:'190px'}}  >
              <img className='w-100'  src={video?.bestThumbnail?.url} alt="" />
            
            </div>
            <div className="col-12 col-sm-8  d-flex px-1 gap-2 p-sm-2 " style={{height:'min-content'}}>
              <div className='d-sm-none'>
                <div className="bg-info rounded-circle mt-2 ms-1 object-fit-contain overflow-hidden" style={{width:'40px', height:'40px'}}>
                      <img className='w-100' src={video.author?.avatars[0]?.url} alt="" />
                    </div>
              </div>
                
                <div className=" h-100 ">
                  <div className=" fw-bold mt-2 video-title video-title-search m-0 fs-6 " >{video?.title}</div>
                  {/* <div className='text-white-50 mt-1 lh-1 mt-2'>{video?.author?.name}</div> */}
                 

                 {video?.views !== 0 && <div className='text-white-50 mt-1 mt-sm-2' style={{fontSize:'.9rem', }}> <span className='d-sm-none'>{video?.author?.name}</span> {millify(video?.views) } &#8226;  {video?.uploadedAt} </div>}
                 <div className='text-white-50 d-none d-sm-block lh-1 mt-xl-2  align-items-center gap-3'>
                 
                  {video?.author?.name}</div>
                </div>
            </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default SearchResultCard
