import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobilya - Trendyol",
  description: "Mobilya ve sevdiğin markaların yeni sezon ürünleri",
};

export default function MobilyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}