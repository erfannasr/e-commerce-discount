"use client";

import AuthContextProvider from "@/contexts/AuthContext";

function Layout({ chlidren }) {
  return <AuthContextProvider>{chlidren}</AuthContextProvider>;
}

export default Layout;
