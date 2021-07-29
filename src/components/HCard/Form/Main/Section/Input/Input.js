import React from "react";

import styles from "./Input.module.scss";
const Input = React.forwardRef(
  ({ onChange, onBlur, name, label, errors }, ref) => {
    return (
      <div className={styles["input-wrapper"]}>
        <label className={styles["input-label"]} htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          ref={ref}
          name={name}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span data-testid="error">{errors && `${label} is invalid`}</span>
      </div>
    );
  }
);

export default Input;
