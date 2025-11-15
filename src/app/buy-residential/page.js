import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential({ searchParams }) {

  const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://real-state-full-stack-next-vq5t.vercel.app'
  : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/profile`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  let finalData = data.data;
  if (searchParams.categories) {
    finalData = finalData.filter(
      (i) => i.categories === searchParams.categories
    );
  }

  return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;
