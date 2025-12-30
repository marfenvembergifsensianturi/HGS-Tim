import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "PT. Hema Glori Sejahtera - Ekspedisi Truk Terpercaya",
  description: "Layanan pengiriman barang profesional dengan armada truk modern. Jasa ekspedisi terpercaya untuk kebutuhan logistik bisnis Anda.",
  keywords: "jasa pengiriman barang, ekspedisi truk, sewa truk, logistik",
  authors: [{ name: "PT. Hema Glori Sejahtera" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-white text-slate-800`}>{children}</body>
    </html>
  );
}