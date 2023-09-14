import React from "react";
import Header from "../Components/Header/Header";
import Video from "../Components/Videodetails/Video";
import { useLocation, useParams } from "react-router-dom";
import VideodetailsCont from "../Components/Videodetails/VideodetailsCont";

function VideoDetailsPage() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <VideodetailsCont id={id}></VideodetailsCont>
    </div>
  );
}

export default VideoDetailsPage;
