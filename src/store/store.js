import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import weaherSlice from 'slices/weaherSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    weather: weaherSlice,
  },
});
