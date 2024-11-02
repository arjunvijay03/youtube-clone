import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import VideoDetailsPage from './Pages/VideoDetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchResultPage from './Pages/SearchResultPage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetailsPage />} />
          <Route path="/searchresults/:query" element={<SearchResultPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
