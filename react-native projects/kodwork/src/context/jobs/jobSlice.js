import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice=createSlice({
  name:'jobs',
  initialState:{
    favoriteJobs:[]
  },
  reducers:{
    addToFavroite:(state,actions)=>{
      const {job}=actions.payload;
      const isThereInFavoriteList=state.favoriteJobs.filter(item=>item.id===job.id);
      if(isThereInFavoriteList.length===0){
        state.favoriteJobs.push(job);
      }
    },
    removeJob:(state,actions)=>{
      const {job}=actions.payload;
      const newArr=state.favoriteJobs.filter(item=> item.id!==job.id);
      state.favoriteJobs=newArr;
    },
  }
});



export const {addToFavroite,removeJob} = jobsSlice.actions;
export default jobsSlice.reducer;