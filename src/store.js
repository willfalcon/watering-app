import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './lib/browser-storage';
import weatherReducer from './slices/weatherSlice';
import waterReducer from './slices/waterSlice';
import locationReducer from './slices/locationSlice';

export default configureStore({
  reducer: {
    weather: weatherReducer,
    water: waterReducer,
    location: locationReducer,
  },
  preloadedState: loadState(),
});
