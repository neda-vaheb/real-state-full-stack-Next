import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";

function BuyResidentialPage({ data }) {
  return (
    <div className="flex justify-between mt-[80px]">
      <div className="flex flex-col items-center h-fit p-[30px_15px] rounded-lg shadow-[#304ffe4a_0px_4px_15px] ml-10 w-56">
        <Sidebar />
      </div>
      <div className="w-full flex flex-wrap justify-between">
        {data.length ? null : (
          <p className="bg-[rgba(219,5,5,0.159)] text-[rgb(219,5,5)] text-[1.3rem] p-[10px_15px] rounded-lg h-[50px]">
            هیچ آگهی ثبت نشده است
          </p>
        )}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialPage;
