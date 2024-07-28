import axios from 'axios';

// Action to fetch all events
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
    const formData = new FormData();
    Object.keys(event).forEach(key => {
      formData.append(key, event[key]);
    });
    const res = await axios.post('http://localhost:5000/api/events', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch({ type: 'events/createEvent', payload: res.data });
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error('Error creating event:', error);
    throw error; // Rethrow error to handle in the component
  }
};

// Action to fetch a single event
export const fetchEvent = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/events/${id}`);
    dispatch({ type: 'events/fetchEvent', payload: res.data });
  } catch (error) {
    console.error('Error fetching event:', error);
  }
};

// Action to edit an event
export const editEvent = (id, event) => async dispatch => {
  try {
    const formData = new FormData();
    Object.keys(event).forEach(key => {
      formData.append(key, event[key]);
    });
    const res = await axios.put(`http://localhost:5000/api/events/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    dispatch({ type: 'events/editEvent', payload: { id, data: res.data } });
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error('Error editing event:', error);
    throw error; // Rethrow error to handle in the component
  }
};

// Action to delete an event
export const deleteEvent = (id) => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/api/events/${id}`);
    dispatch({ type: 'events/deleteEvent', payload: id });
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error; // Rethrow error to handle in the component
  }
};
