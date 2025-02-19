import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import sensorReducer from '../slices/sensorSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sensor: sensorReducer,
  },
});