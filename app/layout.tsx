import type { Metadata } from "next";
import { Tilt_Warp, Inter } from "next/font/google";
import Header from "./header";
import "./modern-normalize.css";
import "./globals.css";

const tiltWarp = Tilt_Warp({
  variable: "--font-tilt-warp",
  axes: ["XROT", "YROT"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack Humphrey",
  description: "Personal website of Jack Humphrey, front-end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tiltWarp.variable} ${inter.variable}`}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
