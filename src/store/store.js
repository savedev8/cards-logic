import { configureStore } from '@reduxjs/toolkit';
import { dataInfoSlice } from './slices/dataSlice';

export const store = configureStore({
    reducer: {
      dataInfo: dataInfoSlice.reducer,
    },
  });