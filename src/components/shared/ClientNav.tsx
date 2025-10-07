// components/shared/ClientNav.tsx
"use client";

import React from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

export default function ClientNav() {
  return (
    <>
      <Sidebar />
      <MobileNav />
    </>
  );
}
