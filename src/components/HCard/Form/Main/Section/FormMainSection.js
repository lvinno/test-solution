import React from "react";

import styles from "./FormMainSection.module.scss";
const FormMainSection = (props) => {
  return (
    <div className={styles["form-main-section-wrapper"]}>
      {props.title && (
        <div className={styles["form-main-section-title"]}>{props.title}</div>
      )}
      <div className={styles["section-input-row"]}>{props.children}</div>
    </div>
  );
};

export default FormMainSection;
