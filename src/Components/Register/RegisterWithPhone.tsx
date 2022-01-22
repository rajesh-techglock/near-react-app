import React from "react";
import {
  IRegisterErrors,
  IRegisterValues,
} from "../../Pages/Register/RegisterInterface";
import AlreadyHaveAccount from "../Common/AlreadyHaveAccount";
import Divider from "../Common/Divider";
import InputField from "../Common/InputField";

interface IRegisterWithPhoneProps {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegisterSubmit: () => void;
  errors: IRegisterErrors;
  values: IRegisterValues;
}
const RegisterWithPhone = ({
  errors,
  values,
  handleOnChange,
  handleRegisterSubmit,
}: IRegisterWithPhoneProps) => {
  return (
    <div className="email-form mx-auto">
      <InputField
        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
        type="number"
        name="phone"
        placeholder="Ex (337) 378 8383"
        value={values.phone ?? ""}
        error={errors.phone ?? ""}
        onChange={handleOnChange}
      />
      <div className="text-center">
        <button
          className="btn btn-primary text-white mt-3 continue-btn"
          onClick={handleRegisterSubmit}
        >
          Continue{" "}
          <i
            className="fa fa-angle-right ms-3 fw-bolder"
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <p className="text-muted mt-4 term-condition-text px-3 mb-4">
        by clicking continue you must agree to near labs{" "}
        <span>Terms & Conditions</span> and <span>Privacy Policy</span>
      </p>
      <Divider color="#E9E6E6" />
      <div className="text-center">
        <AlreadyHaveAccount />
      </div>
    </div>
  );
};

export default RegisterWithPhone;
