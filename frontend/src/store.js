import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./reducers/eventReducer"; // Ensure this path is correct
import { authReducer } from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    events: eventReducer, // Make sure the key matches how you access state in your component
    auth: authReducer, // Add the auth reducer
  },
});

export default store;
//
