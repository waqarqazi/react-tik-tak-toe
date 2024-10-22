import React, { useState } from "react";

import Modal from "components/modal";
import Button from "components/button";
import TickIcon from "assets/icons/circular-tick.svg";
import style from "./success-modal.module.scss";

const SuccessModal = ({
  showModal,
  setShowModal,
  del,
  className,
  btnYes,
  btnNo,
  title,
  paraText,
  btnText,
  btn1Text,
  handleClick,
  delPink,
  color,
  handleClose,
  handleClick2,
  btnText2,
  icon,
}) => {
  const [submitting, setSubmitting] = useState(false);
  return (
    <Modal
      open={showModal}
      handleClose={handleClose}
      className={`${style.mainDiv} ${className}`}
    >
      {!icon ? null : (
        <div className={style.iconRefresh}>
          <img src={TickIcon} height={65} width={65} />
        </div>
      )}

      {title && (
        <h6 style={{ color: delPink ? `${delPink}` : "", marginTop: 0 }}>
          {title}
        </h6>
      )}
      <p className={`${style.modalTitle} ${color}`}>{paraText}</p>
      <div className={style.mainBtnDiv}>
        {handleClick && (
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Button
              text={btnText}
              btnClass={`${style.btnClassModalNull} ${btnYes} `}
              className={style.btnTextColor}
              handleClick={handleClick}
              //  isLoading={submitting}
            />
          </div>
        )}
        {handleClick2 && (
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Button
              text={btnText2}
              btnClass={`${style.btnClassModal} ${btnYes} `}
              handleClick={handleClick2}
              //  isLoading={submitting}
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SuccessModal;
