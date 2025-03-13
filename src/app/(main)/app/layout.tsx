import Navbar from "@/features/app/components/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <main className="mt-[var(--app-navbar-height)] min-h-[calc(100vh-var(--footer-height))]">
        {children}
      </main>

      {/* <SharedFooter /> */}
    </>
  );
}
