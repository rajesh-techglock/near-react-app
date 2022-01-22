import React from "react";
import HeaderWithLogo from "../../Components/Common/HeaderWithLogo";
import RegisterWithEmail from "../../Components/Register/RegisterWithEmail";
import RegisterWithPhone from "../../Components/Register/RegisterWithPhone";
import { IRegisterErrors, IRegisterValues } from "./RegisterInterface";
interface IRegisterProp {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setRegisterType: (type: number) => void;
  handleRegisterSubmit: () => void;
  registerType: number;
  errors: IRegisterErrors;
  values: IRegisterValues;
}
const Register = ({
  errors,
  values,
  registerType,
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
      {/* <div
        className="modal d-block"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
