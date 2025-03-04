import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CustomInput = ({
  label,
  type = "text",
  name,
  password,
  mobile,
  text,
  error,
  onFocus = () => {},
  ...props
}) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(!!password);

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <div
          className={`input-cont ${error ? "error" : isFocus ? "focused" : ""}`}
        >
          <input
            type={hidePassword ? "password" : type}
            name={name}
            autoComplete="off"
            placeholder={props.placeholder}
            onFocus={(e) => {
              onFocus(e);
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            className="text-input"
            {...props}
          />
          {password && (
            <div
              className="toggle-password"
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          )}
        </div>
      </div>
      {password && text && (
        <p className="helper-text">
          Minimum 8 characters, must include a number and special character
        </p>
      )}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default CustomInput;
