const InitialState = {
  users: [],
  loading: false,
  error: "",
  success: false,
  isLogin: false,
};

export const auth = (state = InitialState, action) => {
  switch (action.type) {
    case "ACTION_START":
      return {
        ...state,
        data: {},
        success: false,
        error: "",
        loading: true,
        isLogin: false,
      };
    case "ADD_EMAIL":
      return {
        ...state,
        data: action.payload,
        success: false,
        loading: true,
        isLogin: true,
      };
    case "ERROR":
      return {
        ...state,
        data: {},
        error: action.payload,
        success: false,
        loading: true,
        isLogin: false,
      };
    case "COMPLETE_ACTION":
      return {
        ...state,
        success: true,
        loading: false,
        isLogin: false,
      };
    default:
      return state;
  }
};
