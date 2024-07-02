import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    coords: null,
    name: null,
  },
  reducers: {
    setLocation(state, action) {
      state.coords = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setLocation, setName } = locationSlice.actions;
export default locationSlice.reducer;
