// src/actions/authActions.js
import axios from 'axios';

// Action to log in a user
export const loginUser = (userData) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/login', userData);
    dispatch({ type: 'auth/loginUser', payload: res.data });
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow error to handle in the component
  }
};

// Action to register a new user
export const registerUser = (userData) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/register', userData);
    dispatch({ type: 'auth/registerUser', payload: res.data });
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Rethrow error to handle in the component
  }
};
