import React, { useEffect, useRef } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { fetchData, handelQueryChange } from '../Redux/DataReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { query } = useSelector(state => state.dataReducer)
   
    const handleChange = (event) => {
        dispatch(handelQueryChange(event.target.value))
    }
    const handleSubmit = (event)=>{
      event.preventDefault()
      dispatch(fetchData({query, type:'search'}))
      navigate('/searchresults')
    }
  return (
    <>
       <div className='d-flex justify-content-center align-items-center w-100 mt-2 px-2' >
              <form onSubmit={(event=>handleSubmit(event))} className=' overflow-hidden  d-flex align-items-center w-100 ' style={{border:'2px solid hsl(0, 0%, 18.82%)', height:'50px'}}>
                <input autoFocus onChange={(event) => handleChange(event)} className="form-control bg-transparent border-0 text-white  " type="text" placeholder="Search"/>
                <div className='h-100 px-3 py-2 d-flex justify-content-center align-items-center' style={{backgroundColor:'hsl(0, 0%, 18.82%)'}}>
                  <Icon.Search color='white' size={20}></Icon.Search>
                </div>
              </form>
              
            </div>
    </>
  )
}

export default SearchPage
