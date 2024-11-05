"use client";

import { Menu } from "lucide-react";

function Header({toggleSideBasr}) {
  return (
    <div className="flex items-center gap-3  bg-white border-b px-4 py-4">
      <div className="flex justify-center items-center md:hidden ">
        <button onClick={toggleSideBasr}>
          <Menu />
        </button>
      </div>
      <h1 className="text-xl">Dashboard</h1>
    </div>
  );
}

export default Header;
