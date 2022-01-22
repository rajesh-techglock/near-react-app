import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ConfirmOtp from ".";
import { ISetOtpDetailProps } from "../../interface/Register";

interface IConfirmOtpComponentProps {
  registerType: number;
  setOtpDetail?: ISetOtpDetailProps;
}
const ConfirmOtpComponent = ({
  setOtpDetail,
  registerType,
}: IConfirmOtpComponentProps) => {
  const [OTP, setOTP] = useState("");
  useEffect(() => {
    setOTP(setOtpDetail?.otp ?? "");
  }, [setOtpDetail?.otp]);
  return (
    <ConfirmOtp
      registerType={registerType}
      setOtpDetail={setOtpDetail}
      OTP={OTP}
      setOTP={setOTP}
    />
  );
};

const mapStateToProps = (state) => {
  return state.auth;
};
const mapDispatcherToProps = {};

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(ConfirmOtpComponent);
