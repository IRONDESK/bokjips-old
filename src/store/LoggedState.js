import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged : false, user_name: null
}

export const LoggedState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAccount(state) {
        const user_name = typeof window !== "undefined" ? sessionStorage.getItem("user_name") : null
        return {logged: true, user_name: user_name }
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