/* eslint-disable no-undef */
import React, { useState } from "react";

import style from "./card-view.module.scss";
import dropIcon from "assets/icons/drop-icon.svg";
import upIcon from "assets/icons/up-icon.svg";
import Button from "components/button";
import moment from "moment";

const DropCard = ({ byText, data }) => {
  const [extDetails, setExtDetails] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #DBDEEE",
          marginBottom: 10,
        }}
        onClick={() => setExtDetails(!extDetails)}
      >
        <span className={style.heading}>
          {data?.cd} - {data?.name}
        </span>
        <img
          src={extDetails ? upIcon : dropIcon}
          alt=""
          style={{ width: 10, height: 10 }}
        />
      </div>
      {extDetails && (
        <div style={{ paddingRight: 10, paddingLeft: 10 }}>
          <div className={style.detailDiv}>
            <div className={style.titleDiv}>
              <p className={style.titleText}>Code</p>
              <p className={style.colText}>:</p>
            </div>
            <p className={style.titleDecText}> {data?.cd}</p>
          </div>
          <div className={style.detailDiv}>
            <div className={style.titleDiv}>
              <p className={style.titleText}>Name</p>
              <p className={style.colText}>:</p>
            </div>
            <p className={style.titleDecText}> {data?.name}</p>
          </div>
          <div className={style.detailDiv}>
            <div className={style.titleDiv}>
              <p className={style.titleText}>Description</p>
              <p className={style.colText}>:</p>
            </div>
            <p className={style.titleDecText}>{data?.description}</p>
          </div>
          {/* <div className={style.detailDiv}>
            <div className={style.titleDiv}>
              <p className={style.titleText}>Assigned To</p>
              <p className={style.colText}>:</p>
            </div>
            <p className={style.titleDecText}>{data?.owner}</p>
          </div> */}
          <div className={style.detailDiv}>
            <div className={style.titleDiv}>
              <p className={style.titleText}>Created On</p>
              <p className={style.colText}>:</p>
            </div>
            <p className={style.titleDecText}>
              {data?.crdtDt ? moment(data?.crdtDt).format("DD MMM, YYYY") : "-"}
            </p>
          </div>
          <div className={style.detailDiv}>
            <div className={style.titleDiv}>
              <p className={style.titleText}>
                {byText ? byText : "Created By"}
              </p>
              <p className={style.colText}>:</p>
            </div>
            <p className={style.titleDecText}>{data?.regBy}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DropCard;
