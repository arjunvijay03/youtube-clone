import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import VideoDetailsPage from './Pages/VideoDetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/DataReducer';
import SearchResultPage from './Pages/SearchResultPage';
import SearchPage from './Pages/SearchPage';
function App() {
  const dispatch = useDispatch()
  
  const {data ,loading} = useSelector(state=>state.dataReducer)
  useEffect(()=>{
   dispatch( fetchData({query:'malayalam', type:'feed'}) )
  }, [])

  


  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/video/:id' element={<VideoDetailsPage/>}/>
        <Route path='/searchresults' element={<SearchResultPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </Router>
      {/* <Home data={data}></Home>
      <VideoDetailsPage/> */}
      
    </>
  )
}

export default App
