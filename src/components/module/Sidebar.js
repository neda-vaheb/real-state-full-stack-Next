import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "src/constants/string";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <p className="flex text-[1.01rem]">
        <HiFilter className="ml-[5px] text-[1.3rem] text-primary" />
        دسته بندی
      </p>
      <Link className="text-gray-500 m-[5px]" href="/buy-residential">
        همه
      </Link>
      {Object.keys(categories).map((i) => (
        <Link
          key={i}
          href={{
            pathname: "/buy-residential",
            query: { categories: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
