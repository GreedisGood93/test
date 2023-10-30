import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  email: '',
  pas: '',
  isAuth: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.mail;
      state.pas = action.payload.pas;
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.email = null;
      state.pas = null;
      state.isAuth = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
