import React, { useEffect, useState } from "react";

import Modal from "components/modal";
import Button from "components/button";
import TickIcon from "assets/icons/circular-tick.svg";
import style from "./success-modal.module.scss";
import TextField from "components/textfield";
import TextArea from "components/textarea";
import Checkbox from "components/checkbox";
import { useForm } from "react-hook-form";
import AddIcon from "assets/icons/add-icon.svg";
import SelectBoxForm from "components/select-box-form";
import { assignOfficerBasic } from "services/plan-management";

const AssignOfficerModal = ({
  showModal,
  setShowModal,
  className,
  title,
  delPink,
  setOfficer,
  officer,
}) => {
  const [searchType, setSearchType] = useState(OFFICER_DATA[0]);
  const [searchText, setSearchText] = useState("");
  const [officerDetails, setOfficerDetails] = useState([]);
  // const [officer, setOfficer] = useState([]);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  // useEffect(() => {
  //   setRows([...dataSource]);
  // }, [dataSource]);
  const onSubmit = async () => {
    console.log("searchText", searchText);

    try {
      const result = await assignOfficerBasic({
        metaData: {
          reqType: "DOCTYPE_ADD",
          reqtId: null,
          reqTransId: "1E23118",
          clientId: "LT",
        },
        data: {
          userCd: searchText,
        },
      });
      console.log("resultao", result.data);
      // if (result?.data?.data) {
      //   console.log("res", result?.data?.data);
      //   setOfficerDetails(result?.data?.data);
      //   // setTaskCode(result?.data?.data?.cd);
      // }
      // Concatenate and remove duplicates
      const updatedOfficerDetails = [
        ...officerDetails,
        ...result?.data?.data.filter(
          (newDetail) =>
            !officerDetails.some(
              (existingDetail) => existingDetail.userCd === newDetail.userCd
            )
        ),
      ];

      // Set the updated officerDetails array
      setOfficerDetails(updatedOfficerDetails);
    } catch (e) {
      console.log("error", e);
    }
  };
  console.log("offDetail", officerDetails);
  const onAddOfficer = () => {
    setOfficer(officer);
    setShowModal(false);
  };
  const handleCheckboxChange = (item) => {
    console.log("item", item);
    console.log("ooooof", officer);
    const isSelected = officer.some(
      (selected) => selected.userCd === item.userCd
    );

    if (isSelected) {
      setOfficer(officer.filter((selected) => item.userCd !== selected.userCd));
    } else {
      setOfficer([...officer, item]);
    }
  };
  return (
    <Modal
      open={showModal}
      handleClose={() => setShowModal(false)}
      className={`${style.mainDiv} ${className}`}
    >
      <span
        className={"close"}
        onClick={() => {
          setOfficerDetails([]);
          setShowModal(false);
        }}
      >
        &times;
      </span>
      {title && (
        <h6 style={{ color: delPink ? `${delPink}` : "", textAlign: "left" }}>
          {title}
        </h6>
      )}

      <div className={style.fielddropdown}>
        <SelectBoxForm
          // label={"Drop Down"}
          dynamicClass={style.styLoc}
          placeholder={"Select"}
          options={OFFICER_DATA}
          value={searchType}
          control={control}
          name={"location"}
          width={200}
          onChange={(ele) => setSearchType(ele)}
        />
        <TextField
          placeholder={"Enter Officer " + searchType.label}
          // name={"nm"}
          // register={register}
          className={style.field}
          onChange={(e) => setSearchText(e.target.value)}
          //   label="Search"
        />
        <Button
          text="Look-Up"
          handleClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          type={"submit"}
          disabled={isSubmitting}
          btnClass={style.btnClassSearch}
        />
      </div>
      {officerDetails.length > 0 && (
        <>
          {" "}
          <div className={style.offListMain}>
            {officerDetails?.map((ele) => (
              <div className={style.offList} key={ele.id}>
                <Checkbox
                  checked={officer.some(
                    (selected) => selected.userCd === ele.userCd
                  )}
                  handleChange={() => handleCheckboxChange(ele)}
                />
                <span>{`${ele?.userCd}`}</span>
                <span>{`${ele?.fstNm} ${ele?.lstNm}`}</span>
              </div>
            ))}
          </div>
        </>
      )}
      {!officerDetails.length > 0 && (
        <div
          style={{
            width: "100%",
            marginTop: "100px",
            height: "1px",
            backgroundColor: "#A6A8B1",
          }}
        />
      )}

      <div className={style.lastTwoBtn}>
        <div
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Button
            //  iconStart={edit}
            text="Cancel"
            type={"reset"}
            handleClick={() => {
              setShowModal(false);
              setOfficerDetails([]);
            }}
            btnClass={style.btnClass}
          />
          <Button
            //  iconStart={edit}
            disabled={officer.length === 0}
            handleClick={(e) => {
              e.preventDefault();
              onAddOfficer();
            }}
            text="Add"
            btnClass={
              officerDetails.length > 0 ? style.btnClass1 : style.AddBtnDisabled
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default AssignOfficerModal;
const OFFICER_DATA = ["Code", "Name", "Email", "Phone"].map((state) => ({
  label: state,
  value: state,
}));
