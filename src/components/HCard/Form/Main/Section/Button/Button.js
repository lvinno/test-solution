import React from "react";

import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <span
      className={styles.button}
      style={{ backgroundColor: props.bgColor }}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
};

export default Button;
