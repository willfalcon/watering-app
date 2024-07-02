import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: [],
    timestamp: null,
  },
  reducers: {
    setWeatherData(state, action) {
      return {
        data: action.payload,
        timestamp: Date.now(),
      };
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
