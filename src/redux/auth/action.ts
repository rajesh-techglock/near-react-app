export const sendOtpOnEmail = (payload) => async (dispatch) => {
  dispatch({ type: "ACTION_START" });
  dispatch({
    type: "ADD_EMAIL",
    payload,
  });
  dispatch({ type: "COMPLETE_ACTION" });
};
