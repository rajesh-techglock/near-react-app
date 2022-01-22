import React from "react";
import HeaderWithLogo from "../../Components/Common/HeaderWithLogo";
import HeaderWithText from "../../Components/Common/HeaderWithText";
import ConfirmOtpComponent from "../../Components/ConfirmOtp/ConfirmOtpComponent";
import RegisterWithEmail from "../../Components/Register/RegisterWithEmail";
import RegisterWithPhone from "../../Components/Register/RegisterWithPhone";
import { IRegisterErrors, IRegisterValues } from "./RegisterInterface";
interface IRegisterProp {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setRegisterType: (type: number) => void;
  setOtpScreen: (type: boolean) => void;
  handleRegisterSubmit: () => void;
  registerType: number;
  otpScreen: boolean;
  errors: IRegisterErrors;
  values: IRegisterValues;
}
const Register = ({
  otpScreen,
  errors,
  values,
  registerType,
  setOtpScreen,
  setRegisterType,
  handleOnChange,
  handleRegisterSubmit,
}: IRegisterProp) => {
  return (
    <>
      <HeaderWithLogo />
      <div className="d-flex justify-content-center my-4 register-type-tabs">
        <button
          className={`btn btn-default py-1 tab-btn px-3 me-4 ${
            registerType === 1 ? "active" : ""
          }`}
          onClick={() => setRegisterType(1)}
        >
          Email
        </button>
        <button
          className={`btn btn-default py-1 tab-btn px-3 ${
            registerType === 2 ? "active" : ""
          }`}
          onClick={() => setRegisterType(2)}
        >
          Phone
        </button>
      </div>
      <div className="tab-content">
        {registerType === 1 ? (
          <RegisterWithEmail
            handleRegisterSubmit={handleRegisterSubmit}
            handleOnChange={handleOnChange}
            errors={errors}
            values={values}
          />
        ) : (
          <RegisterWithPhone
            handleRegisterSubmit={handleRegisterSubmit}
            handleOnChange={handleOnChange}
            errors={errors}
            values={values}
          />
        )}
      </div>
      <div
        className={`modal ${otpScreen ? "d-block" : ""}`}
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <HeaderWithText
              heading="Verification"
              setOtpScreen={setOtpScreen}
            />
            <div className="modal-body">
              <ConfirmOtpComponent registerType={registerType} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
