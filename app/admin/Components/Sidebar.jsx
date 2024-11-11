"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import {
  Cat,
  Layers2,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  PackageOpen,
  ShieldCheck,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";

import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";

function Sidebar() {
  const menuList = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },

    {
      name: "Products",
      link: "/admin/products",
      icon: <PackageOpen className="h-5 w-5" />,
    },
    {
      name: "Categorise",
      link: "/admin/categorise",
      icon: <Layers2 className="h-5 w-5" />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <Cat className="h-5 w-5" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-5 w-5" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-5 w-5" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    
  ];
  return (
    <section className="bg-white flex flex-col gap-10  border-r  px-5 py-3 w-[260px] z-[1000] h-screen overflow-hidden">
      <div className="flex justify-center py-4">
        <Image src={logo} width={120} height={150} alt="" />
      </div>

      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menuList?.map((item, key) => {
          return <Tab item={item} key={key} />;
        })}
        
         
        {/* 9 05 52 */}


      </ul> <div className="flex justify-center  ">
          <button onClick={async () =>{ 
            try {
              await toast.promise(signOut(auth),{
                error: (e)=>e?.message,
                loading:"Loading...",
                success:"Successfully Logged out" 
              })
            } catch (error) {
              toast.error(error?.message)
            }
          }} className=" flex gap-2 items-center px-3 py-2 hover:bg-indigo-100 rounded-xl w-full justify-center ease-soft-spring duration-400 transition-all">
            {" "}
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>
    </section>
  );
}

export default Sidebar;

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;

  return (
    <Link href={item?.link}>
      <li
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300 ${
          isSelected ? "text-white bg-[#879fff]" : "bg-white text-black"
        } `}
      >
        {item?.icon} {item?.name}
      </li>
    </Link>
  );
}
