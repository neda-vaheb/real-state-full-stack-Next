"use client";
import TextInput from "@/module/TextInput";
import { useState } from "react";

function AddProfile() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const submitHandler = () => {
    console.log(profileData);
  };
  return (
    <div className="flex flex-col mb-[150px]">
      <h3 className="text-xl font-normal mb-20 w-full bg-[#304ffe18] text-[#304ffe] rounded-lg p-3 px-[15px]">
        ثبت آگهی
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت (تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <button
        className="border-none bg-[#304ffe] text-white text-base rounded-[5px] transition-all ease-in duration-100 cursor-pointer p-[10px] hover:scale-105"
        onClick={submitHandler}
      >
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfile;
