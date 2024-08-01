import axios from "axios";
import { toast } from "react-toastify";

// Action to log in a user
export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      userData
    );
    dispatch({ type: "AUTH_LOGIN_USER", payload: res.data });
    localStorage.setItem("token", res.data.token); // Store token in localStorage
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
    dispatch({ type: "AUTH_REGISTER_USER", payload: res.data });
    toast.success("Registration successful!");
    localStorage.setItem("token", res.data.token); // Store token in localStorage
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

// Action to update user profile
export const updateUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.put(
      "http://localhost:5000/api/users/edit-profile",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    dispatch({ type: "UPDATE_USER", payload: response.data });
    toast.success("Profile updated successfully!");
  } catch (error) {
    console.error("Failed to update user:", error);
    toast.error("Profile update failed. Please try again.");
  }
};

// Action to fetch user profile
export const fetchUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:5000/api/auth/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    dispatch({ type: "FETCH_USER_FAILURE", error: error.message });
  }
};

// Action to log out a user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "AUTH_LOGOUT_USER" });
  toast.success("Logged out successfully!");
};
