import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import { categories, cities, services } from "src/constants/string";
import CategoryCard from "@/module/CategoryCard";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center rounded-lg p-5 my-[100px]">
        <div className="w-full text-center text-primary">
          <h1 className="font-[700] text-[2.5rem] mb-[30px]">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className="list-none flex justify-center flex-wrap">
            {services.map((i) => (
              <li
                className="flex items-center w-20 m-2.5 bg-blue-100 px-2.5 py-1.25 rounded-md"
                key={i}
              >
                <FiCircle />
                <span className="mr-[5px] h-[20px]">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap my-[50px]">
        {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i]} name={i} />
        ))}
      </div>
      <div className="my-[100px]">
        <h3 className="font-[600] text-[2rem] text-center text-primary">
          شهر های پر بازدید
        </h3>
        <ul className="flex justify-between flex-wrap mt-[50px] list-none">
          {cities.map((i) => (
            <li
              className="bg-primary-light text-primary text-[1.2rem] w-[250px] my-[10px] flex justify-center items-center p-[10px] rounded-[10px]"
              key={i}
            >
              <FaCity />
              <span className="h-[30px] mr-[15px] font-normal">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
