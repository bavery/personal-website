import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const fontMain = DM_Sans({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Avery - Software Engineer",
  description: "Software Engineer, Web Developer, Guy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMain.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
