import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryCard({ name, title }) {
  return (
    <div>
      <div className="shadow-[#304ffe4a_0px_4px_15px] rounded-[15px] overflow-hidden p-[10px] transition-all ease-in duration-100 m-[10px_0] hover:rotate-[-5deg]">
        <Link href={`/buy-residential?category=${name}`}>
          <Image
            className="rounded-[10px]"
            src={`/images/${name}.png`}
            alt={title}
            width={240}
            height={144}
            priority={true}
          />
          <p className="text-[1.2rem] font-normal text-[#304ffe] text-center my-[10px_5px]">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
