import millify from 'millify';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RelatedVideoCard({ video }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/video/${video?.videoId}`)}
        className=" row d-flex   bg-transparent text-light overflow-hidden"
        role="button"
      >
        <div className="col-5  rounded-3 overflow-hidden">
          <img className="w-100" src={video?.thumbnail[0].url} alt="" />
        </div>
        <div className=" col-7 h-100 p-0 m-0 ">
          <div className=" h-100 ">
            <div className=" fw-bold mt-sm-2 video-title m-0 fs-6 ">
              {video?.title}
            </div>
            <div className="text-white-50  mt-sm-1 lh-1 mt-2">
              <small> {video?.channelTitle}</small>
            </div>

            {video?.viewCount !== 0 && (
              <div
                className="text-white-50 mt-sm-1"
                style={{ fontSize: '.9rem' }}
              >
                {millify(video?.viewCount)} &#8226; {video?.publishedTimeText}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default RelatedVideoCard;
