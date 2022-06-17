import { configureStore } from '@reduxjs/toolkit';
import jobsSlice from './jobs/jobSlice';

export const store= configureStore({
  reducer:{
    jobs:jobsSlice,
  }
});