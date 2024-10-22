/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import overviewIcon from "assets/images/overviewIcon.svg";
import attorneyIcon from "assets/images/Vector.svg";
import clientIcon from "assets/images/ClientVector.svg";
import positionIcon from "assets/images/positionIcon.svg";
import settingIcon from "assets/images/seetingIcon.svg";
import logoutIcon from "assets/images/signout.svg";
import userIcon from "assets/images/User.svg";
import percentageIcon from "assets/images/percentageIcon.svg";
import downIcon from "assets/icons/down.svg";

import coloroverviewIcon from "assets/images/colorOverviewIcon.svg";
import colorattorneyIcon from "assets/images/colorAttorneyIcon.svg";
import colorclientIcon from "assets/images/colorClientIcon.svg";
import colorpositionIcon from "assets/images/colorPositionIcon.svg";
import colorsettingIcon from "assets/images/colorSettingIcon.svg";

import style from "./mobileMenu.module.scss";

const MenuItem = ({ data, isActive, setToggle, onLogout }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <div
      className={style.menuItem}
      style={{
        background: openSubMenu ? "rgba(0,0,0,0.03)" : "transparent",
        paddingTop: openSubMenu ? 1 : 0,
      }}
    >
      <Link
        to={data.path}
        onClick={() => data.submenu && setOpenSubMenu((prev) => !prev)}
        className={style.menuLink}
      >
        <div
          className={`${style.innerDiv}  ${isActive ? style.activeClass : ""} `}
          style={{
            marginBottom: openSubMenu ? 10 : 30,
            ...data.getStyles(location.pathname),
          }}
          onClick={() => {
            !data.submenu && setToggle((prev) => !prev);
          }}
        >
          <img
            src={data.getIcon(location.pathname)}
            alt={`${data.text} icon`}
            className={style.menuSectionIcon}
          />
          <span style={data.getTextStyle(location.pathname)}>{data.text} </span>

          {data.submenu && (
            <img
              style={{
                transform: `translateY(-50%) ${
                  !openSubMenu ? "rotate(0deg)" : "rotate(-180deg)"
                }`,
              }}
              className={style.icon}
              src={downIcon}
            />
          )}
        </div>
      </Link>
      {data.submenu && (
        <div
          style={{
            maxHeight: openSubMenu ? 1000 : 0,
          }}
          className={style.submenu}
        >
          {data.submenu.map((link) => (
            <Link key={link.path} to={link.path} className={style.menuLink}>
              <div
                onClick={() =>
                  link.text == "Logout"
                    ? onLogout()
                    : setToggle((prev) => !prev)
                }
                className={`${style.innerDiv}`}
              >
                <img
                  alt={`${link.text} icon`}
                  className={style.menuSectionIcon}
                  src={link.icon}
                />
                <p> {link.text}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ toggle, setToggle, onLogout }) => {
  const [activeClass] = useState();

  return (
    <>
      {toggle && (
        <div className={style.wraper}>
          {menuData.map((data, index) => {
            return (
              <MenuItem
                data={data}
                key={data.text}
                setToggle={setToggle}
                onLogout={onLogout}
                isActive={activeClass === index}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default MobileMenu;

const menuData = [
  {
    getIcon: (pathname) => {
      return pathname === "/overview" ? coloroverviewIcon : overviewIcon;
    },
    text: "Overview",
    path: "/overview",
    getStyles: (pathname) => {
      return {
        borderBottom: pathname === "/overview" ? "1px solid #304059" : "",
      };
    },
    getTextStyle: (pathname) => {
      return {
        color: pathname === "/overview" ? "#304059" : "",
      };
    },
  },
  {
    getIcon: (pathname) => {
      return pathname.includes("/attorneys") ? colorattorneyIcon : attorneyIcon;
    },
    text: "Attorneys",
    path: "/attorneys",
    getStyles: (pathname) => {
      return {
        borderBottom: pathname === "/attorneys" ? "1px solid #39695B" : "",
        color: "#304059",
      };
    },
    getTextStyle: (pathname) => {
      return {
        color: pathname.includes("/attorneys") ? "#39695B" : "",
      };
    },
  },
  {
    getIcon: (pathname) => {
      return pathname === "/clients" ? colorclientIcon : clientIcon;
    },
    text: "Clients",
    path: "/clients",
    getStyles: (pathname) => {
      return {
        borderBottom: pathname === "/clients" ? "1px solid #A93E71" : "",
      };
    },
    getTextStyle: (pathname) => {
      return {
        color: pathname === "/clients" ? "#A93E71" : "",
      };
    },
  },
  {
    getIcon: (pathname) => {
      return pathname.startsWith("/positions")
        ? colorpositionIcon
        : positionIcon;
    },
    text: "Positions",
    path: "/position",
    getStyles: (pathname) => {
      return {
        borderBottom: pathname.startsWith("/positions")
          ? "1px solid #673E9B"
          : "",
      };
    },
    getTextStyle: (pathname) => {
      return {
        color: pathname.startsWith("/positions") ? "#673E9B" : "",
      };
    },
  },
  {
    getIcon: (pathname) => {
      return pathname.includes("/setting") ||
        pathname.includes("/system") ||
        pathname.includes("/users")
        ? colorsettingIcon
        : settingIcon;
    },
    text: "Settings",
    path: "#",
    getStyles: (pathname) => {
      return {
        borderBottom:
          (pathname.includes("/setting") ||
            pathname.includes("/system") ||
            pathname.includes("/users")) &&
          "1px solid #304059",
      };
    },
    getTextStyle: (pathname) => {
      return {
        color:
          (pathname.includes("/setting") ||
            pathname.includes("/system") ||
            pathname.includes("/users")) &&
          "#304059",
      };
    },
    submenu: [
      {
        icon: userIcon,
        text: "Users Management",
        path: "/users-management",
      },
      {
        icon: percentageIcon,
        text: "System Values",
        path: "/system-values",
      },
      {
        icon: logoutIcon,
        text: "Logout",
        path: "",
      },
    ],
  },
];
/* eslint-enable */
