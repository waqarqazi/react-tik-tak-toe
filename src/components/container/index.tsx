/* eslint-disable react/prop-types */
import React from "react";
import style from "./container.module.scss";
type Props = {
  children?: any;
  container?: any;
};
const Container = ({ children, container }: Props) => {
  return (
    <div className={`${style.container} ${container}`} id="container">
      {children}
    </div>
  );
};
export default Container;
