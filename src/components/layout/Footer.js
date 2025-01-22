function Footer() {
  return (
    <footer className="flex flex-row justify-between bg-purple-500 text-white rounded-[10px] p-[20px] mt-[80px] mb-20px">
      <div className="w-[70%] text-justify ml-30px">
        <h3 className="mb-[10px] text-[1.2rem] font-bold">
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
