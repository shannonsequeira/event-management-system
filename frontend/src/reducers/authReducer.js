const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/loginUser":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case "auth/registerUser":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case "auth/logoutUser":
      return initialState;
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "SET_USER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
