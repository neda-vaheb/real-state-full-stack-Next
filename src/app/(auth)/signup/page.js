import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/template/SignupPage";
async function signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignupPage />;
}

export default signup;
