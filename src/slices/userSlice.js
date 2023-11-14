import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  password: '',
  isAuth: false,
  city: [],
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.mail;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.email = null;
      state.password = null;
      state.isAuth = false;
    },
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
  },
});

export const { loginUser, logoutUser, addCity } = userSlice.actions;
export default userSlice.reducer;
