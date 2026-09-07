import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { concerns, site } from "@/lib";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Programmatic SEO, MERN & Cloud Engineering`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "programmatic SEO",
    "MERN stack development",
    "Next.js developer",
    "web application scaling",
    "cloud hosting",
    "AI integration",
    "DevOps deployment",
    "IT support",
    "SNaeem IT",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Programmatic SEO, MERN & Cloud Engineering`,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Programmatic SEO, MERN & Cloud Engineering`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  logo: `${site.url}/logo-round.svg`,
  image: `${site.url}/og-image.png`,
  description: site.description,
  areaServed: "Worldwide",
  serviceType: [
    "Programmatic SEO",
    "MERN Web Application Development",
    "Web Application Scaling",
    "Cloud Hosting & Infrastructure",
    "AI Integration",
    "Deployment & DevOps",
    "IT Support",
  ],
  sameAs: Object.values(site.social),
  owns: concerns.map((c) => ({
    "@type": "WebSite",
    name: c.name,
    url: c.url,
    description: c.description,
  })),
  subOrganization: concerns.map((c) => ({
    "@type": "Organization",
    name: c.name,
    url: c.url,
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
