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
        url: "/images/winnerofduopongandhackatontruphies.JPG",
        width: 1200,
        height: 630,
        alt: "Neo Spark Technologies Builders Cohort with Championship Trophies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Spark Technologies",
    description: "Built by students. Trusted beyond the classroom.",
    images: ["/images/winnerofduopongandhackatontruphies.JPG"],
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
        {/* Neutralize browser extensions (Bitdefender, ColorZilla, etc.) injecting attributes before or during React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                var badAttrs = ['bis_skin_checked', 'bis_register', 'data-colorzilla', 'bis_status', 'bis_use'];
                function isBad(name) {
                  return badAttrs.indexOf(name) !== -1 || (name && name.indexOf('bis_') === 0) || (name && name.indexOf('data-dynamic-id') === 0);
                }
                function sanitizeNode(el) {
                  if (!el || !el.removeAttribute) return;
                  for (var i = 0; i < badAttrs.length; i++) {
                    if (el.hasAttribute && el.hasAttribute(badAttrs[i])) {
                      el.removeAttribute(badAttrs[i]);
                    }
                  }
                  if (el.tagName === 'SCRIPT' && el.getAttribute('type') === 'application/ld+json') {
                    if (el.hasAttribute('bis_use')) el.removeAttribute('bis_use');
                  }
                }
                if (typeof Element !== 'undefined') {
                  var origSet = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, val) {
                    if (isBad(name)) return;
                    if (this.tagName === 'SCRIPT' && typeof val === 'string' && val.indexOf('chrome-extension://') === 0) return;
                    return origSet.apply(this, arguments);
                  };
                  var origSetNS = Element.prototype.setAttributeNS;
                  if (origSetNS) {
                    Element.prototype.setAttributeNS = function(ns, name, val) {
                      if (isBad(name)) return;
                      if (this.tagName === 'SCRIPT' && typeof val === 'string' && val.indexOf('chrome-extension://') === 0) return;
                      return origSetNS.apply(this, arguments);
                    };
                  }
                  var origSetNode = Element.prototype.setAttributeNode;
                  if (origSetNode) {
                    Element.prototype.setAttributeNode = function(attr) {
                      if (attr && isBad(attr.name)) return null;
                      return origSetNode.apply(this, arguments);
                    };
                  }
                }
                if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined') {
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && isBad(m.attributeName)) {
                        m.target.removeAttribute(m.attributeName);
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var node = m.addedNodes[j];
                          if (node.nodeType === 1) {
                            sanitizeNode(node);
                          }
                        }
                      }
                    }
                  });
                  var target = document.documentElement || document;
                  observer.observe(target, { attributes: true, subtree: true, childList: true });
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        {/* Valid JSON-LD structured data placed in body with suppressHydrationWarning to prevent extension tampering */}
        <script
          id="schema-org-ldjson"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
