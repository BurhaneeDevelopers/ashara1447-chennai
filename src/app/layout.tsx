import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import localFont from 'next/font/local'
 
const myFont = localFont({
  src: '../../public/fonts/kanz.ttf',
})

export const metadata: Metadata = {
  title: "Ashara 1447 Chennai",
  description: "Ashara 1447 Chennai Information Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="ar" dir="rtl">
    <html lang="en" dir="">
      <body className={`${myFont.variable} font-sans antialiased`}>
        <Image
          src={"/banner-top-strip.png"}
          alt="Banner Ribbon"
          width={500}
          height={500}
          className="w-full"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
