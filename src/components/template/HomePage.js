
import { categories  } from "src/constants/string";
import CategoryCard from "@/module/CategoryCard";
import Image from "next/image";
import HeroSection from "../features/HeroSection";
import AboutUsLanding from "../features/AboutUsLanding";
import WhyUs from "../features/WhyUs";
import Calculate from "../features/Calculate";
import SampelInHompage from "../features/AdsHomePage";

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
      <AboutUsLanding/>
      <SampelInHompage/>
      <Calculate/>
      <WhyUs/>
    </div>
  );
}

export default HomePage;
