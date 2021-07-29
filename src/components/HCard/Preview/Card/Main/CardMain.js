import React from "react";
import styles from "./CardMain.module.scss";

import CardInfoRow from "@Components/HCard/Preview/Card/Main/InfoRow/CardInfoRow";
const CardMain = ({
  email,
  phone,
  houseName,
  street,
  suburb,
  state,
  postcode,
  country,
}) => {
  const addressLine1 = houseName && street ? `${houseName} ${street}` : "";
  const addressLine2 = suburb && state ? `${suburb + ","} ${state}` : "";
  return (
    <div className={styles["card-main-wrapper"]}>
      <CardInfoRow fieldName={"email"} data={email}></CardInfoRow>
      <CardInfoRow fieldName={"phone"} data={phone}></CardInfoRow>
      <CardInfoRow fieldName={"address"} data={addressLine1}></CardInfoRow>
      <CardInfoRow
        fieldName={""}
        dataId={"addressLine2"}
        data={addressLine2}
      ></CardInfoRow>
      <div className={styles["card-main-bottom-row"]}>
        <CardInfoRow
          fieldName={"postcode"}
          data={postcode}
          type="short"
        ></CardInfoRow>
        <CardInfoRow
          fieldName={"country"}
          data={country}
          type="short"
        ></CardInfoRow>
      </div>
    </div>
  );
};

export default CardMain;
