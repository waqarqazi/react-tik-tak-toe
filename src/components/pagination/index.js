/* eslint-disable no-undef */
import React from "react";
import DoubleBack from "assets/images/doubleBack.svg";
import SingleBack from "assets/images/singleBack.svg";
import SingleForward from "assets/images/singleForward.svg";
import DoubleForward from "assets/images/doubleForward.svg";

import style from "./card-view.module.scss";

const PaginationComponent = ({}) => {
  return (
    <>
      <div class={style.pagination}>
        <button class={style.pageBtn}>
          <img src={DoubleBack} alt="" className={style.img1} />
        </button>
        <button class={style.pageBtn}>
          <img src={SingleBack} alt="" />
        </button>
        <button class={style.pageBtn} style={{ backgroundColor: "#2F80ED" }}>
          <span style={{ color: "#fff" }}>1</span>
        </button>
        <button class={style.pageBtn}>2</button>
        <button class={style.pageBtn}>3</button>
        <button class={style.pageBtn}>
          <img src={SingleForward} alt="" />
        </button>
        <button class={style.pageBtn}>
          <img src={DoubleForward} alt="" className={style.img1} />
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
