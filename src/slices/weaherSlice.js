import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from 'api';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    currentLocation: null,
    error: null,
  },
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload.weatherData;
      state.currentLocation = action.payload.currentLocation;
      state.error = null;
    },
    setError: (state, action) => {
      state.weatherData = null;
      state.currentLocation = null;
      state.error = action.payload;
    },
  },
});

export const fetchWeatherData = (city) => async (dispatch) => {
  try {
    const data = await getWeatherData(city);
    dispatch(setWeatherData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export default weatherSlice.reducer;
export const { setWeatherData, setError } = weatherSlice.actions;
