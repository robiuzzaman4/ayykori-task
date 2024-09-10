import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-white border-b border-b-zinc-200">
      <div className="w-full max-w-screen-lg mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl tracking-tighter font-medium">
          Ayykori Task
        </Link>
        <Link
          href="https://github.com/robiuzzaman4/ayykori-task"
          target="_blank"
          className="text-sm font-medium text-zinc-500 underline"
        >
          Github
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
