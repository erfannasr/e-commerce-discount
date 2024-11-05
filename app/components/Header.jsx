import Link from "next/link";
import logo from '../public/logo.png'
import Image from "next/image";
export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">
      <Link href={"/"}>
           <Image src={logo} height={120} width={140}/>
      </Link>
      <div className="hidden md:flex gap-2 items-center font-semibold">
        {menuList?.map((item) => {
          return (
            <Link href={item?.link}>
              <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                {item?.name}
              </button>
            </Link>
          );
        })}
      </div>
      <Link href={"/login"}>
        <button className="bg-blue-600 font-bold px-4 py-1 rounded-full text-white">
          Login
        </button>
      </Link>
    </nav>
  );
}
