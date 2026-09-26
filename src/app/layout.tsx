import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#12130F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Neo Spark Technologies | Student-Run Technology Organization",
  description:
    "A student-run technology organization in Pokhara, Nepal. We design, engineer, and ship real IoT arcade machines, autonomous robotics, and full-stack software products.",
  keywords: [
    "Neo Spark Technologies",
    "Student Technology Organization",
    "IoT",
    "Robotics",
    "DuoPong",
    "The Yatri",
    "Pokhara",
    "Nepal",
    "Student-Built Hardware",
    "Autonomous Car",
    "Full-Stack Engineering",
  ],
  authors: [{ name: "Neo Spark Technologies", url: "https://neospark.tech" }],
  creator: "Neo Spark Technologies",
  publisher: "Neo Spark Technologies",
  metadataBase: new URL("https://neospark.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neo Spark Technologies | Student-Run Technology Organization",
    description:
      "Built by students. Trusted beyond the classroom. Shipped IoT hardware, hackathon winners, and full-stack platforms from Pokhara, Nepal.",
    url: "https://neospark.tech",
    siteName: "Neo Spark Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/group-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Neo Spark Technologies Builders Cohort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Spark Technologies",
    description: "Built by students. Trusted beyond the classroom.",
    images: ["/images/group-photo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neo Spark Technologies",
    url: "https://neospark.tech",
    logo: "https://neospark.tech/favicon.svg",
    description:
      "A student-run technology organization based in Pokhara, Nepal that designs, builds, and delivers real hardware and software products.",
    email: "neosparktechnologies@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pokhara",
      addressCountry: "NP",
    },
    sameAs: [
      "https://github.com/neospark-technologies",
      "https://instagram.com/neospark.tech",
      "https://linkedin.com/company/neospark-technologies",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        {/* Prevent browser extensions (Bitdefender, ColorZilla, McAfee, etc.) from injecting DOM attributes that cause React hydration mismatches */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && typeof Element !== 'undefined') {
                  var origSetAttribute = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, val) {
                    if (name === 'bis_skin_checked' || name === 'bis_register' || name === 'data-colorzilla') {
                      return;
                    }
                    return origSetAttribute.apply(this, arguments);
                  };
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
