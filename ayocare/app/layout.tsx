import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });
const font_sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ['300', '400', '500','600', '700'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "AyoCare",
  description: "A comprehensive healthcare management system for its users",
  icons: {
    icon: '/assets/icons/logo-icon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', font_sans.variable)}>{children}</body>
    </html>
  );
}
