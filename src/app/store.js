import { configureStore, createSlice } from '@reduxjs/toolkit'
import LoggedState from '../store/LoggedState'

export const store = configureStore({
  reducer: {
    LoggedState,
},
})

