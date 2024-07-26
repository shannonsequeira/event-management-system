// src/actions/eventActions.js
import axios from 'axios';

// Action to fetch events
export const fetchEvents = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/events');
    dispatch({ type: 'events/fetchEvents', payload: res.data });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Action to create a new event
export const createEvent = (event) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/events', event);
    dispatch({ type: 'events/createEvent', payload: res.data });
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error('Error creating event:', error);
    throw error; // Rethrow error to handle in the component
  }
};
