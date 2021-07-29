import React from "react";

import FormContainer from "@/components/HCard/Form/FormContainer";
import PreviewContainer from "@/components/HCard/Preview/PreviewContainer";

import styles from "./Wrapper.module.scss";
const HCardWrapper = () => {
  return (
    <div className={styles["hcard-wrapper"]}>
      <div className={styles["hcard-left"]}>
        <FormContainer></FormContainer>
      </div>
      <div className={styles["hcard-right"]}>
        <PreviewContainer></PreviewContainer>
      </div>
    </div>
  );
};

export default HCardWrapper;
