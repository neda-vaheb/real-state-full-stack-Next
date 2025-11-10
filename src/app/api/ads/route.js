

import Profile from "@/models/profile";
import connectDB from "@/utils/connectDB";

export async function GET() {
  try {
    await connectDB();
    const ads = await Profile.find({});
    return Response.json(ads);
  } catch (error) {
    return Response.json({ error: "آگهی یافت نشد" }, { status: 500 });
  }
}