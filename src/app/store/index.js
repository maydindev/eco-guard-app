import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import sensorReducer from '../slices/sensorSlice';
import authReducer from '../slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sensor: sensorReducer,
    auth: authReducer,
  },
});