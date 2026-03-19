import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — SnapOG | OG Image Tips, Guides & Best Practices",
  description:
    "Guides, tutorials, and best practices for OG images, social previews, and the SnapOG API. Learn how to boost your click-through rates with better social cards.",
  openGraph: {
    title: "SnapOG Blog — OG Image Tips & Guides",
    description:
      "Guides, tutorials, and best practices for OG images and social previews.",
    type: "website",
    siteName: "SnapOG",
    images: [
      {
        url: "https://snapog.vercel.app/api/og?title=SnapOG+Blog&description=OG+Image+Tips%2C+Guides+%26+Best+Practices&template=default&theme=dark&siteName=SnapOG",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapOG Blog — OG Image Tips & Guides",
    images: [
      "https://snapog.vercel.app/api/og?title=SnapOG+Blog&description=OG+Image+Tips%2C+Guides+%26+Best+Practices&template=default&theme=dark&siteName=SnapOG",
    ],
  },
  alternates: {
    canonical: "https://snapog.vercel.app/blog",
  },
};

const articles = [
  {
    title: "The Complete Guide to OG Images in 2025",
    description:
      "Everything you need to know about Open Graph images: what they are, why they matter, platform-specific sizes, implementation tips, and how to automate OG image generation.",
    href: "/og-image-guide",
    tag: "Guide",
    readTime: "12 min read",
    date: "June 2025",
  },
  {
    title: "OG Image Generator — Create Social Preview Images Instantly",
    description:
      "Stop designing OG images manually. Learn how SnapOG's free API generates beautiful social preview images in milliseconds from a single URL.",
    href: "/og-image-generator",
    tag: "Product",
    readTime: "5 min read",
    date: "June 2025",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">📸</span>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "var(--accent)" }}>
                SnapOG
              </h1>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Beautiful social previews
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/og-image-generator" style={{ color: "var(--text-secondary)" }}>
              Generator
            </Link>
            <Link
              href="/blog"
              style={{ color: "var(--accent)" }}
              className="font-medium"
            >
              Blog
            </Link>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>
              Editor
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" style={{ color: "var(--accent)" }}>
              Home
            </Link>{" "}
            / Blog
          </nav>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">Blog</h2>
          <p className="text-lg mb-12" style={{ color: "var(--text-secondary)" }}>
            Guides, tutorials, and best practices for OG images and social previews.
          </p>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block rounded-xl p-6 transition-colors"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{
                      background: "var(--bg-tertiary)",
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {article.tag}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {article.date}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    · {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {article.description}
                </p>
                <span
                  className="inline-block mt-3 text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          {/* Cross-links */}
          <div
            className="mt-12 rounded-xl p-6 text-center"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <h3 className="text-lg font-semibold mb-2">Build something?</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              Check out our other free developer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="btn btn-primary justify-center">
                SnapOG Editor
              </Link>
              <a
                href="https://jsonbolt.vercel.app"
                className="btn justify-center"
                target="_blank"
                rel="noopener"
              >
                JSONBolt — JSON Formatter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-4 py-8 text-center text-sm"
        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
      >
        <p>
          📸 SnapOG — Beautiful social previews, generated in milliseconds.{" "}
          <a href="https://jsonbolt.vercel.app" style={{ color: "var(--accent)" }}>
            Also try JSONBolt
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
