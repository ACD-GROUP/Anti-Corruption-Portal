import type { Metadata } from "next";
import "./globals.scss";
import 'bootstrap/scss/bootstrap.scss'
import Navbar from "@/components/Navbar";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata: Metadata = {
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    <BootstrapClient />
    </html>
  );
}
