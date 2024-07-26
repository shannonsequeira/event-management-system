import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './reducers/eventReducer'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    events: eventReducer, // Make sure the key matches how you access state in your component
  },
});

export default store;
