import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  tretementsItemsDetail: null
}

export const treatementSlice = createSlice({
  name: 'treatement',
  initialState,
  reducers: {
    
    treatementdetailsection: (state, action) => {
      const selectedcatogery = action.payload
      state.tretementsItemsDetail = selectedcatogery
      console.log(state.tretementsItemsDetail)

    },
  },
})


export const { treatementdetailsection } = treatementSlice.actions

export default treatementSlice.reducer