export const sendOtpOnEmail = (payload) => async (dispatch) => {
  dispatch({ type: "ACTION_START" });
  dispatch({
    type: "SET_OTP",
    payload,
  });
  setTimeout(() => {
    dispatch({ type: "COMPLETE_ACTION" });
  }, 2000);
};
