import User from "@/models/user";
import DashboardPage from "@/template/DashboardPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
