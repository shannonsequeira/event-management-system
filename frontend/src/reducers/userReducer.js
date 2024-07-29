import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: "",
    email: "",
    bio: "",
    profilePicture: "",
    contactNumber: "",
    eventsOrganized: [],
  },
  reducers: {
    setUserProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUserProfile: () => {
      return {
        id: null,
        name: "",
        email: "",
        bio: "",
        profilePicture: "",
        contactNumber: "",
        eventsOrganized: [],
      };
    },
    updateUserProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    addEvent: (state, action) => {
      state.eventsOrganized.push(action.payload);
    },
  },
});

export const { setUserProfile, clearUserProfile, updateUserProfile, addEvent } =
  userSlice.actions;
export default userSlice.reducer;
