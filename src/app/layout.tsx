import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapOG — Beautiful OG Images in Milliseconds",
  description:
    "Generate stunning social preview images for Twitter, Facebook, and LinkedIn. Free OG image generator with templates, themes, and a simple API.",
  keywords: [
    "og image generator",
    "social preview image",
    "open graph image",
    "twitter card image",
    "og image api",
    "meta image generator",
    "social card generator",
  ],
  openGraph: {
    title: "SnapOG — Beautiful OG Images in Milliseconds",
    description: "Generate stunning social preview images. Free templates + simple API.",
    type: "website",
    url: "https://snapog-teal.vercel.app",
    siteName: "SnapOG",
    images: [{
      url: "https://snapog-teal.vercel.app/api/og?title=SnapOG&description=Beautiful+OG+Images+in+Milliseconds&theme=ocean&template=product&siteName=snapog&accent=%2338bdf8",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapOG — Beautiful OG Images in Milliseconds",
    description: "Generate stunning social preview images. Free API, no signup.",
    images: ["https://snapog-teal.vercel.app/api/og?title=SnapOG&description=Beautiful+OG+Images+in+Milliseconds&theme=ocean&template=product&siteName=snapog&accent=%2338bdf8"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "SnapOG",
              "url": "https://snapog-teal.vercel.app",
              "description": "Generate beautiful OG images for social media with a simple URL API. 5 templates, 6 themes, no signup required.",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "OG Image Generator",
                "Social Preview API",
                "5 Professional Templates",
                "6 Color Themes",
                "Custom Accent Colors",
                "No API Key Required"
              ]
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
