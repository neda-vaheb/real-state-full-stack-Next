import React from "react";

function RadioList({ profileData, setProfileData }) {
  return (
    <div>
      <div>
        <label htmlFor="villa">ویلا</label>
        <input type="radio" id="villa" />
      </div>
    </div>
  );
}

export default RadioList;
