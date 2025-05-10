import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import { categories as category } from "@/constants/string";
import { icons } from "@/constants/icons";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    categories,
    constructionDate,
  },
}) {
  return (
    <div className="flex mt-[60px]">
      <div className="w-full">
        <h1 className="text-primary text-[1.2rem] mb-[10px]">{title}</h1>
        <span className="flex items-start h-[15px] mb-[50px] text-gray-500">
          <HiOutlineLocationMarker className="text-[1.2rem] ml-[5px]" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-[50px]">{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className="w-[250px] mr-[40px] ">
        <div className="shadow-[#304ffe4a_0px_4px_15px] p-2.5 rounded-lg mb-5 flex flex-col items-center ">
          <SiHomebridge className="text-[1.3rem] text-primary my-[10px] mb-[20px]" />
          <p className="text-[1.1rem]">املاک {realState}</p>
          <span className=" flex items-center text-gray-500 mt-[20px]">
            <AiOutlinePhone className="text-[1.4rem] m-0 ml-[5px] text-gray-500" />
            {e2p(phone)}
          </span>
        </div>
      
        <div className="shadow-[#304ffe4a_0px_4px_15px] py-[20px] rounded-lg mb-5 flex flex-col items-center justify-center">
          <p className="flex items-center text-gray-500 mb-[20px] h-[20px]">
            {icons[categories]}
            {category[categories]}
          </p>

          <p className="flex items-center text-gray-500 mb-[20px] h-[20px]">
            {sp(price)} تومان
          </p>
          <p className="flex items-center text-gray-500 mb-[20px] h-[20px]">
            <BiCalendarCheck className="ml-[5px] text-[1.5rem] text-primary" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
