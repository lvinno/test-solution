import React from "react";
import styles from "./CardTitle.module.scss";

const CardTitle = ({ title }) => {
  return <div className={styles["title"]}>{title}</div>;
};

export default CardTitle;
