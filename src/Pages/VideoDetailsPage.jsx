import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import { useParams } from 'react-router-dom';
import VideodetailsCont from '../Components/Videodetails/VideodetailsCont';

function VideoDetailsPage() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      <Header />
      <VideodetailsCont id={id} />
    </div>
  );
}

export default VideoDetailsPage;
