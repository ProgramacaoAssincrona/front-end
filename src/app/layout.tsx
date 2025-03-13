import "@/globals.css";
import type { Metadata } from "next";
import { Hind, Inter } from "next/font/google";
// import { Toaster } from 'sonner'
// import { Providers } from './providers'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tamajaki",
  description: "Tamajaki - eletronicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        // id="root"
        className={`${inter.variable} ${hind.variable} antialiased`}
      >
        {/* <Providers> */}
        {/* <Toaster position="bottom-left" closeButton  /> */}
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
