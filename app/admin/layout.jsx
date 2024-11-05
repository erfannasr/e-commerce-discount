"use client";

import AuthContextProvider, { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "./Components/AdminLayout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@nextui-org/react";

function layout({ children }) {
  return (
    <AuthContextProvider>
      <AdminCheking>{children}</AdminCheking>
    </AuthContextProvider>
  );
}
export default layout;

function AdminCheking({children}) {
   const router = useRouter()
   const {user , isLoading} = useAuth()
   useEffect(()=>{
      if (!user && !isLoading) {
        router.push("/login")
      }
   },[user , isLoading])

   if (isLoading) {
    return <div className="h-screen w-screen flex justify-center items-center">
      <CircularProgress />
    </div>
   }
   
   if (!user) {
    return <div className="h-screen w-screen flex justify-center items-center">
              <h1>Plase Lofin First!</h1>
     </div>
   }
  return <AdminLayout>{children}</AdminLayout>;
}
