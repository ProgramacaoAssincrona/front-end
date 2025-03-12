"use client";

// import Navbar from "@/features/admin/components/Navbar";
// import SharedFooter from "@/shared/components/SharedFooter";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}

      <main className="mt-[var(--admin-navbar-height)] min-h-[calc(100vh-var(--footer-height))] bg-white-2">
        {children}
      </main>

      {/* <SharedFooter /> */}
    </>
  );
}
