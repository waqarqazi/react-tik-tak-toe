/* eslint-disable no-undef */
import React from "react";

import style from "./card-view-status.module.scss";
import { useForm } from "react-hook-form";
import Progressbar from "components/progress-bar/progress-bar";
import SelecBox from "components/select-box";
import { DEMO_OPTIONS } from "constants/index";

const CardViewStatus = ({
  img,
  topText,
  className,
  color,
  propStyle,
  gridStyle,
  data,
}) => {
  const { control } = useForm();
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
          <img src={img} alt="" width={25} height={25} />
          <p className={style.text} style={propStyle}>
            {topText}
          </p>
        </div>
        <SelecBox options={DEMO_OPTIONS} control={control} name={"demo"} />
      </div>

      {data?.map((ele) => (
        <div className={style.gridSection}>
          <div className={style.gridView} style={gridStyle}>
            <p className={style.p1}>{ele?.type} </p>
          </div>
          <Progressbar
            bgcolor={color}
            progress={(ele?.count / 100) * 100}
            height={14}
          />
        </div>
      ))}
    </div>
  );
};

export default CardViewStatus;
