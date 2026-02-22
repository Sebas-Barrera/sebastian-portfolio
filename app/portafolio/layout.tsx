import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sebastián Barrera | Desarrollador Full Stack, Ingeniero de Software",
  description:
    "Desarrollador full stack profesional especializado en creación de páginas web, aplicaciones móviles y sistemas backend. Ingeniero de software con experiencia en Next.js, React Native, Node.js, Angular, Vue.js. Transformo ideas en soluciones digitales escalables y de alto rendimiento.",
  keywords: [
    "Sebastián Barrera",
    "desarrollador full stack",
    "creador de páginas web",
    "ingeniero de software",
    "desarrollo web profesional",
    "desarrollo de aplicaciones móviles",
    "programador full stack",
    "desarrollo Next.js",
    "desarrollo React Native",
    "creación de sitios web",
    "desarrollo backend",
    "programador México",
    "desarrollador freelance",
    "soluciones digitales",
    "software a medida",
  ],
  authors: [
    {
      name: "Sebastián Barrera",
      url: "https://sebastian-portafolio.vercel.app",
    },
  ],
  creator: "Sebastián Barrera",
  publisher: "Sebastián Barrera",
  alternates: {
    canonical: "https://sebastian-portafolio.vercel.app/portafolio",
  },
  openGraph: {
    type: "profile",
    locale: "es_MX",
    url: "https://sebastian-portafolio.vercel.app/portafolio",
    siteName: "Sebastián Barrera Portfolio",
    title:
      "Sebastián Barrera | Desarrollador Full Stack, Ingeniero de Software",
    description:
      "Desarrollador full stack profesional especializado en creación de páginas web, aplicaciones móviles y sistemas backend. Transformo ideas en soluciones digitales escalables.",
    images: [
      {
        url: "/logos/SebasInge.png",
        width: 1200,
        height: 630,
        alt: "Sebastián Barrera - Desarrollo de Software Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sebastián Barrera | Desarrollador Full Stack, Ingeniero de Software",
    description:
      "Desarrollador full stack profesional especializado en creación de páginas web y aplicaciones móviles. Next.js, React Native, Node.js.",
    images: ["/logos/SebasInge.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
