<<<<<<< HEAD
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./modern-normalize.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
=======
import { StrictMode } from "react";
import type { Metadata } from "next";
import { Tilt_Warp, Roboto } from "next/font/google";
import Header from "./header";
import "./modern-normalize.css";
import "./globals.css";

const tiltWarp = Tilt_Warp({
  variable: "--font-tilt-warp",
  axes: ["XROT", "YROT"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
>>>>>>> 5f4cdbf (Initial commit from Create Next App)
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack Humphrey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
=======
      <StrictMode>
        <body className={`${tiltWarp.variable} ${roboto.variable}`}>
          <div className="container">
            <Header />
            <main className="main">{children}</main>
          </div>
        </body>
      </StrictMode>
>>>>>>> 5f4cdbf (Initial commit from Create Next App)
    </html>
  );
}
