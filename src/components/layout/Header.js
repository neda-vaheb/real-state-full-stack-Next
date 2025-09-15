"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";

function Header() {
  const { data } = useSession();
  return (
    <header className=" container flex flex-row justify-between !align-middle !item-center text-black p-[20px] my-[20px] rounded-xl ">
      <div>
        <ul className="flex flex-row items-center justify-start align-middle gap-[20px]">
        <li>
            <Image
          src="/logo.svg"
alt="logo"
width={70}
height={70}
             
            />
               
            
          </li>
          <li>
            <Link
              href="/"
              className=" text-[20px] text-primary hover:opacity-50 transition-all ease-in-out"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/buy-residential"
              className="text-[20px] text-primary hover:opacity-50 transition-all ease-in-out"
            >
              آگهی ها
            </Link>
          </li>
        </ul>
      </div>
      
        {data ? (
          <Link
            href="/dashboard"
            className="flex flex-row items-center gap-[2px]   py-[3px] px-[7px] rounded-[5px] transition ease-in-out delay-200 hover:bg-purple-500   hover:text-white"
          >
            <FaUserAlt />
          </Link>
        ) : (
          <Link
            href="/signin"
            
            >
            

            <span className="text-[20px] flex flex-row items-end justify-center text-primary hover:text-secondary gap-3 align-middle">
            <FiLogIn />
              ورود 
              
              </span>
          </Link>
        )}
    </header>
  );
}

export default Header;
