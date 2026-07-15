import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  keywords: [
    // Location-based
    "best event management in Kerala",
    "best corporate event management in Kerala",
    "best event management in Kochi",
    "best corporate event management in Kochi",
    "top corporate event management company in Kerala",
    "corporate event planners in Kochi",
    "corporate event planners in Kerala",
    // General services
    "corporate event management",
    "corporate event planner",
    "corporate event management company",
    "business event management",
    "professional event planning",
    "corporate event organiser",
    "corporate event solutions",
    "event management services",
    "corporate event agency",
    "event planning company",
    // Event types
    "conference management",
    "annual day event management",
    "product launch events",
    "award night management",
    "employee engagement events",
    "team building events",
    "dealer meet management",
    "channel partner meet",
    "corporate offsite planning",
    "leadership summit management",
    "town hall event management",
    "corporate training events",
    // Brand
    "Orbinoz",
    "Orbinoz Event Planners",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: "Event Planning",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: SITE.locale,
    images: [
      { url: SITE.ogImage, width: 2200, height: 1467, alt: SITE.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0b" },
  ],
};

// Runs synchronously during HTML parsing, before first paint, so the saved
// theme is applied with no flash. Defaults to light when nothing is saved. See
// Next's "preventing flash before hydration" guide.
const themeScript = `(function(){try{var t=localStorage.getItem("theme")==="dark"?"dark":"light";var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t}catch(e){}})()`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.legalName,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.telephone,
  email: SITE.email,
  image: `${SITE.url}${SITE.ogImage}`,
  logo: `${SITE.url}/icons/logo-black.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Kochi" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Corporate Event Management",
    "Conference Management",
    "Product Launch Events",
    "Award Night Management",
    "Dealer Meet Management",
    "Brand Activations",
    "Employee Engagement Events",
    "Stage & Production",
  ],
  keywords: (metadata.keywords as string[]).join(", "),
  sameAs: SITE.socials,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
