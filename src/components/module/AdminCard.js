"use client";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className="border-b-[2px] border-primary pb-[10px] mb-[80px]">
      <h3 className="text-[1.02rem] text-primary mb-[20px]">{title}</h3>
      <p className="text-justify mb-[20px]">{description}</p>
      <div className="flex mb-[20px]">
        <span className="bg-primary-light color-primary py-[5px] px-[10px] ml-[15px] rounded-[5px]">
          {location}
        </span>
        <span className="bg-primary-light color-primary py-[5px] px-[10px] ml-[15px] rounded-[5px]">
          {sp(price)}
        </span>
      </div>
      <button
        onClick={publishHandler}
        className="bg-green-600 hover:bg-green-700 text-white hover:text-black font-normal text-base py-2 px-4 rounded cursor-pointer mt-5 transition-all duration-100 ease-in"
      >
        انتشار
      </button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
