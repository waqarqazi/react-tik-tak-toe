import React from "react";
import { Link } from "react-router-dom";

import Container from "components/container";

import logo from "assets/images/logo.svg";

import style from "./attorney-menu.module.scss";

const AttorneyMenu = () => {
  return (
    <>
      <div className={style.wraper}>
        <Container>
          <div className={style.menuBar}>
            <div className={style.logoImg}>
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
                  to="/attorneyForm"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom:
                        location.pathname === "/attorneyForm"
                          ? "1px solid #304059"
                          : "",
                    }}
                  >
                    <span
                      style={{
                        color:
                          location.pathname === "/attorneyForm"
                            ? "#304059"
                            : "",
                      }}
                    >
                      Attorney Profile
                    </span>
                  </div>
                </Link>
                <Link
                  to="/barhistoryForm"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom: location.pathname.includes(
                        "/barhistoryForm"
                      )
                        ? "1px solid #39695B"
                        : "",
                    }}
                  >
                    <span
                      style={{
                        color: location.pathname.includes("/barhistoryForm")
                          ? "#39695B"
                          : "",
                      }}
                    >
                      Bar History{" "}
                    </span>{" "}
                  </div>
                </Link>
                <Link
                  to="/trainingHistoryForm"
                  style={{ textDecoration: "none", color: "#304059" }}
                >
                  <div
                    className={style.innerDiv}
                    style={{
                      borderBottom:
                        location.pathname === "/trainingHistoryForm"
                          ? "1px solid #A93E71"
                          : "",
                      color:
                        location.pathname === "/trainingHistoryForm"
                          ? "#A93E71"
                          : "",
                    }}
                  >
                    <span
                      style={{
                        color:
                          location.pathname === "/trainingHistoryForm"
                            ? "#A93E71"
                            : "",
                      }}
                    >
                      Training History{" "}
                    </span>{" "}
                  </div>
                </Link>
              </>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AttorneyMenu;
