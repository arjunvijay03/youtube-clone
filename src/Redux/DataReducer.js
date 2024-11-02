import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  query: '',
  showSideBar: false,
  feedType: 'home',
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: INITIAL_STATE,
  reducers: {
    handelQueryChange: (state, action) => {
      state.query = action.payload;
    },
    changeShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },

    setFeedType: (state, action) => {
      state.feedType = action.payload;
    },
  },
});

export const { handelQueryChange, changeShowSideBar, setFeedType } =
  dataSlice.actions;
export default dataSlice.reducer;
