import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/user";
import { redirect } from "next/navigation";
import Profile from "@/models/profile";
import DsahboardSidebar from "@/layout/DsahboardSidebar";
import AdminPage from "@/template/AdminPage";

async function admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findeOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");
  const profiles = await Profile.find({ published: false });
  return (
    <DsahboardSidebar role={user.role} email={user.email}>
      <AdminPage data={profiles} />
    </DsahboardSidebar>
  );
}

export default admin;
