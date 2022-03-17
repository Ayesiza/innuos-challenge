import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import albumReducer from '../features/albulm/albumSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    album:albumReducer,
  },
});
