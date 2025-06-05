// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

export const kanz = localFont({
  src: "../../public/fonts/kanz.ttf",
  display: "swap",
  variable: "--font-kanz",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Ashara 1447 Chennai",
//   description: "Ashara 1447 Chennai Information Portal",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="ar" dir="rtl">
    <html lang="en" dir="">
      <body
        className={`${kanz.className} antialiased`}
      >
        <Image
          src={"/top-ribbon.svg"}
          alt="Banner Ribbon"
          width={500}
          height={500}
          className="w-full bg-cover"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
