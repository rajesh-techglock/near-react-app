import React from "react";

interface IInputFieldProps {
  id?: string;
  className?: string;
  name: string;
  type?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  id,
  className,
  type,
  name,
  label,
  value,
  error,
  placeholder,
  onChange,
}: IInputFieldProps) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        id={id}
        type={type ?? "text"}
        className={`${className} form-control ${error ? "is-invalid" : ""}`}
        name={name}
        placeholder={placeholder ?? ""}
        value={value ?? ""}
        onChange={onChange}
      ></input>
      {error ? <div className="invalid-feedback text-left">{error}</div> : null}
    </>
  );
};

export default InputField;
