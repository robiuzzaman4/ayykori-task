import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ayykori Task",
  description: "Completed by Md. Robi-uz-zaman Ruhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-zinc-900`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-56px)] mt-14">{children}</main>
      </body>
    </html>
  );
}
