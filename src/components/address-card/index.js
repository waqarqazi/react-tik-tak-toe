/* eslint-disable no-undef */
import React from "react";

import style from "./card-view.module.scss";
import Button from "components/button";

const AddressCard = ({
  addressType,
  addressLane1,
  addressLane2,
  postalCode,
  phNumber,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #DBDEEE",
          padding: 8,
          borderRadius: 10,
          marginTop: 5,
        }}
      >
        <span className={style.heading}>{addressType} Address</span>

        <p className={style.p1}>
          {addressLane1}
          <br />
          {addressLane2}
          <br />
          Phone number: 02342323
        </p>
      </div>

      {/* <div className={style.gridView} style={gridStyle}>
        <Button
          btnClass={style.btnClassModalWithoutColor}
          className={style.btnCancelText}
          text="Cancel"
          type={"submit"}
          handleClick={() => setShowModal(false)}
          //  isLoading={submitting}
        />
      </div> */}
    </>
  );
};

export default AddressCard;
