import React from "react";
import CrossTag from "assets/icons/crossTag.svg";
import CrossTagBlack from "assets/icons/crossTagBlack.svg";
import style from "./tags.module.scss";

const Tags = ({ circular, color, text, cross, number }) => {
  function getColorByLevel(text) {
    const colorKey = Object.keys(color).find((level) => level === text);
    return colorKey ? color[colorKey] : undefined;
  }
  return (
    <>
      {circular ? (
        <div
          className={style.main}
          style={{ backgroundColor: color, borderRadius: 32 }}
        >
          <div className={style.text} style={{ color: "black" }}>
            {text}
          </div>

          {cross ? (
            <img
              src={CrossTagBlack}
              height={6}
              width={6}
              onClick={() => alert("closed")}
            />
          ) : null}
        </div>
      ) : (
        <div
          className={style.main}
          style={{ backgroundColor: getColorByLevel(text) }}
        >
          {number ? (
            <>
              <div className={style.text} style={{ marginRight: "5px" }}>
                {number}
              </div>
              <div className={style.text}>Selected</div>
            </>
          ) : (
            <div
              className={style.text}
              style={{ color: text == "Low" ? "#484A54" : "white" }}
            >
              {text}
            </div>
          )}
          {cross ? (
            <img
              src={CrossTag}
              height={6}
              width={6}
              onClick={() => alert("closed")}
            />
          ) : null}
        </div>
      )}
    </>
  );
};
export default Tags;
