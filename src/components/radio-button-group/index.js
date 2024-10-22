/* eslint-disable no-undef */
import React, { useState } from "react";

import style from "./card-view.module.scss";

const RadioButtonGroup = ({
  label,
  rbData,
  selectedValue,
  setSelectedValue,
}) => {
  console.log("rbData", rbData);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {label && (
        <label style={{ fontSize: 12 }} className={style.labl}>
          {label}
        </label>
      )}

      <div className={style.secondDiv}>
        {rbData.map((radioItem) => (
          <div
            key={radioItem.value}
            className={
              selectedValue === radioItem.value
                ? style.attorneyDivWithBorder
                : style.attorneyDiv
            }
          >
            <input
              type="radio"
              id={radioItem.value}
              value={radioItem.value}
              checked={selectedValue === radioItem.value}
              onChange={handleRadioChange}
            />
            <label htmlFor={radioItem.value} style={{ paddingLeft: "15px" }}>
              {radioItem.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
