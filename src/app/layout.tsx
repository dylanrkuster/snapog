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
    siteName: "SnapOG",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
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
