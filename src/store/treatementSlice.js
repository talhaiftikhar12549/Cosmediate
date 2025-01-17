import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  tretementsItemsDetail: null,
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
    },

    savedTreatements: (state) => {
      localStorage.setItem('selectedTreatementItems', JSON.stringify(state.selectedTreatementItems));
    },

    deleteItem: (state, action) => {
      const deletedItems = action.payload
      const deletingItem = state.selectedTreatementItems.indexOf(deletedItems);
      if (deletingItem !== -1) {
        state.selectedTreatementItems.splice(deletingItem, 1);
      }
    }
  },
})


export const { treatementdetailsection, selectedTreatement, savedTreatements, deleteItem } = treatementSlice.actions

export default treatementSlice.reducer