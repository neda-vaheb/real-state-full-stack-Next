import React from "react";

function RadioList({ profileData, setProfileData }) {
  const { categories } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className="mb-[40px]">
      <p className="mb-[15px] text-[1.1rem]">دسته بندی</p>
      <div class="categoryMain">
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="categories"
            value="villa"
            id="villa"
            checked={categories === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="categories"
            value="apartment"
            id="apartment"
            checked={categories === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="categories"
            value="store"
            id="store"
            checked={categories === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="categories"
            value="office"
            id="office"
            checked={categories === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
