import React, { useState } from "react";

import Modal from "components/modal";
import Button from "components/button";

import style from "./remove-confirm-modal.module.scss";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({
  openDelModal,
  setOpenDelModal,
  del,
  className,
  handleClickR,

  delText,
  paraText,
  btnTextL,
  btnTextR,
  handleClick,
  delPink,
  color,
}) => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <Modal
      open={openDelModal}
      handleClose={() => setOpenDelModal(false)}
      className={`${style.mainDiv} ${className}`}
    >
      {/* <div className={style.iconRefresh}>
        <img src={del} alt="" />
      </div> */}
      {delText && <p className={`${style.modalTitle} ${color}`}>{delText}</p>}
      <p className={`${style.modalTitle2} ${color}`}>{paraText}</p>

      <div className={style.lastTwoBtn}>
        <Button
          //  iconStart={edit}
          text={btnTextL}
          // type={"reset"}
          handleClick={() => {
            setOpenDelModal(false);
          }}
          btnClass={style.btnClass}
        />
        <Button
          //  iconStart={edit}
          handleClick={handleClickR}
          text={btnTextR}
          // type={"submit"}
          btnClass={style.btnClass1}
        />
      </div>
    </Modal>
  );
};

export default DeleteModal;
