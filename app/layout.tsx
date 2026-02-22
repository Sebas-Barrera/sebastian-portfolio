import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexdevTech | Agencia de Desarrollo de Software",
  description:
    "Agencia de desarrollo de software integral. Especializados en desarrollo web moderno, aplicaciones móviles multiplataforma y arquitecturas backend escalables. Creamos productos digitales de alto rendimiento.",
  keywords: [
    "NexdevTech",
    "Agencia de Software",
    "Agencia de Desarrollo",
    "Techvision",
    "desarrollo web profesional",
    "desarrollo de aplicaciones móviles",
    "desarrollo Next.js",
    "desarrollo React Native",
    "creación de sitios web",
    "desarrollo backend",
    "programador México",
    "desarrollador freelance",
    "soluciones digitales",
    "software a medida",
  ],
  authors: [{ name: "NexdevTech", url: "https://nexdevlabs.com" }],
  creator: "NexdevTech",
  publisher: "NexdevTech",
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
  alternates: {
    canonical: "https://nexdevlabs.com",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://nexdevlabs.com",
    siteName: "NexdevTech",
    title: "NexdevTech | Agencia de Desarrollo de Software",
    description:
      "Agencia de desarrollo de software integral. Especializados en desarrollo web moderno, aplicaciones móviles multiplataforma y arquitecturas backend escalables. Creamos productos digitales de alto rendimiento.",
    images: [
      {
        url: "/logos/logoND.png",
        width: 1200,
        height: 630,
        alt: "NexdevTech - Agencia de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexdevTech | Agencia de Desarrollo de Software",
    description:
      "Agencia de desarrollo de software integral. Especializados en desarrollo web moderno, aplicaciones móviles multiplataforma y arquitecturas backend escalables.",
    images: ["/logos/logoND.png"],
  },
  verification: {
    google: "4sPdVfA71z6-YE56qVPXqH91B--YCB7zx8rUzFjcB_o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
