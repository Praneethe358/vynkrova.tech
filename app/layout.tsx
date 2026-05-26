import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/* ─── Site-wide base URL ─── */
const BASE_URL = "https://vynkrova.tech";

/* ─── JSON-LD Structured Data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Praneethe",
      url: BASE_URL,
      jobTitle: "AI Automation Developer & Full Stack Engineer",
      description:
        "Freelance AI automation developer and full-stack engineer based in India, specializing in intelligent business automation, AI integrations, LangChain, OpenAI, and scalable web platforms.",
      knowsAbout: [
        "AI Automation",
        "Full Stack Development",
        "LangChain",
        "OpenAI Integration",
        "Workflow Automation",
        "n8n Automation",
        "Next.js",
        "React",
        "Python",
        "Generative AI",
        "Computer Vision",
        "AI Chatbot Development",
      ],
      sameAs: [
        "https://linkedin.com/in/vynkrova",
        "https://github.com/Praneethe358",
      ],
      email: "hello@vynkrova.tech",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "India",
      },
      worksFor: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      name: "Vynkrova Tech",
      alternateName: "Vynkrova",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-icon.png`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}/logo-navbar.png`,
      description:
        "Vynkrova Tech is an AI automation and full-stack development agency helping startups and businesses build intelligent automation systems, AI-powered web platforms, and scalable digital solutions.",
      email: "hello@vynkrova.tech",
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "AI Automation Development",
        "Workflow Automation",
        "Full Stack Web Development",
        "AI Chatbot Development",
        "OpenAI Integration",
        "LangChain Development",
        "n8n Automation",
        "Computer Vision",
        "AI Consulting",
        "API Integration Services",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI & Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Automation Systems",
              description:
                "Intelligent workflow automation systems using LangChain, OpenAI, and n8n that eliminate manual processes and reduce operational costs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Development",
              description:
                "End-to-end web application development using Next.js, React, Node.js, and cloud infrastructure.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Chatbot Development",
              description:
                "Conversational AI agents and customer support bots powered by large language models and generative AI.",
            },
          },
        ],
      },
      founder: { "@id": `${BASE_URL}/#person` },
      sameAs: [
        "https://linkedin.com/in/vynkrova",
        "https://github.com/Praneethe358",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Vynkrova Tech",
      description:
        "AI Automation Developer & Full Stack Engineer — Building intelligent business automation systems and scalable web platforms.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Automation Developer",
          item: `${BASE_URL}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: `${BASE_URL}/#services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Projects",
          item: `${BASE_URL}/#projects`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: `${BASE_URL}/#contact`,
        },
      ],
    },
  ],
};

/* ─── Page Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Vynkrova Tech | AI Automation Developer & Full Stack Engineer",
    template: "%s | Vynkrova Tech",
  },

  description:
    "Vynkrova Tech — Freelance AI automation developer and full-stack engineer based in India. Specializing in AI workflow automation, LangChain, OpenAI integrations, chatbot development, and scalable Next.js web platforms for startups and businesses worldwide.",

  keywords: [
    // Primary
    "AI Automation Developer",
    "AI Automation Services",
    "Full Stack Developer",
    "AI Web Development",
    "AI Solutions Agency",
    "Business Automation",
    "Workflow Automation",
    "AI Chatbot Development",
    "AI Integration Services",
    "Generative AI Developer",
    "Automation Systems",
    "Modern Web Applications",
    "AI SaaS Development",
    "AI Workflow Systems",
    "Intelligent Automation",
    // Secondary
    "Next.js Developer",
    "React Developer",
    "LangChain Developer",
    "OpenAI Integration",
    "AI Dashboard Development",
    "Custom AI Solutions",
    "Startup Web Development",
    "Scalable Web Applications",
    "API Integration Services",
    "AI Consulting",
    "n8n Automation",
    "AI-powered Applications",
    "Full Stack AI Engineer",
    // Local
    "AI Developer India",
    "Freelance AI Developer",
    "AI Automation Freelancer",
    "AI Solutions for Businesses",
    "Full Stack Developer India",
    // Brand
    "Vynkrova Tech",
    "Vynkrova",
  ],

  authors: [{ name: "Praneethe", url: BASE_URL }],
  creator: "Praneethe",
  publisher: "Vynkrova Tech",
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Vynkrova Tech",
    title: "Vynkrova Tech | AI Automation Developer & Full Stack Engineer",
    description:
      "Freelance AI automation developer and full-stack engineer. Building intelligent automation systems, AI integrations, and scalable web platforms for businesses worldwide.",
    locale: "en_US",
    images: [
      {
        url: "/logo-navbar.png",
        width: 1200,
        height: 630,
        alt: "Vynkrova Tech — AI Automation Developer & Full Stack Engineer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vynkrova Tech | AI Automation Developer & Full Stack Engineer",
    description:
      "Freelance AI automation developer & full-stack engineer. Specializing in LangChain, OpenAI, n8n workflow automation, and scalable Next.js platforms.",
    images: [
      {
        url: "/logo-navbar.png",
        alt: "Vynkrova Tech — AI Automation Developer",
      },
    ],
    creator: "@vynkrova",
  },

  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/logo-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo-icon.png",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    // Add your Google Search Console verification token here
    // google: "your-google-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} h-full antialiased`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
