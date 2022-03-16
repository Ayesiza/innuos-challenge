
import { createSlice } from "@reduxjs/toolkit";
import albums from "../../albums.json";

export const albumSlice = createSlice({
  name: "album",
  initialState: { albums },

  reducers: {
    filterAlbum: (state, actions) => {
      state.albums = state.albums.filter((album) => album.source === actions.payload
        // state.filtered= actions.payload? JSON.parse(JSON.stringify(state.albums)).filter(
        //   (album) =>album.source ===actions.payload
        // ):null;
      );
    },
  },
});

export const { filterAlbum } = albumSlice.actions;

export default albumSlice.reducer;
