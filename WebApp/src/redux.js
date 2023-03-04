import { configureStore } from '@reduxjs/toolkit';
import testSlice from './slice';

export const store = configureStore({
  reducer: {
    testSlice: testSlice,
  },
});