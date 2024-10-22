import React, { useState, useEffect, useRef } from "react";
import style from "./card-view.module.scss";
import ThreeDots from "assets/icons/threeDots.svg";

const ThreeDotMenu = ({ onOptionSelect, dropData, value }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option) => {
    onOptionSelect(option, value);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.dropdown} ref={dropdownRef}>
      <img
        src={ThreeDots}
        height={13}
        width={8}
        onClick={handleDropdownToggle}
        className={style.dotIcons}
      />
      {isDropdownVisible && (
        <div className={style.dropdownContent}>
          {dropData?.map((ele) => (
            <div
              key={ele?.value} // Add a unique key for each element
              onClick={() => handleOptionSelect(ele?.value)}
            >
              {ele?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
