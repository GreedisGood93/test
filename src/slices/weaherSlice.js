import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from 'api';
import { addingCity } from './userSlice';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    currentLocation: null,
    error: null,
    isSuccess: false,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload.weatherData;
      state.currentLocation = action.payload.currentLocation;
      state.error = null;
      state.isSuccess = true;
    },

    setError: (state, action) => {
      state.weatherData = null;
      state.currentLocation = null;
      state.error = action.payload;
      state.isSuccess = false;
    },
  },
});

export const { setWeatherData, setError } = weatherSlice.actions;

export const fetchWeatherData = (city) => async (dispatch) => {
  try {
    const data = await getWeatherData(city);
    dispatch(setWeatherData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default weatherSlice.reducer;
