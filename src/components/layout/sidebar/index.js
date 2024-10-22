import React, { useState } from 'react';

import leftIcon from 'assets/icons/green-arrow-left.svg';
import style from './sidebar.module.scss';

const Sidebar = ({
  setOpenSidebar,
  openSidebar,
  textNumber,
  leftIconArrow,
  activeClass,
  inactiveClass,
  sidebarLinks,
}) => {
  const [active, setActive] = useState(0);

  const handleActive = (index) => {
    setActive(index);
  };

  console.log(sidebarLinks);

  return (
    <div className={style.main}>
      <img
        src={leftIconArrow ? leftIconArrow : leftIcon}
        alt=""
        onClick={() => setOpenSidebar((prev) => !prev)}
        className={`${style.showSmall} ${
          openSidebar ? style.leftIcon : style.leftIcon2
        }`}
      />
      <img
        src={leftIconArrow ? leftIconArrow : leftIcon}
        alt=""
        onClick={() => setOpenSidebar((prev) => !prev)}
        className={`${style.hiddenSmall} ${
          openSidebar ? style.leftIcon : style.leftIcon2
        }`}
      />
      {openSidebar ? (
        <div className={style.mainSidebar}>
          <div className={style.head}>
            <p className={style.p}>Stats</p>
          </div>
          <div className={style.innerFirstDiv}>
            {sidebarLinks?.map((ele, index) => (
              <div
                key={index}
                className={`${style.inner1} ${ele.class} ${ele.class1} ${
                  active === index
                    ? `${style.active} ${activeClass}`
                    : `${style.inactive} ${inactiveClass}`
                }`}
                onClick={() => handleActive(index)}
              >
                <p className={style.p}>{ele.name}</p>
                <p className={`${style.textColor} ${textNumber}`}>
                  {ele.number}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Sidebar;
