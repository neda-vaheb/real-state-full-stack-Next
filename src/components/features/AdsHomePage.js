import BuyResidential from "@/app/buy-residential/page";
import Card from "@/module/Card";
import HorizontalScroller from "@/module/HorizontalScroller";
import Loader from "@/module/Loader";
import { getAds } from "@/utils/getAds";

async function SampelInHompage({ searchParams }) {
  const data = await getAds();

  return (
    <div className="container flex flex-col gap-5 my-10">
      {/* <h3 className="text-secondary font bold md:text-2xl  text-center">
        نمونه ملک های ما
      </h3> */}

   
      {data.length ? (
        <HorizontalScroller title={"نمونه ملک های ما "}>
          {data.slice(0, 5).map((ad) => (
            <Card key={ad._id} data={ad} />
          ))}
        </HorizontalScroller>
      ) : (
        <Loader />
      )}

      
     
     
    </div>
  );
}

export default SampelInHompage;
