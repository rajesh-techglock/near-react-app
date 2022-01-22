const InitialState = {
  users: [],
  setOtpDetail: null,
  loading: false,
  complete: false,
  message: "",
  error: false,
};

export const auth = (state = InitialState, action) => {
  switch (action.type) {
    case "ACTION_START":
      return {
        ...state,
        loading: true,
      };
    case "SET_OTP":
      return {
        ...state,
        setOtpDetail: action.payload,
        complete: true,
      };
    case "ERROR":
      return {
        ...state,
        message: "",
        error: true,
        loading: true,
      };
    case "COMPLETE_ACTION":
      return {
        ...state,
        loading: false,
        complete: false,
      };
    default:
      return state;
  }
};
