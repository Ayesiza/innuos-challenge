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
     
      state.filteredCategory = actions.payload
        ? JSON.parse(JSON.stringify(state.data)).filter(
            (album) => album.source === actions.payload
          )
        : null;
        console.log(JSON.stringify(state.data));
       
    },
  },
});

export const { filterAlbums } = albumSlice.actions;

export default albumSlice.reducer;