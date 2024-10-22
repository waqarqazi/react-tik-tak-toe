/* eslint-disable no-undef */
import React from "react";

import style from "./card-view.module.scss";

const CardViewCountry = ({
  img,
  topText,
  className,
  bottomText,
  propStyle,
  pVal2,
  onClick,
  bgColor,
}) => {
  return (
    <div
      style={{ background: bgColor }}
      className={`${style.attorneyDiv} ${className}`}
      onClick={onClick}
    >
      <div className={style.topDiv}>
        <div
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className={style.text} style={propStyle}>
            {topText}
          </p>
          {pVal2 && <p className={style.pvText}>{pVal2}</p>}
        </div>
      </div>

      {bottomText && (
        <p className={style.bottomText}>Last updated: {bottomText}</p>
      )}
      <img
        src={img}
        alt=""
        width={40}
        height={40}
        className={style.bottomRightImage}
      />
    </div>
  );
};

export default CardViewCountry;
