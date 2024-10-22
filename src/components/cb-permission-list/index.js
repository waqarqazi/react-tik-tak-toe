import React from "react";
import { Link } from "react-router-dom";

import Button from "components/button";

import plusIcon from "assets/images/whiteAddIcon.svg";
import search from "assets/icons/no-record.svg";
import style from "./cb-officer.module.scss";
import ThreeDotMenu from "components/three-dot-menu";

const CbPermissionList = ({
  data,
  setMembersPermission,
  handleClickSave,
  setShowModal,
}) => {
  const dropData = [
    { label: "Select All", value: "select" },
    { label: "Clear All", value: "clear" },
  ];
  const handleCheckboxChange = (e, officer, permission) => {
    const updatedData = data.map((ele) => {
      if (ele.userCd === officer.userCd) {
        // Update the specific permission for the officer
        const updatedPermission = e.target.checked ? "Y" : "N";

        // Check if ele.src is "api" and the permission is being modified
        if (ele.src === "api" && ele[permission] !== updatedPermission) {
          // If src is "api" and permission is modified, update action to "M"
          return { ...ele, [permission]: updatedPermission, action: "M" };
        } else {
          return { ...ele, [permission]: updatedPermission };
        }
      }
      return ele;
    });

    // Update the state or pass the updatedData to a parent component
    setMembersPermission(updatedData);
    console.log("DataUpdated", updatedData);
  };

  return (
    <div class={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th className={style.thStyle}>
              <span>Member</span>
            </th>
            <th className={style.thStyle2}>View</th>
            <th className={style.thStyle2}>Amend</th>
            <th className={style.thStyle2}>Assign</th>
            <th className={style.thStyle2}>Approve</th>
            <th className={style.thStyle2}>Owner</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ele, index) => (
            <tr key={index}>
              <td style={{ fontSize: 14 }}>{ele.name}</td>
              <td className={style.cb}>
                <div className={style.cbDiv}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, ele, "view")}
                    checked={ele.view == "N" ? false : true}
                  />
                </div>
              </td>
              <td className={style.cb}>
                <div className={style.cbDiv}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, ele, "amnd")}
                    checked={ele.amnd == "N" ? false : true}
                  />
                </div>
              </td>
              <td className={style.cb}>
                <div className={style.cbDiv}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, ele, "asgn")}
                    checked={ele.asgn == "N" ? false : true}
                  />
                </div>
              </td>
              <td className={style.cb}>
                <div className={style.cbDiv}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, ele, "aprv")}
                    checked={ele.aprv == "N" ? false : true}
                  />
                </div>
              </td>
              {console.log("owner", ele.owner)}
              <td className={style.cb}>
                <div className={style.cbDiv}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, ele, "owner")}
                    checked={ele.owner == "N" ? false : true}
                  />
                </div>
              </td>
              <td>
                {console.log("index", index)}
                <ThreeDotMenu
                  dropData={dropData}
                  onOptionSelect={(option, value) => {
                    console.log("option", option);
                    console.log("data", data);
                    console.log("ele", ele);
                    if (option == "select") {
                      const fData = data.map((item) => {
                        console.log("item", item);
                        if (ele.userCd == item.userCd) {
                          return {
                            ...item,
                            view: "Y",
                            amnd: "Y",
                            aprv: "Y",
                            asgn: "Y",
                            owner: "Y",
                            action: "M",
                          };
                        } else {
                          return {
                            ...item,
                          };
                        }
                      });
                      console.log("fData", fData);
                      setMembersPermission(fData);
                    } else {
                      const fData = data.map((item) => {
                        console.log("item", item);
                        if (ele.userCd == item.userCd) {
                          return {
                            ...item,
                            view: "N",
                            amnd: "N",
                            aprv: "N",
                            asgn: "N",
                            owner: "N",
                            action: "M",
                          };
                        } else {
                          return {
                            ...item,
                          };
                        }
                      });
                      console.log("fData", fData);
                      setMembersPermission(fData);
                    }
                    // if (option == "select") {
                    //   let arr = [];
                    //   data[index].map((ele) => {
                    //     console.log("ele", ele);
                    //     arr[index].push({
                    //       name: ele.fstNm + " " + ele.lstNm,
                    //       userCd: ele?.userCd,
                    //       view: "Y",
                    //       amnd: "Y",
                    //       aprv: "Y",
                    //       asgn: "Y",
                    //       owner: "Y",
                    //       action: ele.action,
                    //       src: ele.api,
                    //     });
                    //   });
                    //   setMembersPermission(arr);
                    // }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          display: "flex",
          width: "96%",
          flexDirection: "row",
        }}
      >
        <Button
          //  iconStart={edit}
          text="Cancel"
          type={"reset"}
          handleClick={() => setShowModal(false)}
          btnClass={style.btnClass}
        />
        <Button
          //  iconStart={edit}
          text="Save"
          handleClick={handleClickSave}
          btnClass={style.btnClass2}
        />
      </div> */}
    </div>
  );
};

export default CbPermissionList;
