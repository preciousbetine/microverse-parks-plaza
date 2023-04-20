import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './slices/activitySlice';
import parksReducer from './slices/parkSlice';

export default configureStore({
  reducer: {
    activities: activitiesReducer,
    parks: parksReducer,
  },
});
