const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return {
        ...state,
      };
    case "SIGNUP_SUCCESS":
      console.log("Signup SUccess");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Singup Error");
      return {
        ...state,
        authError: action.error.message,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
