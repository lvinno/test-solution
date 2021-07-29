import React from "react";
import styles from "./CardHeader.module.scss";

import defaultAvatar from "@Public/img/default.png";
const CardHeader = ({ userProfile }) => {
  return (
    <div className={styles["card-header-wrapper"]}>
      <div className={styles["card-header-name"]}>{`${
        userProfile.givenName || ""
      } ${userProfile.surname || ""}`}</div>
      <img
        src={userProfile.avatar || defaultAvatar}
        alt="avatar"
        data-testid="avatar-preview"
      />
    </div>
  );
};

export default CardHeader;
