"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  const { data } = useSession();
  return (
    <header className="flex flex-row justify-between item-center text-white bg-primary p-[20px] my-[20px] rounded-xl ">
      <div>
        <ul className="flex flex-row gap-[20px]">
          <li>
            <Link
              href="/"
              className=" text-[20px] hover:text-purple-300  transition transition-all ease-in-out"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/buy-residential"
              className="text-[20px] hover:text-purple-300   transition transition-all ease-in-out"
            >
              آگهی ها
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {data ? (
          <Link
            href="/dashboard"
            className="flex flex-row items-center gap-[2px] bg-white text-purple-500  py-[3px] px-[7px] rounded-[5px] transition ease-in-out delay-200 hover:bg-purple-500   hover:text-white"
          >
            <FaUserAlt />
          </Link>
        ) : (
          <Link
            href="/signin"
            className="flex flex-row items-center gap-[2px] bg-white text-purple-500  py-[3px] px-[7px] rounded-[5px] transition ease-in-out delay-200 hover:bg-purple-500   hover:text-white"
          >
            <FiLogIn />

            <span className="text-[20px]">ورود</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
