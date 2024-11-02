import millify from 'millify';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function VideoCard({ video }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/video/${video.videoId}`)}
      className=" col-xl-4 col-md-6 p-0 d-flex justify-content-center  p-md-4"
      role="button"
    >
      <div
        className=" card position-relative w-100 bg-transparent text-light overflow-hidden"
        style={{ zIndex: '0' }}
      >
        <div className="w-100 ratio ratio-16x9 rounded-3 overflow-hidden ">
          <img src={video.thumbnail[1]?.url} alt="" />
        </div>
        <div className="w-100 row h-25 ">
          <div className=" col-2 ">
            <div
              className=" rounded-circle mt-2 ms-1 object-fit-contain overflow-hidden"
              style={{ width: '40px', height: '40px' }}
            >
              <img
                className="w-100"
                src={video.channelThumbnail?.[0]?.url}
                alt=""
              />
            </div>
          </div>
          <div className="col-10 ">
            <div className=" mt-2 video-title">{video.title}</div>
            <div className="text-white-50 fs-6 mt-1 lh-1">
              <small> {video.channelTitle}</small>
            </div>
            {video.views !== 0 && (
              <div className="text-white-50 mt-1" style={{ fontSize: '.9rem' }}>
                {millify(video.viewCount)} &#8226; {video.publishedTimeText}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
