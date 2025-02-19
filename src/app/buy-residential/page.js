import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential() {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return <BuyResidentialPage />;
}

export default BuyResidential;
