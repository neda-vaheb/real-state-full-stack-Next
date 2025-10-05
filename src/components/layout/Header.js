"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const path = usePathname();
  const { data } = useSession();

  // بررسی موقعیت اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={clsx(
    "z-50 top-0 transition-colors duration-300 w-full ",
    {
      // کلاس‌هایی که وقتی sticky، مسیر غیر "/" یا منو نمایش داده شده، اعمال می‌شن
      "bg-primary/35 sticky shadow-md border-b border-light py-3 z-[100] text-black": 
        isSticky || path !== "/" || isShowMenu,
      
      // کلاس‌هایی که وقتی هیچ‌کدوم شرط بالا درست نیست، اعمال می‌شن
      "bg-gray-300/35 absolute md:py-5 border-b border-b-gray/300 ": 
        !isSticky && path === "/" && !isShowMenu,
    }
  )}
>
      <div className=" relative m-auto flex  w-full justify-between px-4 lg:px-24" >
        {/* لوگو - فقط در دسکتاپ */}
<Image src="/logo-1.svg" width={70} height={70} alt="logo"/>

        {/* منو و دکمه در دسکتاپ */}
        <div className="hidden md:flex md:w-full md:justify-end items-center lg:h-[58px] lg:py-10 md:gap-12 lg:gap-13 gap-7">
        <div className="flex gap-4 lg:gap-8 text-white">
            <Link href="/">صفحه اصلی</Link>
            <Link href="/buy-residential">آگهی ها </Link>
          </div>

          <button className="lg:mr-10 text-white lg:text-[19px] md:text-[16px] px-5 text-[12px] font-[400]  cursor-pointer">
            {data ? (
              <Link
                href="/dashboard"
                className="flex flex-row items-center gap-[2px]   py-[3px] px-[7px] rounded-[5px] transition ease-in-out delay-200">
              حساب کاربری
              </Link>
            ) : (
              <Link href="/signin">
                 
ورود / ثبت نام               
              </Link>
            )}
          </button>
        </div>

        {/* موبایل: لوگو + همبرگر */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-1.svg"
              alt="logo"
              width={80}
              height={40}
              className=" md:p-0 p-2"
            />
          </Link>

          <GiHamburgerMenu
            onClick={() => setIsShowMenu(true)}
            className="h-6 w-6 cursor-pointer"
          />
        </div>

        {/* منوی موبایل */}
        <div
          className={clsx(
            "fixed top-0 left-0 z-[100] w-60 shadow-lg rounded-tr-2xl rounded-br-2xl transition-all duration-300 md:hidden",
            isShowMenu
              ? "translate-x-0 opacity-100 pointer-events-auto bg-primary/95 text-white h-full"
              : "-translate-x-full opacity-0 pointer-events-none"
          )}>
          <IoCloseOutline
            onClick={() => setIsShowMenu(false)}
            className="absolute right-4 top-4 w-6 h-6 cursor-pointer"
          />

          <div className="mt-28 flex flex-col justify-center  gap-6 px-6">
            <Link href="/">wtpi </Link>

            {data ? (
              <Link
                href="/dashboard"
                className="flex flex-row items-center gap-[2px]   py-[3px] px-[7px] rounded-[5px] transition ease-in-out delay-200 hover:bg-purple-500   hover:text-white">
                <FaUserAlt />
              </Link>
            ) : (
              <Link href="/signin">
                <button className="text-[20px] flex flex-row items-end justify-center bg-gray-200 px-4 py-2 rounded-full text-primary hover:opacity-50 gap-3 align-middle">
                  <FiLogIn />
                  ورود
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
