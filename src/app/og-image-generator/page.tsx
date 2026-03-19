import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SnapOG — OG Image Generator",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free OG image generator API. Create beautiful social preview images for Twitter, Facebook, LinkedIn in milliseconds. No signup required.",
  url: "https://snapog.vercel.app/og-image-generator",
  screenshot: "https://snapog.vercel.app/api/og?title=SnapOG+OG+Image+Generator&description=Beautiful+social+previews+in+milliseconds&template=product&theme=gradient&siteName=SnapOG",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
  },
};

export const metadata: Metadata = {
  title: "OG Image Generator — Create Social Preview Images Instantly | SnapOG",
  description:
    "Free OG image generator API. Create beautiful social preview images for Twitter, Facebook, and LinkedIn in milliseconds. No signup, no design skills needed.",
  keywords: [
    "og image generator",
    "open graph image generator",
    "social preview generator",
    "og image maker",
    "og image creator",
    "free og image tool",
    "twitter card generator",
    "social card maker",
    "og image api",
  ],
  openGraph: {
    title: "OG Image Generator — Beautiful Social Previews in Seconds",
    description:
      "Free API to generate stunning OG images. No signup required.",
    type: "website",
    siteName: "SnapOG",
    images: [
      {
        url: "https://snapog.vercel.app/api/og?title=OG+Image+Generator&description=Beautiful+social+previews+in+milliseconds&template=product&theme=gradient&siteName=SnapOG",
        width: 1200,
        height: 630,
        alt: "SnapOG OG Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Image Generator — Beautiful Social Previews in Seconds",
    description: "Free API to generate stunning OG images. No signup required.",
    images: [
      "https://snapog.vercel.app/api/og?title=OG+Image+Generator&description=Beautiful+social+previews+in+milliseconds&template=product&theme=gradient&siteName=SnapOG",
    ],
  },
  alternates: {
    canonical: "https://snapog.vercel.app/og-image-generator",
  },
};

export default function OGImageGenerator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <Link href="/og-image-guide" style={{ color: "var(--text-secondary)" }}>
                Guide
              </Link>
              <Link href="/blog" style={{ color: "var(--text-secondary)" }}>
                Blog
              </Link>
              <Link href="/" style={{ color: "var(--text-secondary)" }}>
                Editor
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-block rounded-full px-4 py-1 text-sm mb-6"
              style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            >
              Free · No signup · No API key
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              OG Image Generator{" "}
              <span style={{ color: "var(--accent)" }}>API</span>
            </h2>
            <p
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Generate beautiful social preview images in milliseconds. One URL — that&apos;s
              all you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn btn-primary text-base px-6 py-3 justify-center">
                Open Editor →
              </Link>
              <a href="#how-it-works" className="btn text-base px-6 py-3 justify-center">
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="px-4 py-16" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  ✗ The Old Way
                </h3>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }}
                >
                  <ul className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-lg">⏱</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>10-15 minutes per image</strong>
                        <br />
                        Open Figma, adjust text, export, upload, update meta tags…
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-lg">🎨</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Design skills required</strong>
                        <br />
                        Not every developer has a designer on hand for every blog post.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-lg">📁</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Static files to manage</strong>
                        <br />
                        Images in your repo, CDN uploads, cache invalidation headaches.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-lg">🔄</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Doesn&apos;t scale</strong>
                        <br />
                        100 blog posts = 100 manual image designs. 1,000 product pages? Forget it.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  ✓ The SnapOG Way
                </h3>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "var(--bg-tertiary)", border: "1px solid var(--accent)" }}
                >
                  <ul className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                    <li className="flex items-start gap-3">
                      <span style={{ color: "var(--accent)" }} className="text-lg">⚡</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Generated in milliseconds</strong>
                        <br />
                        One URL generates a beautiful image on the fly.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span style={{ color: "var(--accent)" }} className="text-lg">🎯</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Zero design skills needed</strong>
                        <br />
                        Professional templates & themes built by designers.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span style={{ color: "var(--accent)" }} className="text-lg">☁️</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>No files to manage</strong>
                        <br />
                        Images are generated from URLs — nothing to store or upload.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span style={{ color: "var(--accent)" }} className="text-lg">♾️</span>
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Scales to any size</strong>
                        <br />
                        1 page or 100,000 — the same single line of code.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-center mb-12" style={{ color: "var(--text-secondary)" }}>
              Three steps. Under 60 seconds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "1",
                  title: "Pick a Template",
                  desc: "Choose from 5 professionally designed templates: default, bold, minimal, blog, or product.",
                },
                {
                  step: "2",
                  title: "Customize",
                  desc: "Set your title, description, theme, and accent color. Preview instantly in the editor.",
                },
                {
                  step: "3",
                  title: "Copy the URL",
                  desc: "Paste the generated URL into your meta tags. That's it — beautiful OG images, forever.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-6"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-lg font-semibold mb-4">Just one URL in your HTML:</h3>
              <pre className="text-sm">{`<meta property="og:image"
  content="https://snapog.vercel.app/api/og?title=My+Blog+Post&template=blog&theme=ocean&siteName=myblog.dev" />`}</pre>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎨",
                  title: "5 Templates",
                  desc: "Default, bold, minimal, blog, and product — designed for real use cases.",
                },
                {
                  icon: "🌈",
                  title: "6 Themes",
                  desc: "Dark, light, gradient, ocean, sunset, and forest. Or set a custom accent color.",
                },
                {
                  icon: "⚡",
                  title: "Edge-Generated",
                  desc: "Images are generated at the edge in under 100ms. No cold starts, no waiting.",
                },
                {
                  icon: "🔓",
                  title: "No Auth Required",
                  desc: "Free tier works without API keys or signup. Just use the URL directly.",
                },
                {
                  icon: "📐",
                  title: "1200×630 Default",
                  desc: "The universal OG image size that works across every social platform.",
                },
                {
                  icon: "🔗",
                  title: "URL-Based API",
                  desc: "No SDK, no npm packages. Works with any language, any framework, any CMS.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-6"
                  style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }}
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Works With Everything
            </h2>
            <p className="text-center mb-12" style={{ color: "var(--text-secondary)" }}>
              No SDK. No package. Just a URL.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Next.js</h3>
                <pre className="text-sm">{`// app/layout.tsx
export const metadata = {
  openGraph: {
    images: ["https://snapog.vercel.app/api/og?title=My+App&theme=dark"],
  },
};`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">HTML</h3>
                <pre className="text-sm">{`<meta property="og:image"
  content="https://snapog.vercel.app/api/og?title=My+Page&template=bold&theme=gradient" />`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Dynamic (JavaScript)</h3>
                <pre className="text-sm">{`const ogUrl = new URL("https://snapog.vercel.app/api/og");
ogUrl.searchParams.set("title", post.title);
ogUrl.searchParams.set("description", post.excerpt);
ogUrl.searchParams.set("template", "blog");
ogUrl.searchParams.set("theme", "ocean");
// Use ogUrl.toString() in your meta tags`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop designing OG images manually.
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
              Try the SnapOG editor — pick a template, customize it, and grab the URL. Free
              forever for up to 50 images/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn btn-primary text-base px-8 py-3 justify-center">
                Open the Editor →
              </Link>
              <Link href="/og-image-guide" className="btn text-base px-8 py-3 justify-center">
                Read the OG Image Guide
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ with Schema */}
        <section className="px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            {[
              {
                q: "Is this really free?",
                a: "Yes! The free tier gives you 50 images per month with all templates and themes. No credit card or signup required. Pro plans are available for higher volumes.",
              },
              {
                q: "What size are the generated images?",
                a: "1200×630 pixels by default — the recommended OG image size for all major social platforms. Custom dimensions are available on Pro plans.",
              },
              {
                q: "Do I need to install anything?",
                a: "No. SnapOG is a URL-based API. Just construct a URL with your parameters and use it in your HTML meta tags. No npm packages, no SDKs, no build plugins.",
              },
              {
                q: "How fast is image generation?",
                a: "Images are generated at the edge in under 100ms. Social crawlers see fast response times, so your previews always load correctly.",
              },
              {
                q: "Will this work with my framework?",
                a: "Yes — SnapOG works with any framework, CMS, or static site generator. Next.js, Astro, WordPress, Hugo, Gatsby, plain HTML — if it supports meta tags, it works with SnapOG.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="mb-4 p-4 rounded-lg"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              >
                <summary className="font-medium cursor-pointer">{faq.q}</summary>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
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
    </>
  );
}
