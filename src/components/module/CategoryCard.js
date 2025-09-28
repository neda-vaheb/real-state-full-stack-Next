import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryCard({ name, title }) {
  return (
  
      <div className=" rounded-[15px] overflow-hidden p-[10px] transition-all ease-in duration-100 m-[10px_0] hover:rotate-[-5deg] group">
        <Link href={`/buy-residential?categories=${name}`} className="block relative">
          <Image
            className="rounded-[10px]"
            src={`/images/${name}.png`}
            alt={title}
            width={240}
            height={144}
            priority={true}
          />
          {/* نمایش عنوان فقط در حالت هاور */}
          <p className="text-[1.2rem] font-normal text-primary text-center my-[10px_5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0 bg-white bg-opacity-60 py-2">
            {title}
          </p>
        </Link>
      </div>
  );
}

export default CategoryCard;