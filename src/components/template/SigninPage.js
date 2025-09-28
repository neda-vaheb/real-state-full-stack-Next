"use client";

import Loader from "@/module/Loader";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const singinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col juctify-center items-center h-[700px] mt-[100px] m-auto">
      <h4 className="text-primary text-xl mb-[20px]">فرم ورود</h4>
      <form className="flex flex-col items-start min-h-[500px] m-w-[600px] p-[40px] pt-[60px] mb-[30px] rounded-xl border-[2px] border-primary ">
        <label className="font-normal mb-[10px] text-primary">ایمیل:</label>
        <input
          className="w-[250px] h-[40px] font-[1rem] dir-ltr outline-solid outline-primary mb-[40px] border-dashed border-primary border rounder-[5px] text-gray-500 p-[10px] "
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-normal mb-[10px] text-primary">رمز عبور:</label>
        <input
          className="w-[250px] h-[40px] text-[1rem] dir-ltr outline-solid outline-primary mb-[40px] border-dashed border-primary border rounder-[5px] text-gray-500 p-[10px] "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button
            className="bg-primary text-white w-full py-2 rounded-[5px] cursor-pointer hover:scale-[1.05]  transition-all"
            type="submit"
            onClick={singinHandler}
          >
            ورود
          </button>
        )}
      </form>
      <p className="text-gray-500 text-[1.1rem]">
        حساب کاربری ندارید؟
        <Link href="/signup" className="text-primary mr-[10px] border-b">
          ثبت نام
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
