import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  tretementsItemsDetail: null,
  selectedTreatementItems: [],
}

export const treatementSlice = createSlice({
  name: 'treatement',
  initialState,
  reducers: {

    treatementdetailsection: (state, action) => {
      const selectedcatogery = action.payload
      state.tretementsItemsDetail = selectedcatogery
    },

    selectedTreatement: (state, action) => {
      const selectedItems = action.payload
      if (!state.selectedTreatementItems.includes(selectedItems)) {
        state.selectedTreatementItems = [...state.selectedTreatementItems, selectedItems];
      }
      console.log(state.selectedTreatementItems)
    }
  },
})


export const { treatementdetailsection, selectedTreatement } = treatementSlice.actions

export default treatementSlice.reducer