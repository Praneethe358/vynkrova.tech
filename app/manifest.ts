import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vynkrova Tech — AI Automation & Full Stack Development",
    short_name: "Vynkrova Tech",
    description:
      "Freelance AI automation developer and full-stack engineer. Building intelligent automation systems and scalable web platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#141414",
    theme_color: "#e2231a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity", "technology"],
    lang: "en",
    dir: "ltr",
  };
}
