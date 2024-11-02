import React, { memo, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { changeShowSideBar, setFeedType } from '../../Redux/DataReducer';
import { useNavigate } from 'react-router-dom';
function HomeLeft({ active }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (type) => {
    if (type === '') {
      navigate('/');
      dispatch(changeShowSideBar(false));
      return;
    }
    navigate(`/?q=${type}`);
    dispatch(changeShowSideBar(false));
  };

  return (
    <>
      <div
        className="w-100 p-2 px-3  d-flex flex-column gap-2 overflow-auto hide-scroll-bar position-relative "
        style={{ height: 'calc(100vh - 60px)' }}
      >
        {/*hide scroll bar class is costom css*/}
        <div
          onClick={() => handleClick('')}
          className={`${
            active === '' && 'bg-dark'
          }  w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3 `}
          role="button"
        >
          <Icon.HouseFill size={20}></Icon.HouseFill>Home
        </div>
        <div
          onClick={() => handleClick('trending')}
          className={` ${
            active === 'trending' && 'bg-dark'
          }  w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.Fire size={20}></Icon.Fire>Trending
        </div>
        <div
          onClick={() => handleClick('music')}
          className={` ${
            active === 'music' && 'bg-dark'
          }  w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.MusicNoteBeamed size={20}></Icon.MusicNoteBeamed>Music
        </div>
        <div
          onClick={() => handleClick('gaming')}
          className={` ${
            active === 'gaming' && 'bg-dark'
          }  w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.Controller size={20}></Icon.Controller>Gaming
        </div>
        <hr className="w-100 bg-secondary" />
        <div
          className={`w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.Collection size={20}></Icon.Collection>Library
        </div>
        <div
          className={`w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.ClockHistory size={20}></Icon.ClockHistory>History
        </div>
        <div
          className={`w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.PlayBtn size={20}></Icon.PlayBtn>Your video
        </div>
        <div
          className={`w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.Clock size={20}></Icon.Clock>Watch Later
        </div>
        <div
          className={`w-100 p-2  home-left-options text-light rounded-3 d-flex align-items-center gap-4 fs-6 fw-fw-normal ps-3  `}
          role="button"
        >
          <Icon.Scissors size={20}></Icon.Scissors>Your clips
        </div>
        <a
          href="https://courageous-froyo-856948.netlify.app/"
          target="_blank"
          className="position-absolute bottom-0 mb-4 text-white "
          style={{ fontSize: '12px' }} rel="noreferrer"
        >
          <Icon.CCircle className="me-1"></Icon.CCircle> Arjun Vijay-2023
        </a>
      </div>
    </>
  );
}

export default memo(HomeLeft);
