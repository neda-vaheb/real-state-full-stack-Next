import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";

function Header() {
  return (
    <header className="flex flex-row justify-between item-center text-white bg-purple-500 p-[20px] my-[20px] rounded-xl ">
      <div>
        <ul className="flex flex-row gap-[20px]">
          <li>
            <Link
              href="/"
              className="hover:text-purple-300  transition transition-all ease-in-out"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/buy-residential"
              className="hover:text-purple-300   transition transition-all ease-in-out"
            >
              آگهی ها
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/singin"
          className="flex flex-row items-center gap-[2px] bg-white text-purple-500  py-[3px] px-[7px] rounded-[5px] transition ease-in-out delay-200 hover:bg-purple-500   hover:text-white"
        >
          <FiLogIn />

          <span className="font-[25px]">ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
