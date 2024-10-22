import React from "react";
import style from "./tags.module.scss";
import TagsInput from "react-tagsinput";
import "./react-tagsinput.css";
const TagInput = ({ setEmailTags, emailTags, width }) => {
  return (
    <div className={style.main} style={{ width: width }}>
      <TagsInput
        value={emailTags}
        onChange={(e) => setEmailTags(e)}
        inputProps={{ placeholder: "" }}
      />
    </div>
  );
};
export default TagInput;
