
import { categories  } from "src/constants/string";
import CategoryCard from "@/module/CategoryCard";
import Image from "next/image";
import HeroSection from "../features/HeroSection";

function HomePage() {

  return (
    <div className=" container flex flex-col gap-10">
      <HeroSection/>
      <div className=" flex flex-col my-[30px] justify-center">
        <h3 className="text-primary  font-bold text-2xl text-center ">
          {" "}
          ملک مورد نظر خودت رو جستجو کنید{" "}
        </h3>
        <div className="flex justify-evenly flex-wrap my-[50px]">
          {Object.keys(categories).map((item, index) => (
            <CategoryCard key={index} title={categories[item]} name={item} index={index}/>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row justify-evenly items-center">
        <div className="w-1/3 flex flex-col gap-6">
          <h3 className="text-primary  font-bold text-2xl ">
            ما در حوزه ی ملک برتر هستیم
          </h3>
          <ul className=" space-y-5 list-disc text-[20px]">
            <li>مرجع اصلی در منطقه</li>
            <li>بهترین قیمت های منطقه </li>
            <li>تخصص و تجربه ما ، ما رو متمایز کرده</li>
            <li>مشارکت در ساخت های برتر شهر</li>
            <li>مشارکت در پروژه های بزرگ</li>
          </ul>
        </div>
        <Image src="/image.png" width={450} height={300} alt="aboutus" />
      </div>
    </div>
  );
}

export default HomePage;
