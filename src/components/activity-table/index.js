/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import style from "./card-view.module.scss";
import moment from "moment";
import { Tooltip as ReactTooltip } from "react-tooltip";
const ActivityTable = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  useEffect(() => {
    setTableData(data);
  }, [data]);
  const handleSort = (key) => {
    let direction = "asc";
    console.log("key", key);
    console.log("dir", sortConfig.direction);
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    console.log("sortedData", sortedData);
    setTableData(sortedData);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("updtDt")}>
              Date
              {sortConfig.key === "updtDt" && (
                <SortIcon direction={sortConfig.direction} />
              )}
            </th>
            <th onClick={() => handleSort("updtDt")}>
              Time
              {sortConfig.key === "updtDt" && (
                <SortIcon direction={sortConfig.direction} />
              )}
            </th>

            <th onClick={() => handleSort("edisActvtyType")}>
              Event
              {sortConfig.key === "edisActvtyType" && (
                <SortIcon direction={sortConfig.direction} />
              )}
            </th>
            <th onClick={() => handleSort("eventType")}>
              Action
              {sortConfig.key === "eventType" && (
                <SortIcon direction={sortConfig.direction} />
              )}
            </th>
            <th onClick={() => handleSort("updtUser")}>
              User
              {sortConfig.key === "updtUser" && (
                <SortIcon direction={sortConfig.direction} />
              )}
            </th>
            <th onClick={() => handleSort("notes")}>
              Notes
              {sortConfig.key === "notes" && (
                <SortIcon direction={sortConfig.direction} />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index}>
              <td>
                {row?.updtDt ? moment(row?.updtDt).format("DD MMM, YYYY") : "-"}
              </td>
              <td>
                {row?.updtDt ? moment(row?.updtDt).format("hh:mm A") : "-"}
              </td>

              <td>{row?.edisActvtyType}</td>
              <td>{row?.eventType}</td>
              <td>{row?.updtUser}</td>
              <td data-tooltip-id={"my-tooltip-" + index}>
                {row?.notes
                  ? row.notes.length > 50
                    ? row.notes.substring(0, 50) + "..."
                    : row.notes
                  : "-"}
              </td>
              <ReactTooltip
                id={"my-tooltip-" + index}
                place="bottom"
                variant="info"
                style={{ width: "400px" }}
                content={row?.notes}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SortIcon = ({ direction }) => (
  <>
    {direction === "asc" ? (
      <span style={{ color: "#8B8D97", fontSize: "12px", marginLeft: "5px" }}>
        ▲
      </span>
    ) : (
      <span
        style={{
          color: "#8B8D97",
          fontSize: "12px",
          marginLeft: "5px",
          top: "11px",
          position: "absolute",
        }}
      >
        ▼
      </span>
    )}
  </>
);

export default ActivityTable;
