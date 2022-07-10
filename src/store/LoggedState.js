import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged : false, user_name: null
}

export const LoggedState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAccount(state, username) {
        return {logged: true, user_name: username.payload }
    },
    logoutAccount(state) {
        state.logged = false
        state.user_name = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginAccount, logoutAccount } = LoggedState.actions

export default LoggedState.reducer