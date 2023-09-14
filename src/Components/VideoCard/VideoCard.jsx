import React, { useRef } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
function VideoCard({ video }) {
  const videoRef = useRef();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/video/${video.id}`)}
      className=" col-xl-4 col-md-6 p-0 d-flex justify-content-center  p-md-4"
      role="button"
    >
      <div
        className=" card position-relative w-100 bg-transparent text-light overflow-hidden"
        style={{ zIndex: "0" }}
      >
        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
        <div className="w-100 ratio ratio-16x9 rounded-3 overflow-hidden ">
          <img src={video.thumbnail?.url} alt="" />
          {/* <video className='' ref={videoRef} style={{objectFit:'cover'}} muted="muted" >
                <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"/>
                <source src="https://www.w3schools.com/tags/movie.mp4" type="video/ogg"/>
  
            </video> */}
        </div>
        <div className="w-100 row h-25 ">
          <div className=" col-2 ">
            <div
              className=" rounded-circle mt-2 ms-1 object-fit-contain overflow-hidden"
              style={{ width: "40px", height: "40px" }}
            >
              <img className="w-100" src={video.channel?.icon} alt="" />
            </div>
          </div>
          <div className="col-10 ">
            <div className=" mt-2 video-title  ">{video.title}</div>
            <div className="text-white-50 fs-6 mt-1 lh-1">
              {" "}
              <small> {video.channel?.name}</small>
            </div>
            {video.views !== 0 && (
              <div className="text-white-50 mt-1" style={{ fontSize: ".9rem" }}>
                {millify(video.views)} &#8226; {video.uploadedAt}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
