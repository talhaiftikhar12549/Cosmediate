import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const treatementSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    treatementdetailsection: (state, action) => {
      const selectedcatogery = action.payload
      console.log(selectedcatogery)
      state.value += action.payload
    },
  },
})


export const { treatementdetailsection } = treatementSlice.actions

export default treatementSlice.reducer