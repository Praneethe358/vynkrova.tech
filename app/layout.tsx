import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vynkrova Tech | AI Automation & Full Stack Development",
  description:
    "Vynkrova Tech helps startups and businesses automate workflows, build scalable web platforms, and integrate AI-powered solutions that save time and increase efficiency.",
  keywords: [
    "AI Automation",
    "Full Stack Developer",
    "GenAI",
    "Web Development",
    "Freelancer",
    "Next.js",
    "Vynkrova Tech",
  ],
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Vynkrova Tech | AI Automation & Full Stack Development",
    description:
      "Building intelligent digital experiences for modern businesses.",
    type: "website",
    images: [{ url: "/logo-navbar.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
