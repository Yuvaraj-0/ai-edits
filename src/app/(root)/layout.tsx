"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <main className="root">
        <Sidebar />
        <MobileNav />
        <div className="root-container">
          <div className="wrapper">{children}</div>
        </div>
      </main>
    </ClerkProvider>
  );
};

export default ClientLayout;
