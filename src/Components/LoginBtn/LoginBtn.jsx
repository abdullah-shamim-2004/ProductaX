import Link from "next/link";
import React from "react";

const LoginBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 text-sm font-medium rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
    >
      <Link href={"/login"} className="relative z-10">
        Login
      </Link>
    </button>
  );
};

export default LoginBtn;
