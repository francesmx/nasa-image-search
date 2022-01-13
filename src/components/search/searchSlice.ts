import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

interface SearchState {
  searchInput: string;
}

const initialState: SearchState = {
  searchInput: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { updateSearchInput } = searchSlice.actions;

export const selectSearchInput = (state: RootState) => state.search.searchInput;

export default searchSlice.reducer;
