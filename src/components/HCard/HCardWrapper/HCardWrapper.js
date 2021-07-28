import React from "react";

import Form from "@Components/HCard/Form/Form";
import Preview from "@Components/HCard/Preview/Preview";

import styles from "./Wrapper.module.scss";
const HCardWrapper = () => {
  return (
    <div className={styles["hcard-wrapper"]}>
      <div className={styles["hcard-left"]}>
        <Form></Form>
      </div>
      <div className={styles["hcard-right"]}>
        {" "}
        <Preview></Preview>
      </div>
    </div>
  );
};

export default HCardWrapper;
