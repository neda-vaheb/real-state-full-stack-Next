import Profile from "@/models/profile";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const profile = await Profile.find({ published: true }).select("-userId");
    return NextResponse.json(
      {
        data: profile,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      categories,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(req);
    console.log(session);
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
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !categories
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      categories,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);

    return NextResponse.json(
      { message: "آگهی در انتظار تایید ادمین سایت قرار گرفت " },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      categories,
      amenities,
      rules,
    } = await req.json();

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
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !categories
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        {
          error: "دستری شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.categories = categories;
    profile.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
