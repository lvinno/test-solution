import React from "react";
import styles from "./FormHeader.module.scss";
const FormHeader = (props) => {
  return <div className={styles["form-header"]}>{props.headerName}</div>;
};

export default FormHeader;
