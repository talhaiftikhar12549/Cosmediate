import { configureStore } from '@reduxjs/toolkit'
import treatementSlice from "./treatementSlice"
export const store = configureStore({
  reducer: {
    counter: treatementSlice,
  },
})