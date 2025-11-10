import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NextAuthProvider from "@/providers/NextAuthProvider";
import HomePage from "@/template/HomePage";

export default function Home() {
  return(

<>
<NextAuthProvider>
<Header/> <HomePage />
</NextAuthProvider>


</> 
  ) 
}
