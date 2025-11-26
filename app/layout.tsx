import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const popins = Poppins({
  subsets: ["latin"],
  variable: "--font-popins",
  weight: "400",
})

export const metadata: Metadata = {
  title: "SPATIAL INFRA CONEX 2026",
  description: "International Conference on Spatial Planning and Infrastructure for Sustainable Development",
  icons: {
    icon: "/logo-ispasi-icon.png",
    apple: "/logo-ispasi-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${popins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}