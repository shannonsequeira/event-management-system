// import axios from 'axios';
// import { toast } from 'react-toastify';

// // Action to log in a user
// export const loginUser = (userData) => async dispatch => {
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/login', userData);
//     dispatch({ type: 'auth/loginUser', payload: res.data });
//     return res; // Return the response to allow chaining
//   } catch (error) {
//     console.error('Error logging in:', error.response ? error.response.data : error.message);
//     toast.error('Login failed. Please check your credentials and try again.');
//     throw error; // Rethrow error to handle in the component
//   }
// };

// // Action to register a new user
// export const registerUser = (userData) => async dispatch => {
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/register', userData);
//     dispatch({ type: 'auth/registerUser', payload: res.data });
//     toast.success('Registration successful!');
//     return res; // Return the response to allow chaining
//   } catch (error) {
//     console.error('Error registering user:', error.response ? error.response.data : error.message);
//     toast.error('Registration failed. Please try again.');
//     throw error; // Rethrow error to handle in the component
//   }
// };
import axios from "axios";
import { toast } from "react-toastify";

// Action to log in a user
export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      userData
    );
    dispatch({ type: "auth/loginUser", payload: res.data });
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error(
      "Error logging in:",
      error.response ? error.response.data : error.message
    );
    toast.error("Login failed. Please check your credentials and try again.");
    throw error; // Rethrow error to handle in the component
  }
};

// Action to register a new user
export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      userData
    );
    dispatch({ type: "auth/registerUser", payload: res.data });
    toast.success("Registration successful!");
    return res; // Return the response to allow chaining
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response ? error.response.data : error.message
    );
    toast.error("Registration failed. Please try again.");
    throw error; // Rethrow error to handle in the component
  }
};

// actions/authActions.js
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch("/api/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust this if you store the token differently
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch({ type: "SET_USER", payload: data });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    // Handle error appropriately (e.g., dispatch an error action)
  }
};
