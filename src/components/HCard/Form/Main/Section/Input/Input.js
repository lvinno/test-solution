import React from "react";

import styles from "./Input.module.scss";
const Input = React.forwardRef(({ onChange, onBlur, name, label }, ref) => {
  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["input-label"]} for={name}>
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
    </div>
  );
});

export default Input;
