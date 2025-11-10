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

// ——————————————————————————————————————
// TOP GOOGLE SEARCH KEYWORDS (2025)
// ——————————————————————————————————————
const TOP_KEYWORDS = [
  "MERN Stack Developer",
  "Next.js Developer",
  "React.js Developer",
  "TypeScript Developer",
  "Full Stack Developer Bangladesh",
  "AI Web Developer",
  "E-commerce Developer",
  "Real-time Chat App",
  "OpenAI Integration",
  "WebSocket Developer",
  "ShadCN UI Expert",
  "Framer Motion Developer",
  "SEO Optimized Web App",
  "SSR ISR SSG Next.js",
  "Portfolio Developer Dhaka",
  "Frontend Developer",
  
  "Freelance Web Developer",
  "MongoDB Node.js Express",
  
];

export const metadata: Metadata = {
  // ———————— Core SEO ————————
  title: {
    default: "Md Rabiul Hasan | MERN & Next.js Full Stack Developer",
    template: "%s | Md Rabiul Hasan",
  },
  description:
    "MERN & Next.js Full Stack Developer from Bangladesh. Expert in React.js, TypeScript, AI integration, real-time apps, e-commerce, and SEO-optimized web apps. Currently at SM Technology, Banasree, Dhaka.",
  keywords: TOP_KEYWORDS,
  authors: [{ name: "Md Rabiul Hasan", url: "https://md-rabiul-hasan.vercel.app" }],
  creator: "Md Rabiul Hasan",
  publisher: "Md Rabiul Hasan",

  // ———————— Open Graph (Facebook, LinkedIn) ————————
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-rabiul-hasan.vercel.app",
    siteName: "Md Rabiul Hasan Portfolio",
    title: "Md Rabiul Hasan | MERN & Next.js Developer | Bangladesh",
    description:
      "Full Stack Developer specializing in MERN, Next.js, TypeScript, AI, real-time apps, and e-commerce. Based in Banasree, Dhaka. Currently at SM Technology.",
    images: [
      {
        url: "https://md-rabiul-hasan.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Rabiul Hasan - Full Stack Developer",
      },
    ],
  },

  // ———————— Twitter Cards ————————
  twitter: {
    card: "summary_large_image",
    site: "@rabiul7224",
    creator: "@rabiul7224",
    title: "Md Rabiul Hasan | MERN & Next.js Developer",
    description:
      "MERN, Next.js, AI, Real-time, E-commerce. Full Stack Developer from Dhaka, Bangladesh.",
    images: "https://md-rabiul-hasan.vercel.app/og-image.jpg",
  },

  // ———————— Robots & Viewport ————————
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ———————— Canonical URL ————————
  alternates: {
    canonical: "https://md-rabiul-hasan.vercel.app",
  },

  // ———————— Verification ————————
  verification: {
    google: "your-google-site-verification",
  },
};

// ———————— Structured Data (JSON-LD) ————————
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Rabiul Hasan",
  jobTitle: "Full Stack Developer",
  description:
    "MERN & Next.js Developer from Bangladesh. Expert in React, TypeScript, AI, WebSocket, e-commerce, and SEO.",
  url: "https://md-rabiul-hasan.vercel.app",
  image: "https://md-rabiul-hasan.vercel.app/rabiul.jpg",
  sameAs: [
    "https://github.com/rabiulkhan7224",
    "https://linkedin.com/in/md-rabiul-hasan7224",
    "https://twitter.com/rabiul7224",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressRegion: "Banasree",
    addressCountry: "BD",
  },
  worksFor: {
    "@type": "Organization",
    name: "SM Technology",
    location: "Banasree, Dhaka, Bangladesh",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Your University",
  },
  knowsAbout: TOP_KEYWORDS.slice(0, 10),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ———————— Favicon ———————— */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />

        {/* ———————— Structured Data ———————— */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ———————— Live BD Time Meta (Optional) ———————— */}
        <meta name="current-time" content="November 10, 2025 10:00 PM +06" />
        <meta name="country" content="BD" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
