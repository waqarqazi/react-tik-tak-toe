/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import style from "./card-view.module.scss";

const PriorityCardView = ({
  img,
  topText,
  topCount,

  className,
  data,

  propStyle,
  gridStyle,
}) => {
  const options = {
    title: topText,
  };
  console.log("data", data);
  const [datChart, setDatChart] = useState([]);

  useEffect(() => {
    let dataChart = [["Task", "Hours per Day"]];
    data?.map((ele) => {
      console.log("ele", ele);
      dataChart.push([ele.type + " " + ele.count, ele.count]);
    });
    setDatChart(dataChart);
  }, [data, setDatChart]);

  return (
    <div className={`${style.attorneyDiv} ${className}`}>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className={style.topDiv}>
          <img src={img} alt="" width={25} height={25} />
          <p className={style.text} style={propStyle}>
            {topText}
          </p>
        </div>
      </div>
      <div className={style.topDiv}>
        <Chart
          chartType="PieChart"
          data={datChart}
          //  width={"100%"}
          height={"230px"}
          headerHeight={"10px"}
        />
      </div>
    </div>
  );
};

export default PriorityCardView;
