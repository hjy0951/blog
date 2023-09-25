import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { pretendard } from "@/styles/font";

export const metadata: Metadata = {
  title: "Heojoooon's blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <div className="flex flex-col gap-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
