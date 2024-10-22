/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useController } from "react-hook-form";
import AvatarEditor from "react-avatar-editor";

import Button from "components/button";

import CrossIcon from "assets/icons/cross-icon.svg";

import upload from "assets/icons/upload.svg";
import GalleryIcon from "assets/images/gallery-icon.svg";
import placeholder from "assets/icons/image-placeholder.svg";
import editIcon from "assets/images/Edit.svg";

import style from "./editAvatar.module.scss";
import TextArea from "components/textarea";
import TextInputModal from "components/text-input-modal/text-input-modal";
import DeleteModal from "components/delete-modal";
import { showImageInNewWindow } from "utils/helpers";
import { downloadFile, viewFile } from "services/global";
import TextField from "components/textfield";
import SelectBoxForm from "components/select-box-form";

function MultiDocUpload({
  control,
  name,
  initials,
  hideIcon,
  showCancel,
  setImages,
  images,
  register,
  windowSize,
}) {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  });
  const ref = useRef();
  const [imageCrop, setimageCrop] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [file, setFile] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [indexNote, setIndexNote] = useState();
  const [openDelModal, setOpenDelModal] = useState(false);
  const [delIndex, setDelIndex] = useState();
  const [docType, setDocType] = useState(docOptions[0]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (e) => {
      setFile(e[0]);
    },
    accept: {
      "image/*": [],
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDownload = async (docRef, docName) => {
    console.log("docRef", docRef);
    try {
      const result = await downloadFile({
        metaData: {
          reqType: "OBJ_SEARCH",
          reqtId: null,
          reqTransId: "1E23118",
          clientId: "LT",
        },
        data: {
          docRef: docRef,
        },
      });
      console.log("result==>", result.data.data);
      viewFileApi(result?.data?.data?.docRef, docName);
      // const headers = new Headers({
      //   Authorization: `Bearer ${authToken}`,
      // });
      // window.open(
      //   `http://192.168.1.246:8081/secure/api/doc/downloadFile/${result?.data?.data?.docRef}`,
      //   "_blank",
      //   headers
      // );
    } catch (e) {
      console.log("error", e);
    }
  };
  const viewFileApi = async (docRef, docName) => {
    try {
      const result = await viewFile({
        metaData: {
          reqType: "OBJ_SEARCH",
          reqtId: null,
          reqTransId: "1E23118",
          clientId: "LT",
        },
        data: {
          docRef: docRef,
        },
      });
      console.log("result", result.data.data);
      // window.open(result.data.data.encData, "_blank");
      showImageInNewWindow(result.data.data.encData, docName);
    } catch (e) {
      console.log("error", e);
    }
  };
  const handleInputSubmit = (input) => {
    const updatedImages = [...images];
    if (updatedImages[indexNote].docRef) {
      updatedImages[indexNote] = {
        ...updatedImages[indexNote],
        remarks: input,
        action: "A",
      };
      setImages(updatedImages);
    } else {
      const updatedImages = [...images];
      updatedImages[indexNote] = {
        ...updatedImages[indexNote],
        remarks: input,
      };
      setImages(updatedImages);
    }
  };

  const saveCropImage = () => {
    const canvas = ref.current.getImage().toDataURL();
    console.log("canvas", canvas);
    console.log("file", file.type);
    let base64 = canvas.split(",")[1];
    console.log("base64", base64);
    let type = file.type.split("/")[1];
    console.log("type", type);
    let data = {
      docName: file.name,
      type: type,
      encData: base64,
      remarks: remarks,
      action: "N",
    };

    const updatedArray = [...images, data];

    // Update the state variable with the new concatenated array
    setImages(updatedArray);

    onChange(canvas);
    setimageCrop(false);
    setFile(false);
  };

  const deleteDetail = () => {
    const updatedImages = images
      .map((item, currentIndex) => {
        if (item?.docRef) {
          if (currentIndex === delIndex) {
            // Update item at the specified delIndex with action: "D"
            return { ...item, action: "D" };
          }
          // Keep other items unchanged
          return item;
        } else if (currentIndex === delIndex) {
          // Delete item at the specified delIndex
          return null;
        }
        // Keep other items unchanged
        return item;
      })
      .filter((item) => item !== null);
    setImages(updatedImages);
    // else {
    //   const updatedItems = [...images]; // Create a copy of the original array
    //   updatedItems.splice(currentIndex, 1); // Remove the item at the specified index
    //   setImages(updatedItems); // Update the state with the new list
    // }
    setOpenDelModal(false);
  };
  console.log("notee", images[indexNote]?.remarks);
  return (
    <div style={{ marginTop: 15 }}>
      <DeleteModal
        openDelModal={openDelModal}
        setOpenDelModal={setOpenDelModal}
        delText={"Are you sure you want to delete this record?"}
        paraText={"This action cannot be undone"}
        btnTextL={"Cancel"}
        btnTextR={"Delete"}
        handleClickR={() => {
          deleteDetail();
        }}
      />

      <TextInputModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={handleInputSubmit}
        value={images[indexNote]?.remarks}
      />
      <div
        onClick={() => {
          setimageCrop(true);
        }}
        className={style.avatarWrapper}
      ></div>

      {!file ? (
        <>
          <div className={style.uploadDiv} {...(!file && getRootProps())}>
            <img
              src={upload}
              height={50}
              width={50}
              style={{ marginBottom: 17 }}
            />
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#000000",
                cursor: "pointer",
                marginTop: -10,
              }}
            >
              Upload Attachment
            </p>
            <input {...getInputProps()} />
            <h4 className={style.uploadText}>
              Drag & drop your attachments such as images,
              <br /> document, audio file or videos
            </h4>
          </div>
          <div className={style.line} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#000000",
                  cursor: "pointer",
                }}
              >
                Upload Files from Library
              </p>
              <h4 className={style.textDetailsLibrary}>
                Select 'Add from Library' to access and upload larger files
                directly from your library.
              </h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Button
                //  iconStart={edit}
                text="Add from Library"
                // handleClick={() => alert("hii")}
                disabled={true}
                btnClass={style.btnClass}
              />
            </div>
          </div>
          {images.length > 0 && (
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#39695b",
                cursor: "pointer",
                paddingTop: 16,
                paddingBottom: 16,
              }}
            >
              Uploaded Files
            </p>
          )}

          <div className={style.listView}>
            {images.map((ele, index) => (
              <>
                {ele?.action !== "D" && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "7px",
                      width: "60%",
                    }}
                  >
                    {ele.encData ? (
                      <img
                        src={"data:image/png;base64," + ele.encData}
                        alt="image"
                        style={{ width: 40, height: 25 }}
                      />
                    ) : (
                      <img
                        onClick={() =>
                          handleDownload(ele?.docRef, ele?.docName)
                        }
                        src={GalleryIcon}
                        alt="image"
                        style={{ width: 40, height: 35, cursor: "pointer" }}
                      />
                    )}
                    <p
                      style={{
                        fontSize: 12,
                        color: "#484A54",
                        cursor: "pointer",
                        maxWidth: "140px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        textAlign: "left",
                        width: 200,
                      }}
                    >
                      {ele.docName}
                    </p>
                    <div
                      style={{
                        width: "100px",

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          textDecoration: "underline",
                          color: "#2F80ED",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          openModal();
                          setIndexNote(index);
                        }}
                      >
                        {ele.remarks ? "Edit Note" : "Add Note"}
                      </p>
                      <img
                        src={CrossIcon}
                        alt="image"
                        style={{ width: 35, height: 20 }}
                        onClick={() => {
                          setDelIndex(index);
                          setOpenDelModal(true);
                        }}
                      />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          {file && (
            <>
              <div className={style.textField}>
                <AvatarEditor
                  ref={ref}
                  image={file}
                  width={50}
                  height={50}
                  border={0}
                  disableHiDPIScaling={false}

                  //  borderRadius={200}
                  // color={[0, 0, 0, 0.6]} // RGBA
                  // scale={zoom}
                  // crossOrigin={"anonymous"}
                  // rotate={0}
                />
                <TextField
                  label={"Document Name"}
                  placeholder="Document Name"
                  name={"nm"}
                  register={register}
                  className={style.field}
                  //   label="Search"
                />
                <SelectBoxForm
                  label={"Document Type"}
                  dynamicClass={style.dropDownTop}
                  width={windowSize.width < 1033 ? 80 : 250}
                  placeholder={"Select"}
                  options={docOptions}
                  register={register}
                  control={control}
                  name={"activeType"}
                  value={docType}
                  onChange={(ele) => setDocType(ele)}
                  //    errorMessage={errors?.activeType?.message}
                />
              </div>
              <div className={style.rowBtn}>
                <Button
                  handleClick={() => {
                    setimageCrop(false);
                    setFile(false);
                  }}
                  text="Cancel"
                  width={70}
                  type={"reset"}
                  btnClass={style.btnClassLined}
                />
                <Button
                  handleClick={saveCropImage}
                  text="Save"
                  disabled={!file}
                  className={style.uploadBtn}
                  width={70}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default MultiDocUpload;
const docOptions = [
  { value: "Passport", label: "Passport" },
  { value: "Id", label: "Id" },
  { value: "License", label: "License" },
];
