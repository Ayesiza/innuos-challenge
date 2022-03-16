import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import albumsReducer from '../features/albulm/albumSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    albums:albumsReducer,
  },
});
