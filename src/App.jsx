import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import VideoDetailsPage from "./Pages/VideoDetailsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllVideos } from "./Redux/DataReducer";
import SearchResultPage from "./Pages/SearchResultPage";
import SearchPage from "./Pages/SearchPage";
import { useGetDataQuery } from "./API/FetchData";
import TrendingsPage from "./Pages/TrendingsPage";
import MusicPage from "./Pages/MusicPage";
import GamingPage from "./Pages/GamingPage";
function App() {
  const dispatch = useDispatch();
  const { allVideos } = useSelector((state) => state.dataReducer);
  useEffect(() => {
    const videos = JSON.parse(sessionStorage.getItem("allvideos")) || [];
    // console.log(videos);
    dispatch(setAllVideos(videos));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetailsPage />} />
          <Route path="/feed/trending" element={<TrendingsPage />} />
          <Route path="/feed/music" element={<MusicPage />} />
          <Route path="/feed/gaming" element={<GamingPage />} />
          <Route path="/searchresults/:query" element={<SearchResultPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
      {/* <Home data={data}></Home>
      <VideoDetailsPage/> */}
    </>
  );
}

export default App;
