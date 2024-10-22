import React, { useState } from "react";

import Modal from "components/modal";
import Button from "components/button";

import style from "./remove-confirm-modal.module.scss";
import { useNavigate } from "react-router-dom";

const UserList = ({
  openDelModal,
  setOpenDelModal,
  data,
  className,
  onClickRemove,
}) => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <Modal
      open={openDelModal}
      handleClose={() => setOpenDelModal(false)}
      className={`${style.mainDiv} ${className}`}
    >
      <span
        className={"close"}
        style={{ position: "absolute", top: -2, right: 15 }}
        onClick={() => {
          setOpenDelModal(false);
        }}
      >
        &times;
      </span>
      <div className={style.secondDiv}>
        <p className={style.modalTitle}>Assigned Users</p>
        {data?.map((ele, index) => (
          <>
            {ele.action !== "D" && (
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <p className={style.text}> {ele?.fstNm + " " + ele?.lstNm}</p>
                <p
                  className={style.text}
                  style={{ color: "#B3261E", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    onClickRemove(index);
                  }}
                >
                  Remove
                </p>
              </div>
            )}
          </>
        ))}
      </div>
    </Modal>
  );
};

export default UserList;
