import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import Loading from "./Loading";
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
  title: "Md Rabiul Hasan | MERN Stack Developer",
  
  description:
    "Portfolio of Md Rabiul Hasan, a MERN Stack Developer specializing in React.js, Node.js, Express.js and MongoDB.",
  // Add more metadata for better SEO
  keywords: "MERN stack, developer, React.js, Node.js, Express.js, MongoDB, portfolio, web development",
  authors: [{ name: "Md Rabiul Hasan" }],
  // Add Open Graph metadata for better social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-rabiul-hasan.vercel.app",
    title: "Md Rabiul Hasan | MERN Stack Developer",
    description:
      "Portfolio of Md Rabiul Hasan, a MERN Stack Developer specializing in React.js, Node.js, Express.js and MongoDB.",
    siteName: "Md Rabiul Hasan Portfolio",
  },
  
  // Add  Card metadata for better Twitter sharing
  
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Navbar/>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
