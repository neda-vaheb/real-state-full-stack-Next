'use client'
import { categories, cities, services } from "src/constants/string";
import CategoryCard from "@/module/CategoryCard";
import Image from "next/image";
import { useEffect, useState } from "react";

function HeroSection() {
  const words = ["خانه", "آپارتمان", "ویلا"]; 
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 150;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        // صبر قبل از شروع حذف
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);
  return (
    <div className=" container flex flex-col gap-10">
      <div className="relative">
        <Image
          src="/bg-h-1.webp"
          alt="bg"
          width={1400}
          height={400}
          className="object-cover object-center m-auto w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  font-bold">
      <p className=" md:text-5xl ">{text} ایده آل خود را انتخاب کنید</p>
      <br/>
      <p className="text-center py-5">
        انواع آگهی ها با سلیقه ی شما
      </p>
      </div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900">
     
      <div className="flex gap-8 justify-center items-center m-auto ">

  <button className="bg-white px-6 py-2 rounded-md text-primary hover:text-white hover:bg-primary transition-all duration-100 shadow-md shadow-primary/25">تماس با ما </button>
     
  <button className="bg-white px-6 py-2 rounded-md text-primary hover:text-white hover:bg-primary transition-all duration-100 shadow-md shadow-primary/25">ثبت آگهی </button>
  </div>


    </div>
      </div>
   
    </div>
  );
}

export default HeroSection;
