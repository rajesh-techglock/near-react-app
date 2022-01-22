import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Register from ".";
import { sendOtpOnEmail } from "../../redux/auth/action";
import { IRegisterErrors, IRegisterValues } from "./RegisterInterface";

const initialState = { email: "", phone: "" };

const RegisterComponent = (props) => {
  const [registerType, setRegisterType] = useState(1); // 1 for Email and 2 for phone
  const [errors, setErrors] = useState<IRegisterErrors>(initialState);
  const [values, setValues] = useState<IRegisterValues>(initialState);

  /**
   * Handle onChange event of login page input fields
   * @param event
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
    if (!event.target.value) {
      setErrors((errors) => ({
        ...errors,
        [event.target.name]: "Above field is required.",
      }));
    }
  };

  /**
   * Form validation of login form
   */
  const formValidate = () => {
    let isValid = true;
    setErrors({});
    const fieldList = [];
    if (registerType === 1) {
      fieldList.push("email");
    } else {
      fieldList.push("phone");
    }
    for (const x of fieldList) {
      if (!values[x]) {
        isValid = false;
        setErrors((errors) => ({
          ...errors,
          [x]: "Above field is required.",
        }));
      }
    }
    return isValid;
  };

  /**
   * Handle login form submission
   */
  const handleRegisterSubmit = async () => {
    if (!formValidate()) {
      return false;
    }
    await props.sendOtpOnEmail(values);
  };

  useEffect(() => {
    setValues(initialState);
    setErrors(initialState);
  }, [registerType]);

  return (
    <Register
      handleRegisterSubmit={handleRegisterSubmit}
      handleOnChange={handleOnChange}
      setRegisterType={setRegisterType}
      registerType={registerType}
      errors={errors}
      values={values}
    />
  );
};
const mapStateToProps = (state) => {
  return state.auth;
};
const mapDispatcherToProps = {
  sendOtpOnEmail,
};

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(RegisterComponent);
