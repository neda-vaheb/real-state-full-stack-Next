import { LuPhone } from "react-icons/lu";

function Footer() {
  return (
    <footer className="flex flex-row justify-between bg-primary w-full p-7  text-white rounded-[10px]  mt-[80px]">
      <div className="w-[50%] text-justify ml-30px">
        <h3 className="mb-[10px] text-[1.2rem] font-bold">
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
       
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-secondary">  تماس با مشاورین ما  </h4>
        <ul className="space-y-3">
          <li className="flex gap-2 items-center "> <LuPhone /> 09121133309 </li>
          <li className="flex gap-2 items-center "><LuPhone />  09876544433 </li>
          <li className="flex gap-2 items-center "><LuPhone />09870987554 </li>
          <li className="flex gap-2 items-center "><LuPhone />123456789900 </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="text-secondary">لینک ها ی مفید</h4>
        <ul  className="space-y-3">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
      <h4 className="text-secondary">  ارتباط با ما </h4>
        <ul  className="space-y-3">
          <li>تماس با ما </li>
          <li> درباره ما</li>
         
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
