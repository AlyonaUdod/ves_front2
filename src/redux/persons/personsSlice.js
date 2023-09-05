import { createSlice } from '@reduxjs/toolkit';
import { getPersons, addPerson } from './personsOperations';

const initialState = {
  items: [],
  isLoading: null,
  isError: null,
};
const handleRejected = (state, action) => {
  state.isError = action.payload;
};

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getPersons.pending, state => {
        state.isLoading = 'get persons';
      })
      .addCase(getPersons.fulfilled, (state, { payload }) => {
        state.items = [...payload];
        state.isLoading = '';
      })
      .addCase(getPersons.rejected, handleRejected)

      .addCase(addPerson.pending, state => {
        state.isLoading = 'add person';
      })
      .addCase(addPerson.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = 'success added';
      })
      .addCase(addPerson.rejected, handleRejected),
});

export const personsReducer = personsSlice.reducer;
