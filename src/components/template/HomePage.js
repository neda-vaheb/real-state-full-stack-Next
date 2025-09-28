import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import { categories, cities, services } from "src/constants/string";
import CategoryCard from "@/module/CategoryCard";
import Image from "next/image";

function HomePage() {
  return (
    <div className=" container flex flex-col gap-10">
      <div className="relative">
  <Image src="/Rectangle 7.png" alt="bg" width={1400} height={570} className="w-full m-auto object-cover object-center object-contain z-0"/>
<Image src="/build.png" width={920} height={530} alt="build" className="absolute right-[-10px] bottom-[5px] z-10 rounded-xl "/>
<div className="absolute top-1/4 left-0 leading-10 w-[50%]">
<h1 className="text-primary text-[30px] font-bold mb-5 text-center">خانه‌ای ایده‌آل پیدا کنید </h1>
<h2 className="text-primary text-[27px] font-bold mb-5 text-center">  که دوستش داشته باشید  </h2>

<p className="text-primary text-[19px] text-center mt-10">ما خدمات کاملی برای فروش، خرید یا اجاره املاک و مستغلات ارائه می‌دهیم.</p>
<div className="flex gap-8 mt-16 items-center justify-evenly">
<button className="bg-primary text-white rounded-xl px-4 py-2 hover:opacity-50">مشاوره  خرید و فروش </button>
<button className="bg-primary text-white rounded-xl px-4 py-2 hover:opacity-50"> مشاوره رهن و اجاره</button>
</div>

</div>

</div>
<div className=" flex flex-col my-[30px] justify-center">
  <h3 className="text-secondary  font-bold text-2xl text-center "> ملک مورد نظر خودت رو جستجو کنید </h3>
<div className="flex justify-evenly flex-wrap my-[50px]">
        {Object.keys(categories).map((item,index ) => (
          <CategoryCard key={index} title={categories[item]} name={item} />
        ))}
      </div>
</div>
<div className="flex md:flex-row justify-evenly items-center">
  <div className="w-1/3 flex flex-col gap-6">
    <h3 className="text-secondary  font-bold text-2xl ">ما در حوزه ی ملک برتر هستیم</h3>
    <ul className=" space-y-5 list-disc text-[20px]">
      <li>مرجع اصلی در منطقه</li>
      <li>بهترین قیمت های منطقه </li>
      <li>
        تخصص و تجربه ما ، ما رو متمایز کرده
      </li>
  <li>
    مشارکت در ساخت های برتر شهر
  </li>
<li>
  مشارکت در پروژه های بزرگ
</li>
    </ul>
  </div>
  <Image src="/image.png" width={450} height={300} />
</div>

    </div>
  );
}

export default HomePage;
