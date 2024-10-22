import React, { useEffect, useState } from "react";

import style from "./back.module.scss";
import BackIcon from "assets/icons/back.svg";
const BackButton = ({ onPress }) => {
  return (
    <div className={style.main} onClick={onPress}>
      <img
        src={BackIcon}
        height={15}
        width={15}
        style={{ cursor: "pointer", marginRight: 6 }}
        // onClick={(e) => {

        // }}
        //  style={{ marginBottom: 17 }}
      />
      <p className={style.all1}>Back</p>
    </div>
  );
};
export default BackButton;
