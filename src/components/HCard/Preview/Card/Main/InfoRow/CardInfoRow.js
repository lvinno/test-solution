import React from "react";
import styles from "./CardInfoRow.module.scss";

const CardInfoRow = ({ fieldName, data, type }) => {
  return (
    <div className={styles["card-info-row"]}>
      <span className={styles["field-name"]}>{fieldName}</span>
      <div
        data-testid={`${fieldName}-display`}
        className={[
          type == "short" ? styles["field-data-short"] : styles["field-data"],
        ]}
      >
        {data}
      </div>
    </div>
  );
};

export default CardInfoRow;
