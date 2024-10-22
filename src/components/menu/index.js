import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import MobileMenu from "./mobile-menu";
import Container from "components/container";

//import { setUserReduxLogout } from 'redux/auth/auth-actions';

import coloroverviewIcon from "assets/images/colorOverviewIcon.svg";
import attorneyIcon from "assets/images/Vector.svg";
import colorattorneyIcon from "assets/images/colorAttorneyIcon.svg";
import clientIcon from "assets/images/ClientVector.svg";
import colorclientIcon from "assets/images/colorClientIcon.svg";
import positionIcon from "assets/images/positionIcon.svg";
import colorpositionIcon from "assets/images/colorPositionIcon.svg";
import settingIcon from "assets/images/seetingIcon.svg";
import colorsettingIcon from "assets/images/colorSettingIcon.svg";
import menuIcon from "assets/images/greymenuicon.svg";
import overviewIcon from "assets/images/overviewIcon.svg";
import logo from "assets/images/logo.svg";
import logoutIcon from "assets/images/signout.svg";
import userIcon from "assets/images/User.svg";
import percentageIcon from "assets/images/percentageIcon.svg";

import style from "./menu.module.scss";
import useOutsideAlerter from "hooks/useOutsideAlerter";
import PermissionRestrict from "hoc/PermissionRestrict";
import { ROLES } from "permissions/constants";

const MenuBar = () => {
  const location = useLocation();
  const disptach = useDispatch();
  const navigate = useNavigate();

  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  useOutsideAlerter(ref, () => setOpenSetting(false));

  const onLogout = () => {
    try {
      //  disptach(setUserReduxLogout(null));
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={style.wraper}>
        <Container>
          <div className={style.menuBar}>
            <div className={style.logoImg} onClick={() => navigate("/")}>
              <img
                src={logo}
                alt="logo"
                width={165}
                height={47}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className={style.menuSection}>
              <>
                <Link
                  to="/overview"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom:
                        location.pathname === "/overview"
                          ? "1px solid #304059"
                          : "",
                    }}
                  >
                    <img
                      src={
                        location.pathname === "/overview"
                          ? coloroverviewIcon
                          : overviewIcon
                      }
                      className={style.menuSectionIcon}
                      width={20}
                      height={20}
                    />
                    <span
                      style={{
                        color:
                          location.pathname === "/overview" ? "#304059" : "",
                      }}
                    >
                      Overview
                    </span>{" "}
                  </div>
                </Link>
                <Link
                  to="/attorneys"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom: location.pathname.includes("/attorneys")
                        ? "1px solid #39695B"
                        : "",
                    }}
                  >
                    <img
                      src={
                        location.pathname.includes("/attorneys")
                          ? colorattorneyIcon
                          : attorneyIcon
                      }
                      className={style.menuSectionIcon}
                      width={24}
                      height={20}
                    />
                    <span
                      style={{
                        color: location.pathname.includes("/attorneys")
                          ? "#39695B"
                          : "",
                      }}
                    >
                      Attorneys{" "}
                    </span>{" "}
                  </div>
                </Link>
                <Link
                  to="/clients"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom:
                        location.pathname === "/clients"
                          ? "1px solid #A93E71"
                          : "",
                      color: location.pathname === "/clients" ? "#A93E71" : "",
                    }}
                  >
                    <img
                      src={
                        location.pathname === "/clients"
                          ? colorclientIcon
                          : clientIcon
                      }
                      className={style.menuSectionIcon}
                      width={24}
                      height={20}
                    />
                    <span
                      style={{
                        color:
                          location.pathname === "/clients" ? "#A93E71" : "",
                      }}
                    >
                      Clients{" "}
                    </span>{" "}
                  </div>
                </Link>
                <Link
                  to="/positions/5u1KnCKBXu91FtodB5Y9"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom: location.pathname.startsWith("/positions")
                        ? "1px solid #673E9B"
                        : "",
                      color: location.pathname.startsWith("/positions")
                        ? "#673E9B"
                        : "",
                    }}
                  >
                    <img
                      src={
                        location.pathname.startsWith("/positions")
                          ? colorpositionIcon
                          : positionIcon
                      }
                      className={style.menuSectionIcon}
                      width={20}
                      height={20}
                    />
                    <span
                      style={{
                        color: location.pathname.startsWith("/positions")
                          ? "#673E9B"
                          : "",
                      }}
                    >
                      Positions{" "}
                    </span>{" "}
                  </div>
                </Link>
                <div>
                  <Link
                    to="#"
                    style={{ textDecoration: "none", color: "#304059" }}
                  >
                    <div
                      className={style.innerDiv}
                      style={{
                        borderBottom:
                          (location.pathname.includes("/setting") ||
                            location.pathname.includes("/system") ||
                            location.pathname.includes("/users")) &&
                          "1px solid #304059",

                        color:
                          (location.pathname.includes("/setting") ||
                            location.pathname.includes("/system") ||
                            location.pathname.includes("/users")) &&
                          "#304059",
                      }}
                      onClick={() => setOpenSetting(!openSetting)}
                    >
                      <img
                        src={
                          location.pathname.includes("/setting") ||
                          location.pathname.includes("/system") ||
                          location.pathname.includes("/users")
                            ? colorsettingIcon
                            : settingIcon
                        }
                        className={style.menuSectionIcon}
                        width={20}
                        height={20}
                      />
                      <span
                        style={{
                          color:
                            (location.pathname.includes("/setting") ||
                              location.pathname.includes("/system") ||
                              location.pathname.includes("/users")) &&
                            "#304059",
                        }}
                      >
                        Settings{" "}
                      </span>{" "}
                    </div>
                  </Link>

                  {openSetting && (
                    <div ref={ref} className={style.settingDropDown}>
                      <PermissionRestrict roles={[ROLES.ADMIN]}>
                        <Link to="/users-management" className={style.link}>
                          <div
                            className={style.innerEle}
                            onClick={() => setOpenSetting(false)}
                          >
                            <img src={userIcon} className={style.img1} />{" "}
                            <span>Users Management</span>{" "}
                          </div>
                        </Link>

                        <Link to="/system-values" className={style.link}>
                          <div
                            className={style.innerEle}
                            onClick={() => setOpenSetting(false)}
                          >
                            <img src={percentageIcon} className={style.img2} />{" "}
                            <span>System Values</span>{" "}
                          </div>
                        </Link>
                      </PermissionRestrict>
                      <div className={style.innerEle} onClick={onLogout}>
                        <img src={logoutIcon} className={style.img2} />{" "}
                        <span>Logout</span>{" "}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <img
                    src={menuIcon}
                    width={40}
                    height={40}
                    className={style.menuIcon}
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
              </>
            </div>
          </div>
        </Container>
      </div>
      <MobileMenu toggle={toggle} onLogout={onLogout} setToggle={setToggle} />
    </>
  );
};

export default MenuBar;
