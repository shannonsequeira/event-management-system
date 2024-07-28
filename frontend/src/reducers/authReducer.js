const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'auth/loginUser':
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuthenticated: true,
        };
      case 'auth/registerUser':
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isAuthenticated: true,
        };
      case 'auth/logoutUser':
        return initialState;
      default:
        return state;
    }
  };
  