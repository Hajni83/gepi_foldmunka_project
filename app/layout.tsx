import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gépi Földmunka | Prémium Építőipari Szolgáltatások",
  description: "Profi gépi földmunka, alapásás, tereprendezés és bontás Magyarország egész területén. Modern géppark, precíz munkavégzés.",
  keywords: "gépi földmunka, alapásás, tereprendezés, árokásás, bontás, építőipar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors theme="dark" />
        {children}
      </body>
    </html>
  );
}
