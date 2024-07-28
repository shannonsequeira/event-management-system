import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    fetchEvents: (state, action) => action.payload,
    createEvent: (state, action) => [...state, action.payload],
<<<<<<< HEAD
    fetchEvent: (state, action) => state.find(event => event.id === action.payload.id),
    editEvent: (state, action) => state.map(event => 
      event.id === action.payload.id ? { ...event, ...action.payload.data } : event
    ),
    deleteEvent: (state, action) => state.filter(event => event.id !== action.payload),
  },
});

export const { fetchEvents, createEvent, fetchEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
=======
  },
});

export const { fetchEvents, createEvent } = eventSlice.actions;
export default eventSlice.reducer;
>>>>>>> origin/main
