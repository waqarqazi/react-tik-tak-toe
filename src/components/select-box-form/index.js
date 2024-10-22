// eslint-disable-next-line no-unused-vars
import React from "react";
import chroma from "chroma-js";
import Select from "react-select";
import { Controller } from "react-hook-form";

import Tags from "./../tags/index";

import style from "./box.module.scss";

const formatOptionLabel = (
  { label, value, color, checkbox, box },
  { context, selectValue },
  badge
) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        {checkbox && context !== "value" && (
          <input
            checked={selectValue.find((e) => e.value == value)}
            type={"checkbox"}
            style={{ marginRight: "5px" }}
          />
        )}
        {context !== "value" && box && (
          <div
            style={{
              background: color,
              width: "13px",
              height: "13px",
              borderRadius: "2px",
              margin: "0px 5px",
            }}
          />
        )}
        {badge && context === "value" ? (
          <Tags color={color} text={label}></Tags>
        ) : (
          <div>{label}</div>
        )}
      </div>
    </>
  );
};

const SelectBoxForm = ({
  options = [],
  label,
  isMulti,
  name,
  control,
  badge,
  // numberBadgeColor,
  errorMessage,
  showNumber,
  dynamicClass,
  disabled,
  onChange,
  placeholder,
  width,
  dropDown,
  value,
}) => {
  return (
    <div className={style.wraper}>
      <label
        className={style.lbl}
        style={{ marginBottom: "20px", fontSize: 12 }}
      >
        {label}
      </label>
      <div
        className={style.selectBox}
        style={{
          border: errorMessage ? "1px solid red" : "",
          // backgroundColor: "#F4F5FA",
          width: width ? width : 350,
        }}
      >
        {control && (
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <Select
                  isMulti={isMulti}
                  formatOptionLabel={(data, metaData) =>
                    formatOptionLabel(data, metaData, badge, showNumber)
                  }
                  placeholder={placeholder}
                  hideSelectedOptions={false}
                  isClearable={false}
                  options={options}
                  styles={colourStyles}
                  className={`${style.selectClass} ${dynamicClass}`}
                  {...field}
                  isDisabled={disabled}
                  // value={
                  //   typeof field.value == "string"
                  //     ? options.find((c) => c.value === field.value)
                  //     : Array.isArray(field.value)
                  //     ? options.filter((option) =>
                  //         field.value.includes(option.value)
                  //       )
                  //     : field.value
                  // }

                  {...(value
                    ? { value: value }
                    : {
                        value:
                          typeof field.value == "string"
                            ? options.find((c) => c.value === field.value)
                            : Array.isArray(field.value)
                            ? options.filter((option) =>
                                field.value.includes(option.value)
                              )
                            : field.value,
                      })}
                  {...(onChange
                    ? { onChange: onChange }
                    : {
                        onChange: (selectedOption) => {
                          field.onChange(
                            isMulti
                              ? selectedOption.map((e) => e.value)
                              : selectedOption.value
                          );
                        },
                      })}

                  // onChange={(selectedOption) => {
                  //   field.onChange(
                  //     isMulti
                  //       ? selectedOption.map((e) => e.value)
                  //       : selectedOption.value
                  //   );
                  // }}
                />
              );
            }}
          ></Controller>
        )}
      </div>
      {errorMessage ? (
        <span className={style.errorMessage}>{errorMessage}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectBoxForm;

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    background: "transparent !important",

    // maxHeight: 41,
    // overflowY: 'scroll',
    // height: 41,
    border: "1px solid rgb(230, 231, 232) !important",
    boxShadow: "none",
    borderRadius: "6px",
    display: "flex !important",
    alignItems: "flex-start !important",
    "&:hover": {
      outline: state.isFocused ? 0 : 0,
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data?.color || "black");
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#fff"
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, data?.color || "black") > 2
          ? "white"
          : "black"
        : data?.color || "black",
      cursor: isDisabled ? "not-allowed" : "#fff",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#fff"
            : color.alpha(0.3).css()
          : "#fff",
        zIndex: "5000 !important",
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data?.color || "black");
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data?.color || "black",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data?.color || "black",

    ":hover": {
      backgroundColor: data?.color || "black",
      color: "white",
    },
  }),
};
