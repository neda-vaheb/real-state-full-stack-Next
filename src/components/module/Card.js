import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import { icons } from "src/constants/icons";

function Card({ data: { _id, category, title, location, price } }) {
  return (
    <div className="w-[250px] border-2 border-primary rounded-lg p-2.5 m-2.5">
      <div className="">{icons[category]}</div>
      <p className="my-[10px]">{title}</p>
      <p className=" flex flex-row text-gray-500 text-[0.9rem]">
        <HiOutlineLocationMarker className="ml-[5px] text-[1rem]" />
        {location}
      </p>
      <span className="text-gray-500 block text-[0.9rem] font-normal mt-2.5">
        {sp(price)} تومان
      </span>
      <Link
        href={`/buy-residential/${_id}`}
        className="flex items-center justify-between mt-5 text-[0.95rem] font-normal text-primary"
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="hover:scale-[1.05] transition-all" />
      </Link>
    </div>
  );
}

export default Card;
