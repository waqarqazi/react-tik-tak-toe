import React from "react";
import style from "./checkbox.module.scss";

const Checkbox = ({
  id,
  name,
  label,
  checked,
  register,
  className,
  handleChange,
  errorMessage,
  readOnly,
  containerClass,
}) => {
  return (
    <div>
      <label
        className={`${style.container} ${containerClass || ""}`}
        htmlFor={id}
        style={{ color: errorMessage ? "#ff5050" : "" }}
      >
        {label}
        <input
          name={name}
          type="checkbox"
          id={id}
          readOnly={readOnly && readOnly}
          onChange={handleChange}
          // {...(register && register(name))}
          checked={checked && checked}
        />
        <span
          className={`${style.checkMark} ${className}`}
          style={{ borderColor: errorMessage ? "#ff5050" : "" }}
        ></span>
      </label>
    </div>
  );
};

export default Checkbox;
