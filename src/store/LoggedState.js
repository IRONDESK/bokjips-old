import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user_name: null,
  user_id: null,
  token: null,
};

export const LoggedState = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAccount(state, action) {
      state.isLogged = true;
      state.user_name = action.payload.user_name;
      state.user_id = action.payload.user_id;
      state.token = action.payload.token;
    },
    logoutAccount(state) {
      state.isLogged = false;
      state.user_name = null;
      state.user_id = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginAccount, logoutAccount } = LoggedState.actions;

export default LoggedState.reducer;
