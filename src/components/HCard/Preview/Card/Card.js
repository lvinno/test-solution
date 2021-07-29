import React from "react";
import styles from "./Card.module.scss";

import CardTitle from "./Title/CardTitle";
import CardHeader from "./Header/CardHeader";
import CardMain from "./Main/CardMain";

const Card = ({ title, userProfile }) => {
  return (
    <div className={styles["card-wrapper"]}>
      <CardTitle title={title}></CardTitle>
      <CardHeader userProfile={userProfile}></CardHeader>
      <CardMain
        email={userProfile.email}
        phone={userProfile.phone}
        houseName={userProfile.houseName}
        street={userProfile.street}
        suburb={userProfile.suburb}
        state={userProfile.state}
        postcode={userProfile.postcode}
        country={userProfile.country}
      ></CardMain>
    </div>
  );
};

export default Card;
