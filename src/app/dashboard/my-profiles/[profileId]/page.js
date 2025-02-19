import Profile from "@/models/profile";
import AddProfile from "@/template/AddProfile";
import connectDB from "@/utils/connectDB";
import React from "react";

async function Edit({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3> مشکلی پیش آمده ، لطفا دوباره امتحان کنید</h3>;
  return <AddProfile data={JSON.parse(JSON.stringify(profile))} />;
}

export default Edit;
