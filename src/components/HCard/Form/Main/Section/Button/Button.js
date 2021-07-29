import React from "react";

import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: props.bgColor }}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
