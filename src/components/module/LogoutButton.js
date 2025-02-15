import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  return (
    <button
      className="flex bg-transparent border-none mt-5 w-full text-right text-lg text-red-800 cursor-pointer"
      onClick={signOut}
    >
      <FiLogOut className="text-xl ml-1 text-red-800" />
      خروج
    </button>
  );
}

export default LogoutButton;
