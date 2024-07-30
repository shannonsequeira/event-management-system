const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case "AUTH_REGISTER_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case "AUTH_LOGOUT_USER":
      return initialState;

    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
