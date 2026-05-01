import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "<PMPPP/>",
  description: "A minimalist portfolio showcasing my projects, skills, and experience as a software engineer.",
  keywords: "software engineer",
  authors: [{ name: "Pabasara Palihena" }],
  icons: {
    icon: "/assets/images/MyLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
