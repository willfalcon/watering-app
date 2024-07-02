import { createSlice } from '@reduxjs/toolkit';
import { AccessibilityIcon } from 'lucide-react';
import { v4 as uuid } from 'uuid';

export const waterSlice = createSlice({
  name: 'water',
  initialState: [],
  reducers: {
    addWater(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    deleteWater(state, action) {
      const index = state.findIndex(state => state.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { addWater, deleteWater } = waterSlice.actions;
export default waterSlice.reducer;
