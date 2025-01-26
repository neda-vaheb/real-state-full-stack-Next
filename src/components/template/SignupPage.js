"use client";

import Loader from "@/module/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز عبور با تکرار رمز عبور مغایرت دارد");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className="flex flex-col juctify-center items-center h-[700px] mt-[100px] m-auto">
      <h4 className="text-primary text-xl mb-[20px]">فرم ثبت نام</h4>
      <form className="flex flex-col items-start min-h-[500px] m-w-[600px] p-[40px] pt-[60px] mb-[30px] rounded-xl border-[2px] border-primary shadow-custom">
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
        <label className="font-normal mb-[10px] text-primary">
          تکرار رمز عبور:
        </label>
        <input
          className="w-[250px] h-[40px] text-[1rem] dir-ltr outline-solid outline-primary mb-[40px] border-dashed border-primary border rounder-[5px] text-gray-500 p-[10px] "
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            className="bg-primary text-white w-full py-2 rounded-[5px] cursor-pointer hover:scale-[1.05] transition transition-all"
            type="submit"
            onClick={signupHandler}
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-gray-500 text-[1.1rem]">
        حساب کاربری دارید؟
        <Link href="/signin" className="text-primary mr-[10px] border-b">
          ورود
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
