import React from "react";

import FormHeader from "@Components/HCard/Form/Header/FormHeader";
import FormMain from "@/components/HCard/Form/Main/FormMain";
import styles from "./FormContainer.module.scss";
const FormContainer = () => {
  return (
    <div className={styles["form-container"]}>
      <FormHeader headerName={"hCard Builder"}></FormHeader>
      <FormMain></FormMain>
    </div>
  );
};

export default FormContainer;
