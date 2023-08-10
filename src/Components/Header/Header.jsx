import React, { memo } from 'react'
import * as Icon from 'react-bootstrap-icons';
import  logo from '../../assets/youtube-logo-png-46020.png'
import { useDispatch, useSelector } from 'react-redux';
import { changeShowSideBar, handelQueryChange } from '../../Redux/DataReducer';
import { useNavigate } from 'react-router-dom';
import { useGetDataQuery } from '../../API/FetchData';
function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { query } = useSelector(state => state.dataReducer)
  const handleChange = (event) => {
      dispatch(handelQueryChange(event.target.value))
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    if (!query) return
    navigate(`/searchresults/${query}`)
  }
  return (
    <>
        <div className=' position-fixed z-3 top-0 w-100 bg-youtube px-2 px-lg-4 d-flex align-items-center justify-content-between' style={{height:'60px',zIndex:'10'}} >
            <div >
                <Icon.List color='white' size={25} onClick={()=>dispatch(changeShowSideBar())}/>
                <img width={110} src={logo} className='ms-3' alt="logo" onClick={()=>navigate('/')} />
            </div>
            <div className='d-flex justify-content-center align-items-center w-50 d-none d-sm-flex'>
              <form onSubmit={(event=>handleSubmit(event))} className='rounded-pill overflow-hidden  d-flex align-items-center w-75 ' style={{border:'2px solid hsl(0, 0%, 18.82%)'}}>
                <input onChange={(event) => handleChange(event)} className="form-control bg-transparent border-0 text-white  " type="text" placeholder="Search"/>
                <div className='h-100 px-4 py-2 d-flex justify-content-center align-items-center' style={{backgroundColor:'hsl(0, 0%, 18.82%)'}}>
                  <Icon.Search color='white' size={20}></Icon.Search>
                </div>
              </form>
              <div className='p-2 rounded-circle d-flex justify-content-center align-items-center ms-3' style={{backgroundColor:'hsl(0, 0%, 18.82%)', width:'40px', height:'40px'}}>
                <Icon.MicFill size={20} color='white'></Icon.MicFill>
              </div>
            </div>


            <div className='d-flex align-items-center gap-3'>
              <div className='d-sm-none' role='button' onClick={()=> navigate('/search')}>
              <Icon.Search color='white' size={20}></Icon.Search>
              </div>
              <div>
                <Icon.CameraVideo size={20} color='white'></Icon.CameraVideo>
              </div>
              <div>
                <Icon.Bell size={20} color='white'></Icon.Bell>
              </div>
              <div className='d-flex justify-content-center align-items-center bg-primary rounded-circle fs-4 text-light' style={{width:'40px', height:'40px'}}>A</div>
            </div>
        </div>
    </>
  )
}

export default memo(Header) 
