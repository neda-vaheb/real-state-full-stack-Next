import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import User from "@/models/user";
import next from "next";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد نمایید" },
        { status: 422 }
      );
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "این حساب کاربری وجود دارد",
        },
        { status: 422 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    return NextResponse.json(
      {
        message: "حساب کاربری با موفقیت ایجاد شد ",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: " مشکلی در سرور رخ داده   ",
      },
      {
        status: 500,
      }
    );
  }
}
