import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    fetchEvents: (state, action) => action.payload,
    createEvent: (state, action) => [...state, action.payload],
  },
});

export const { fetchEvents, createEvent } = eventSlice.actions;
export default eventSlice.reducer;