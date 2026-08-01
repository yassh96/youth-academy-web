import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Youth Success Academy — Empowering Students To Build Successful Careers",
  description:
    "Youth Success Academy (YSA) provides practical training in career guidance, leadership development, business skills, financial awareness, and communication. Join 5000+ students who transformed their careers.",
  keywords: [
    "Youth Success Academy",
    "YSA",
    "career guidance Pune",
    "student training programs",
    "leadership development",
    "business skills training",
    "personality development",
    "Undri Pune coaching",
  ],
  openGraph: {
    title: "Youth Success Academy",
    description: "Practical learning. Real-world skills. Inspiring futures.",
    url: "https://youthsuccessacademy.in",
    siteName: "Youth Success Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Success Academy",
    description: "Empowering Students To Build Successful Careers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
