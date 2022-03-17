import { createSlice } from "@reduxjs/toolkit";
import data from '../../albums.json'
const initialState = {
  data,
  filteredCategory: null,
};

export const albumSlice = createSlice({
  name: "Albums",
  initialState,
  reducers: {
    filterAlbums: (state, actions) => {
     
      state.filteredCategory = actions.payload ==="ALL"
        ? JSON.parse(JSON.stringify(state.data))
        :JSON.parse(JSON.stringify(state.data)).filter(album => album.source === actions.payload);

    },
  },
});

export const { filterAlbums } = albumSlice.actions;

export default albumSlice.reducer;