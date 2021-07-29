import React from "react";
import { useSelector } from "react-redux";
import styles from "./PreviewContainer.module.scss";
import Card from "@Components/HCard/Preview/Card/Card";
const PreviewContainer = () => {
  const userProfile = useSelector((state) => state);
  return (
    <div className={styles["preview-container"]}>
      <Card title={"HCARD PREVIEW"} userProfile={userProfile}></Card>
    </div>
  );
};

export default PreviewContainer;
