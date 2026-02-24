import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Trendyol - Türkiye'nin En Büyük Online Alışveriş Sitesi",
  description: "Mobilya ve sevdiğin markaların yeni sezon ürünleri",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-[#333] overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}