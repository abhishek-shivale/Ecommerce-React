import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLogin: false,
    userInfo: {},
  },
  reducers: {
    LoginState: (state) => {
      state.isLogin = !state.isLogin;
    },
    UserDataReducer: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { LoginState, UserDataReducer } = authSlice.actions;
