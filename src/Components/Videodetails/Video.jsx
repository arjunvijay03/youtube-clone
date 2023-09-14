import React from "react";
import ReactPlayer from "react-player";
function Video({ id }) {
  return (
    <div className="w-100 h-100">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        width="100%"
        height="100%"
        style={{ backgroundColor: "#000000" }}
        playing={true}
      />
    </div>
  );
}

export default Video;
