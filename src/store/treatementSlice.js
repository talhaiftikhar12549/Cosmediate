import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  tretementsItemsDetail: null,
  // selectedTreatementItems: [],
  selectedTreatementItems: JSON.parse(localStorage.getItem('selectedTreatementItems')) || [],
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
    },

    savedTreatements: (state) => {
      localStorage.setItem('selectedTreatementItems', JSON.stringify(state.selectedTreatementItems));
      console.log("meow")
    }
  },
})


export const { treatementdetailsection, selectedTreatement, savedTreatements } = treatementSlice.actions

export default treatementSlice.reducer