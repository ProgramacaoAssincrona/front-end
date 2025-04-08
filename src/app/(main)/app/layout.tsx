import Footer from "@/features/components/Footer";
import Navbar from "@/features/components/Navbar";
import QueryProvider from "@/features/service/queryProvider";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryProvider>
          <Navbar />
          <main className="mt-[var(--app-navbar-height)] min-h-[calc(100vh-var(--footer-height))]">
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
