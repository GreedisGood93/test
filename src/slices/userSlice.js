import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  password: '',
  isAuth: false,
  cityList: [],
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.mail;
      state.password = action.payload.password;
      state.isAuth = true;
      state.cityList = action.payload.cities;
    },
    logoutUser: (state) => {
      state.email = null;
      state.password = null;
      state.isAuth = false;
      state.cityList = [];
    },
    addingCity: (state, action) => {
      state.cityList.push(action.payload);
    },
    deleteCity: (state, action) => {
      state.cityList.splice(action.payload, 1);
    },
  },
});

export const { loginUser, logoutUser, addingCity, deleteCity } =
  userSlice.actions;

export default userSlice.reducer;
