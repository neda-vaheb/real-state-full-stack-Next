"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "@/module/LogoutButton";

function DsahboardSidebar({ children, role, email }) {
  return (
    <div className="flex flex-row justify-between mt-[80px]">
      <div className="w-[300px] flex flex-col items-center h-fit p-8 rounded-lg shadow-lg shadow-purple-500/30 ml-10 w-56">
        <CgProfile className="text-[3rem] text-primary" />
        {role === "ADMIN" ? "ادمین" : null}
        <p className="text-[1.1rem] text-gray-500 mt-[20px]">{email}</p>
        <span className="bg-gray-300 w-full h-[1px] mb-8"></span>
        <Link className="w-full my-[5px]" href="/dashboard">
          حساب کاربری
        </Link>
        <Link className="w-full my-[5px]" href="/dashboard/my-profiles">
          آگهی های من
        </Link>
        <Link className="w-full my-[5px]" href="/dashboard/add">
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DsahboardSidebar;
