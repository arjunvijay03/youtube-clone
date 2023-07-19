import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../Redux/DataReducer';
function HomeLeft() {
  const dispatch = useDispatch()
  const handleClick = ( query)=>{
      dispatch(fetchData(query))
  }
  return (
    <>
    <div className='w-100 p-2 px-3  d-flex flex-column gap-2 overflow-auto hide-scroll-bar' style={{height:'calc(100vh - 60px)'}}> {/*hide scroll bar class is costom css*/ }
        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.HouseFill size={20}></Icon.HouseFill>Home</div>
        <div onClick={()=>handleClick('trending')} className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.Film size={20}></Icon.Film>Shorts</div>
        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.CollectionPlay size={20}></Icon.CollectionPlay>Subscriptions</div>
        
        <hr className='w-100 bg-secondary' />

        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.Collection size={20}></Icon.Collection>Library</div>
        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.ClockHistory size={20}></Icon.ClockHistory>History</div>
        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.PlayBtn size={20}></Icon.PlayBtn>Your video</div>
        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.Clock size={20}></Icon.Clock>Watch Later</div>
        <div className="w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  " role='button'>  <Icon.Scissors size={20}></Icon.Scissors>Your clips</div>


        

      
    </div>
      
    </>
  )
}

export default HomeLeft
