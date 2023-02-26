import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userSliceState } from "./types";
import { loginResponseData, registerResponseData } from "@/api/types";

const initialState: userSliceState = {
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state, action: PayloadAction<registerResponseData>) {
      state.userData = action.payload;
    },
    logIn(state, action: PayloadAction<loginResponseData>) {
      const { access_token, refresh_token } = action.payload;
      window.localStorage.setItem("access_token", access_token);
      window.localStorage.setItem("refresh_token", refresh_token);
    },
    logOut(state) {
      state.userData = null;
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("refresh_token");
    },
  },
});

export const { logOut, signOut, logIn } = authSlice.actions;
export default authSlice.reducer;
