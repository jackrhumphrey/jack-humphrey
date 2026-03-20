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
      <body className={`${tiltWarp.variable} ${roboto.variable}`}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
