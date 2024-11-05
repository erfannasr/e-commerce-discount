"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

function page() {

  const { user } = useAuth();
  const router = useRouter();

   console.log(user)
   
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <Image src={logo} height={120} width={130} />
        </div>
        <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
          <h1 className="font-bold text-xl">Login With Email</h1>
          <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   handleLogin();
            // }}
            className="flex flex-col gap-3"
          >
            <input
              placeholder="Enter Your Email"
              type="email"
              name="user-email"
              id="user-email"
              value={""}
              //   onChange={(e) => {
              //     handleData("email", e.target.value);
              //   }}
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <input
              placeholder="Enter Your Password"
              type="password"
              name="user-password"
              id="user-password"
              value={""}
              //   onChange={(e) => {
              //     handleData("password", e.target.value);
              //   }}
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <Button type="submit" color="primary">
              Login
            </Button>
          </form>
          <div className="flex justify-between">
            <Link href={"/sign-up"}>
              <button className="font-semibold text-sm text-blue-700">
                New ? Create Account
              </button>
            </Link>

            <Link href={"/forget-password"}>
              <button className="font-semibold text-sm text-blue-700">
                Forget Password?
              </button>
            </Link>
          </div>
          <hr />
          <SigninWithGoogleComponent />
        </div>
      </section>
    </main>
  );
}

export default page;

function SigninWithGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  };
  return (
    <Button isLoading={isLoading} isDisabled={isLoading} onClick={handleLogin}>
      Sign In With Google
    </Button>
  );
}
