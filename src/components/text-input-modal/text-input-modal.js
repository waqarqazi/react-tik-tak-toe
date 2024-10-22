import React, { useEffect, useState } from "react";
import "./TextInputModal.css";
import TextArea from "components/textarea";
import Button from "components/button";

const TextInputModal = ({ isOpen, setIsModalOpen, onSubmit, value }) => {
  const [inputValue, setInputValue] = useState();
  const [edit, setEdit] = useState(false);
  console.log("value", value);
  const handleSubmit = () => {
    onSubmit(inputValue);
    // setInputValue("");
    setIsModalOpen(false);
  };
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          &times;
        </span>

        <h3>Edit Note</h3>
        {edit ? (
          <p>{value}</p>
        ) : (
          <>
            <TextArea
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter text..."
            />
            {/* <h3 onClick={handleSubmit}>Submit</h3>  */}
            <div
              style={{
                display: "flex",
                paddingTop: "20px",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Button
                //  iconStart={edit}
                text="Save"
                handleClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                //  btnClass={style.btnClass1}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TextInputModal;
