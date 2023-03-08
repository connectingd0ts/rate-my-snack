import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice';
import logger from "redux-logger";
import { api } from './api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    appStore: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(api.middleware).concat(logger),
});