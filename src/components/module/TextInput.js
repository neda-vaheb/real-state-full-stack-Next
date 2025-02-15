import { p2e } from "@/utils/replaceNumber";
import React from "react";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className="container">
      <p className="text-[1.1rem] mb-[15px]">{title}</p>
      {textarea ? (
        <textarea
          className="!h-[100px]"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input name={name} value={profileData[name]} onChange={changeHandler} />
      )}
    </div>
  );
}

export default TextInput;
