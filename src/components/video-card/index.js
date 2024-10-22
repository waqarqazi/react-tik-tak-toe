/* eslint-disable no-undef */
import React from "react";

import style from "./video-card.module.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";
const VideoCard = ({ name, remarks, className, onClick, index }) => {
  return (
    <div className={`${style.attorneyDiv} ${className}`}>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={style.topDiv}>
          <img
            className={style.coverImage}
            onClick={onClick}
            // src={img}
            src={"https://reactnative.dev/img/tiny_logo.png"}
            alt=""

            //  style={{ position: "absolute" }}
          />
          <p className={style.text}>{name}</p>
        </div>
      </div>
      {remarks && (
        <div className={style.yellowBox}>
          <p
            className={style.yText}
            {...(remarks && remarks.length > 20
              ? { "data-tooltip-id": "my-tooltip-img-text" + index }
              : {})}
          >
            {remarks
              ? remarks.length > 20
                ? remarks.substring(0, 20) + "..."
                : remarks
              : "-"}
          </p>
        </div>
      )}
      <ReactTooltip
        id={"my-tooltip-img-text" + index}
        place="bottom"
        variant="info"
        style={{ width: "400px", zIndex: 5000 }}
        content={remarks}
      />
    </div>
  );
};

export default VideoCard;
