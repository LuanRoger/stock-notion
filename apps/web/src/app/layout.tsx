import type { Metadata } from "next";
import { Geist, Geist_Mono, Domine } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock",
  description:
    "Os principais indicadores de fundos de investimento sempre atualizados no Notion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${domine.variable} antialiased py-14 gap-4`}
      >
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
