import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praneeth | AI Automation & Full Stack Developer",
  description:
    "I help startups and businesses automate workflows, build scalable web platforms, and integrate AI-powered solutions that save time and increase efficiency.",
  keywords: [
    "AI Automation",
    "Full Stack Developer",
    "GenAI",
    "Web Development",
    "Freelancer",
    "Next.js",
  ],
  openGraph: {
    title: "Praneeth | AI Automation & Full Stack Developer",
    description:
      "Building intelligent digital experiences for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col noise-overlay">
        {children}
      </body>
    </html>
  );
}
