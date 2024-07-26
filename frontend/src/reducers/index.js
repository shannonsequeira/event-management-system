import { combineReducers } from '@reduxjs/toolkit';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  events: eventReducer,
});

export default rootReducer;