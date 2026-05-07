import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "<PMPPP/>",
  description: "A minimalist portfolio showcasing my projects, skills, and experience as a software engineer.",
  keywords: "software engineer",
  authors: [{ name: "Pabasara Palihena" }],
  icons: {
    icon: "/assets/images/PLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable}`}>
      <body className="bg-white text-gray-900 antialiased font-roboto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
