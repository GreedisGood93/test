import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  password: '',
  isAuth: false,
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
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
