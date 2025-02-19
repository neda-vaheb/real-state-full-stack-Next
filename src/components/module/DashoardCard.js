"use client";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "./Card";
import { useState } from "react";
import Loader from "./Loader";

function DashoardCard({ data }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      setLoading(false);
      router.refresh();
    }
  };
  return (
    <div>
      <div className="flex border-2 border-primary rounded-[15px] mb-5">
        <Card data={data} />
        <div className="flex items-end justify-between p-[10px] w-full">
          <button
            className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-green-600 text-green-600 hover:scale-[1.05] transition-all"
            onClick={editHandler}
          >
            ویرایش
            <FiEdit className="mr-[10px] text-[1.1rem]" />
          </button>
          {loading ? (
            <Loader />
          ) : (
            <button
              className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-red-600 text-red-600 hover:scale-[1.05] transition-all"
              onClick={deleteHandler}
            >
              حذف آگهی
              <AiOutlineDelete className="mr-[10px] text-[1.1rem]" />
            </button>
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default DashoardCard;
