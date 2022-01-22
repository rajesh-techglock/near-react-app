import React from "react";
import { ISetOtpDetailProps } from "../../interface/Register";
import OTPInput from "otp-input-react";
import Divider from "../Common/Divider";
interface IConfirmOtpProps {
  registerType: number;
  setOtpDetail: ISetOtpDetailProps;
  setOTP: (otp: string) => void;
  OTP: string;
}
const ConfirmOtp = ({
  registerType,
  setOtpDetail,
  setOTP,
  OTP,
}: IConfirmOtpProps) => {
  return (
    <div className="text-center px-3">
      {registerType === 1 ? (
        <p>
          We've sent a 6-digit verification code to the <br /> email address
        </p>
      ) : (
        <p>We've sent a 6-digit verification code to your phone</p>
      )}
      <p className="text-info">
        {registerType === 1 ? setOtpDetail?.email : setOtpDetail?.phone}{" "}
      </p>
      <div className="form-otp">
        <span className="text-muted">Enter verification code</span>
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          className="otp-input mt-3 mb-3"
        />
        <button className="btn btn-primary text-white mt-3 mb-3 continue-btn">
          Continue{" "}
          <i
            className="fa fa-angle-right ms-3 fw-bolder"
            aria-hidden="true"
          ></i>
        </button>
        <Divider color="#E9E6E6" />
        <p className="text-dark">Didn't receive your code?</p>
        <p className="text-info fs-6">Send to a different email address</p>
        <p className="text-info fs-6">Resend your code </p>
      </div>
    </div>
  );
};

export default ConfirmOtp;
