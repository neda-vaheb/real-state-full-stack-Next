const { default: Profile } = require("@/models/profile");
const { default: User } = require("@/models/user");
const { default: connectDB } = require("@/utils/connectDB");
const { getServerSession } = require("next-auth");
const { NextResponse } = require("next/server");

export async function PATCH(req, context) {
  try {
    await connectDB();
    const id = context.params.profileId;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی محدود" },
        {
          status: 403,
        }
      );
    }
    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    profile.save();

    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "مشکلی در سرور پیش آمده ",
      },
      {
        status: 500,
      }
    );
  }
}
