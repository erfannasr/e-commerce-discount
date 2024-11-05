"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";

function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sideBarRef = useRef(null);

  const toggleSideBasr = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    toggleSideBasr();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutSideEvent(e) {
      if (sideBarRef.current && !sideBarRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSideEvent);
    return ()=> {
      document.removeEventListener("mousedown" , handleClickOutSideEvent)
    }
  }, []);
  return (
    <main className="flex relative">
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div
        ref={sideBarRef}
        className={`fixed md:hidden ease-in-out transition-all duration-400 ${
          isOpen ? "translate-x-0" : "-translate-x-[260px]"
        }`}
      >
        <Sidebar />
      </div>

      <section className="flex-1 flex flex-col min-h-screen">
        <Header toggleSideBasr={toggleSideBasr} />
        <section className="flex-1 bg-[#eff3f4]">{children}</section>
      </section>
    </main>
  );
}

export default AdminLayout;
