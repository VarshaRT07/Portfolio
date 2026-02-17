import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varsha Nandhini — Full Stack Engineer",
  description:
    "Full stack engineer building modern web applications with React, Next.js, and TypeScript. Passionate about creating performant, accessible user experiences.",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Full Stack Engineer",
  ],
  authors: [{ name: "Varsha Nandhini" }],
  creator: "Varsha Nandhini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-phi-gray-36.vercel.app/",
    title: "Varsha Nandhini — Full Stack Engineer",
    description:
      "Full stack engineer building modern web applications with React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varsha Nandhini — Full Stack Engineer",
    description:
      "Full stack engineer building modern web applications with React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
