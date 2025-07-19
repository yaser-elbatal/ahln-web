import Footer from "@/components/layout/Footer"; // Import the Footer component
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LangAttributes from "@/components/layout/LangAttributes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahln Smart Delivery System",
  description: "Secure and efficient package delivery",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ahln Smart Delivery System",
    description: "Secure and efficient package delivery",
    images: [
      "https://ahln-s3.s3.me-central-1.amazonaws.com/public/ahlnLogo.png",
    ],
    url: "https://www.ahln.ae",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <LanguageProvider>
          <LangAttributes />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
