import type { Metadata } from "next";
import "./globals.scss";
import 'bootstrap/scss/bootstrap.scss'
import Navbar from "@/components/Navbar";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    <BootstrapClient />
    </html>
  );
}
