import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Guide to OG Images in 2025 — Sizes, Best Practices & API",
  description:
    "Everything you need to know about Open Graph images: what they are, why they matter, platform-specific sizes, implementation tips, and how to automate OG image generation with SnapOG.",
  keywords: [
    "og image",
    "open graph image",
    "og image size",
    "og image best practices",
    "social preview image",
    "twitter card image",
    "og image generator",
    "og meta tags",
  ],
  openGraph: {
    title: "The Complete Guide to OG Images in 2025",
    description:
      "Sizes, best practices, platform specs & how to automate OG image generation.",
    type: "article",
    siteName: "SnapOG",
    images: [
      {
        url: "https://snapog.vercel.app/api/og?title=The+Complete+Guide+to+OG+Images&description=Sizes%2C+Best+Practices+%26+API&template=blog&theme=ocean&siteName=SnapOG",
        width: 1200,
        height: 630,
        alt: "The Complete Guide to OG Images",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Complete Guide to OG Images in 2025",
    description:
      "Sizes, best practices, platform specs & how to automate OG image generation.",
    images: [
      "https://snapog.vercel.app/api/og?title=The+Complete+Guide+to+OG+Images&description=Sizes%2C+Best+Practices+%26+API&template=blog&theme=ocean&siteName=SnapOG",
    ],
  },
  alternates: {
    canonical: "https://snapog.vercel.app/og-image-guide",
  },
};

export default function OGImageGuide() {
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
            <Link href="/blog" style={{ color: "var(--text-secondary)" }}>
              Blog
            </Link>
            <Link href="/" style={{ color: "var(--text-secondary)" }}>
              Editor
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="px-4 py-12 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
          <Link href="/" style={{ color: "var(--accent)" }}>
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" style={{ color: "var(--accent)" }}>
            Blog
          </Link>{" "}
          / OG Image Guide
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          The Complete Guide to OG Images in 2025
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
          Everything developers and marketers need to know about Open Graph images — from
          platform specs to automated generation.
        </p>
        <p className="text-sm mb-12" style={{ color: "var(--text-secondary)" }}>
          Last updated: June 2025 · 12 min read
        </p>

        {/* Table of Contents */}
        <div
          className="rounded-xl p-6 mb-12"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <li>
              <a href="#what-are-og-images" style={{ color: "var(--accent)" }}>
                1. What Are OG Images?
              </a>
            </li>
            <li>
              <a href="#why-og-images-matter" style={{ color: "var(--accent)" }}>
                2. Why OG Images Matter for SEO & CTR
              </a>
            </li>
            <li>
              <a href="#platform-specs" style={{ color: "var(--accent)" }}>
                3. Platform-by-Platform Size Guide
              </a>
            </li>
            <li>
              <a href="#best-practices" style={{ color: "var(--accent)" }}>
                4. OG Image Best Practices
              </a>
            </li>
            <li>
              <a href="#meta-tags" style={{ color: "var(--accent)" }}>
                5. Essential Meta Tags for Social Previews
              </a>
            </li>
            <li>
              <a href="#dynamic-generation" style={{ color: "var(--accent)" }}>
                6. Dynamic OG Image Generation
              </a>
            </li>
            <li>
              <a href="#snapog-api" style={{ color: "var(--accent)" }}>
                7. Automating with SnapOG API
              </a>
            </li>
            <li>
              <a href="#frameworks" style={{ color: "var(--accent)" }}>
                8. Framework Integration (Next.js, Astro, etc.)
              </a>
            </li>
            <li>
              <a href="#testing" style={{ color: "var(--accent)" }}>
                9. Testing & Debugging OG Images
              </a>
            </li>
            <li>
              <a href="#common-mistakes" style={{ color: "var(--accent)" }}>
                10. Common Mistakes to Avoid
              </a>
            </li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="what-are-og-images" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. What Are OG Images?</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            OG images — short for <strong style={{ color: "var(--text-primary)" }}>Open Graph images</strong> — are the preview images that appear when you share a URL on social media platforms like Twitter (X), Facebook, LinkedIn, Slack, Discord, and iMessage. They&apos;re defined using the{" "}
            <code>og:image</code> meta tag in your page&apos;s HTML{" "}
            <code>&lt;head&gt;</code>.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            The Open Graph protocol was originally created by Facebook in 2010 to allow web
            pages to become rich objects in a social graph. Since then, it&apos;s been adopted
            universally. When a crawler (like Twitter&apos;s card validator or Slack&apos;s
            unfurler) visits your page, it reads the <code>og:image</code> tag and displays
            that image as a preview alongside the page title and description.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Without an OG image, most platforms either show a blank preview, a random image
            scraped from your page, or a generic placeholder — all of which hurt engagement.
            With a well-crafted OG image, your links stand out in feeds, chat threads, and
            search results.
          </p>
          <pre className="mb-4">{`<!-- Basic OG image meta tag -->
<meta property="og:image" content="https://example.com/my-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Description of the image" />`}</pre>
        </section>

        {/* Section 2 */}
        <section id="why-og-images-matter" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Why OG Images Matter for SEO & CTR</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            OG images have a direct and measurable impact on your traffic. Here&apos;s why
            every page on your site should have one:
          </p>
          <ul className="space-y-3 mb-4" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>✦</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Higher click-through rates (CTR):</strong>{" "}
                Posts with images receive 2-3x more engagement than text-only posts. A
                branded, well-designed OG image acts as a visual billboard in social feeds.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>✦</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Brand consistency:</strong> Every
                share becomes a branded touchpoint. A consistent OG image template reinforces
                recognition across platforms.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>✦</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>SEO signals:</strong> While Google
                doesn&apos;t directly rank pages based on OG images, higher engagement from
                social traffic sends positive behavioral signals. Google also sometimes
                displays OG images in search results (especially Discover).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>✦</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Professional appearance:</strong>{" "}
                Missing or broken OG images make your site look unfinished. A polished preview
                builds trust before the click.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>✦</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Chat app previews:</strong> Slack,
                Discord, iMessage, and WhatsApp all unfurl links with OG images. For internal
                tools or SaaS products, this is free marketing every time someone shares a
                link.
              </span>
            </li>
          </ul>
          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Studies from Buffer and HubSpot have consistently shown that tweets with images
            receive 150% more retweets, and Facebook posts with images see 2.3x more
            engagement than those without.
          </p>
        </section>

        {/* Section 3 */}
        <section id="platform-specs" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Platform-by-Platform Size Guide</h2>
          <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Different social platforms have different requirements for OG images. Here&apos;s a
            comprehensive breakdown for 2025:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  <th className="text-left py-3 pr-4 font-semibold">Platform</th>
                  <th className="text-left py-3 pr-4 font-semibold">Recommended Size</th>
                  <th className="text-left py-3 pr-4 font-semibold">Aspect Ratio</th>
                  <th className="text-left py-3 font-semibold">Max File Size</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--text-secondary)" }}>
                {[
                  ["Facebook", "1200 × 630 px", "1.91:1", "8 MB"],
                  ["Twitter / X", "1200 × 628 px", "1.91:1", "5 MB"],
                  ["LinkedIn", "1200 × 627 px", "1.91:1", "5 MB"],
                  ["Discord", "1200 × 630 px", "1.91:1", "8 MB"],
                  ["Slack", "1200 × 630 px", "1.91:1", "No strict limit"],
                  ["WhatsApp", "1200 × 630 px", "1.91:1", "5 MB"],
                  ["Pinterest", "1000 × 1500 px", "2:3", "20 MB"],
                  ["iMessage", "1200 × 630 px", "1.91:1", "No strict limit"],
                ].map(([platform, size, ratio, maxSize]) => (
                  <tr key={platform} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td className="py-3 pr-4 font-medium" style={{ color: "var(--text-primary)" }}>
                      {platform}
                    </td>
                    <td className="py-3 pr-4">{size}</td>
                    <td className="py-3 pr-4">{ratio}</td>
                    <td className="py-3">{maxSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="rounded-lg p-4 mb-4"
            style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--accent)" }}>💡 Pro tip:</strong> Use{" "}
              <strong style={{ color: "var(--text-primary)" }}>1200 × 630 pixels</strong> as
              your universal OG image size. It works well across every major platform and
              is the de facto standard. This is the default size{" "}
              <Link href="/" style={{ color: "var(--accent)" }}>
                SnapOG
              </Link>{" "}
              generates.
            </p>
          </div>
          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            For file format, <strong style={{ color: "var(--text-primary)" }}>PNG</strong> is
            the safest choice — it&apos;s supported everywhere and preserves text quality.
            JPEG works too if file size is a concern, but avoid transparency (not all
            platforms handle it well). WebP has growing support but isn&apos;t universal yet.
          </p>
        </section>

        {/* Section 4 */}
        <section id="best-practices" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. OG Image Best Practices</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Creating effective OG images goes beyond getting the dimensions right. Here are
            the best practices we recommend:
          </p>

          <h3 className="text-lg font-semibold mb-3">Keep Text Large & Readable</h3>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            OG images are often displayed at small sizes in feeds and chat apps. Use a minimum
            font size of 40px for titles and ensure high contrast between text and background.
            Avoid putting critical text near the edges — some platforms crop slightly.
          </p>

          <h3 className="text-lg font-semibold mb-3">Include Your Brand</h3>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Add your logo, site name, or brand colors to every OG image. This creates a
            consistent experience and makes your content instantly recognizable in crowded
            feeds. Think of each OG image as a mini billboard.
          </p>

          <h3 className="text-lg font-semibold mb-3">Use Dynamic Content</h3>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            For blogs and dynamic pages, generate unique OG images for each page. Generic
            images reduce engagement. With tools like{" "}
            <Link href="/" style={{ color: "var(--accent)" }}>
              SnapOG
            </Link>
            , you can create unique images for every page automatically by simply changing the
            URL parameters.
          </p>

          <h3 className="text-lg font-semibold mb-3">Optimize File Size</h3>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Keep images under 1 MB for fast loading. Large images can cause social crawlers to
            time out, resulting in no preview being shown. SnapOG generates optimized PNGs
            that are typically 50-150 KB.
          </p>

          <h3 className="text-lg font-semibold mb-3">Design for Mobile First</h3>
          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Over 80% of social media usage is on mobile. Preview your OG images at small sizes
            to ensure they&apos;re still readable and impactful. Avoid fine details or small
            body text that disappears at thumbnail scale.
          </p>
        </section>

        {/* Section 5 */}
        <section id="meta-tags" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            5. Essential Meta Tags for Social Previews
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            To ensure your OG images display correctly across all platforms, you need to
            include the right meta tags. Here&apos;s the complete set:
          </p>

          <h3 className="text-lg font-semibold mb-3">Open Graph Tags (Facebook, LinkedIn, Discord, Slack)</h3>
          <pre className="mb-6">{`<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="A compelling description." />
<meta property="og:image" content="https://snapog.vercel.app/api/og?title=Your+Page+Title" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Description for accessibility" />
<meta property="og:url" content="https://yoursite.com/page" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Your Site Name" />`}</pre>

          <h3 className="text-lg font-semibold mb-3">Twitter Card Tags</h3>
          <pre className="mb-6">{`<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Page Title" />
<meta name="twitter:description" content="A compelling description." />
<meta name="twitter:image" content="https://snapog.vercel.app/api/og?title=Your+Page+Title" />
<meta name="twitter:image:alt" content="Description for accessibility" />`}</pre>

          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <strong style={{ color: "var(--text-primary)" }}>Important:</strong> Twitter (X)
            will fall back to OG tags if Twitter-specific tags aren&apos;t present, but
            including both ensures maximum compatibility. Always use{" "}
            <code>summary_large_image</code> for the card type to get the full-width preview.
          </p>
        </section>

        {/* Section 6 */}
        <section id="dynamic-generation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Dynamic OG Image Generation</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Manually creating OG images in Figma or Canva doesn&apos;t scale. If you have a
            blog with 100 posts, a SaaS with user-generated pages, or an e-commerce site
            with thousands of products, you need automated OG image generation.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            There are two main approaches to dynamic OG image generation:
          </p>
          <ul className="space-y-3 mb-4" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>1.</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Build-time generation:</strong>{" "}
                Pre-generate images during your build step using libraries like{" "}
                <code>@vercel/og</code> or <code>satori</code>. Good for static sites, but
                requires a rebuild to update images.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>2.</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>On-demand generation (API):</strong>{" "}
                Generate images at runtime from URL parameters. This is the approach{" "}
                <Link href="/" style={{ color: "var(--accent)" }}>
                  SnapOG
                </Link>{" "}
                uses — you simply construct a URL with your title, theme, and template, and a
                fresh image is generated and cached at the edge.
              </span>
            </li>
          </ul>
          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            The API approach is simpler, more flexible, and doesn&apos;t require any server
            infrastructure. Your meta tags just point to a URL, and the image is generated when
            first requested.
          </p>
        </section>

        {/* Section 7 */}
        <section id="snapog-api" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Automating with SnapOG API</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <Link href="/" style={{ color: "var(--accent)" }}>
              SnapOG
            </Link>{" "}
            provides a free, zero-config API for generating beautiful OG images. No signup, no
            API key, no SDK — just a URL.
          </p>

          <h3 className="text-lg font-semibold mb-3">Basic Usage</h3>
          <pre className="mb-6">{`https://snapog.vercel.app/api/og?title=Hello+World&theme=dark`}</pre>

          <h3 className="text-lg font-semibold mb-3">Full Example with All Parameters</h3>
          <pre className="mb-6">{`https://snapog.vercel.app/api/og
  ?title=The+Complete+Guide+to+OG+Images
  &description=Everything+you+need+to+know
  &template=blog
  &theme=ocean
  &siteName=MyBlog.dev
  &accent=%233b82f6`}</pre>

          <h3 className="text-lg font-semibold mb-3">Available Templates</h3>
          <ul className="space-y-2 mb-6" style={{ color: "var(--text-secondary)" }}>
            {[
              ["default", "Clean, versatile layout for any content"],
              ["bold", "Large text, high impact — great for announcements"],
              ["minimal", "Simple and elegant, no distractions"],
              ["blog", "Optimized for blog posts with title + description"],
              ["product", "Designed for product launches and landing pages"],
            ].map(([name, desc]) => (
              <li key={name} className="flex items-start gap-2">
                <code>{name}</code>
                <span>— {desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-3">Available Themes</h3>
          <ul className="space-y-2 mb-6" style={{ color: "var(--text-secondary)" }}>
            {["dark", "light", "gradient", "ocean", "sunset", "forest"].map((theme) => (
              <li key={theme} className="flex items-center gap-2">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <code>{theme}</code>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-3">In Your HTML</h3>
          <pre className="mb-4">{`<head>
  <meta property="og:image"
    content="https://snapog.vercel.app/api/og?title=My+Blog+Post&template=blog&theme=ocean&siteName=myblog.dev" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image"
    content="https://snapog.vercel.app/api/og?title=My+Blog+Post&template=blog&theme=ocean&siteName=myblog.dev" />
</head>`}</pre>
        </section>

        {/* Section 8 */}
        <section id="frameworks" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            8. Framework Integration (Next.js, Astro, etc.)
          </h2>

          <h3 className="text-lg font-semibold mb-3">Next.js (App Router)</h3>
          <pre className="mb-6">{`// app/blog/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  const ogImage = \`https://snapog.vercel.app/api/og?\${new URLSearchParams({
    title: post.title,
    description: post.excerpt,
    template: "blog",
    theme: "dark",
    siteName: "MyBlog",
  })}\`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}`}</pre>

          <h3 className="text-lg font-semibold mb-3">Astro</h3>
          <pre className="mb-6">{`---
// src/layouts/BlogPost.astro
const { title, description } = Astro.props;
const ogImage = \`https://snapog.vercel.app/api/og?\${new URLSearchParams({
  title,
  description,
  template: "blog",
  theme: "ocean",
})}\`;
---
<head>
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={ogImage} />
</head>`}</pre>

          <h3 className="text-lg font-semibold mb-3">Plain HTML / Any Framework</h3>
          <pre className="mb-4">{`<!-- Works everywhere — just a URL -->
<meta property="og:image"
  content="https://snapog.vercel.app/api/og?title=My+Page&theme=dark" />`}</pre>

          <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Since SnapOG works entirely via URL parameters, it integrates with any framework,
            CMS, or static site generator. No packages to install, no build plugins to
            configure.
          </p>
        </section>

        {/* Section 9 */}
        <section id="testing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. Testing & Debugging OG Images</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            After implementing your OG images, test them using these official tools:
          </p>
          <ul className="space-y-3 mb-4" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>🔍</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Facebook Sharing Debugger</strong>{" "}
                — developers.facebook.com/tools/debug — Scrapes your page and shows exactly
                what Facebook will display. Also clears Facebook&apos;s OG cache.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>🔍</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Twitter Card Validator</strong> —
                cards-dev.twitter.com/validator — Preview how your page will appear on
                Twitter/X.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>🔍</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>LinkedIn Post Inspector</strong> —
                linkedin.com/post-inspector — Test and refresh LinkedIn preview cache.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "var(--accent)" }}>🔍</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>opengraph.xyz</strong> — Preview
                your OG tags across multiple platforms in one view.
              </span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">Common Debugging Steps</h3>
          <ol className="space-y-2 mb-4 list-decimal list-inside" style={{ color: "var(--text-secondary)" }}>
            <li>Open the OG image URL directly in your browser — does it load?</li>
            <li>Check that the URL is an absolute URL (starts with https://)</li>
            <li>Verify the image loads in under 5 seconds (slow servers get timed out)</li>
            <li>Check that the <code>og:image</code> meta tag is in the initial HTML (not injected by JavaScript)</li>
            <li>Use the Facebook Debugger to clear cached previews after changes</li>
          </ol>
        </section>

        {/* Section 10 */}
        <section id="common-mistakes" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">10. Common Mistakes to Avoid</h2>
          <ul className="space-y-4" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Using relative URLs:</strong>{" "}
                The <code>og:image</code> URL must be absolute (include the full domain).
                Social crawlers don&apos;t know your domain from a relative path.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Images too large:</strong> Keep
                OG images under 1 MB. Twitter will reject images over 5 MB entirely.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Client-side rendered meta tags:</strong>{" "}
                Social crawlers don&apos;t execute JavaScript. Your OG tags must be in the
                server-rendered HTML. SPAs (React, Vue) need SSR or pre-rendering.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Using the same image for every page:</strong>{" "}
                Generic OG images reduce CTR. Generate unique images per page — tools
                like <Link href="/" style={{ color: "var(--accent)" }}>SnapOG</Link> make
                this trivial.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Not including dimensions:</strong>{" "}
                Always specify <code>og:image:width</code> and{" "}
                <code>og:image:height</code>. Without these, platforms may not display the
                image correctly.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Forgetting the twitter:card tag:</strong>{" "}
                Without <code>twitter:card</code> set to{" "}
                <code>summary_large_image</code>, Twitter defaults to a small square
                thumbnail instead of the full-width preview.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✗</span>
              <span>
                <strong style={{ color: "var(--text-primary)" }}>Not testing across platforms:</strong>{" "}
                Just because it works on Twitter doesn&apos;t mean it works on LinkedIn. Test
                on all platforms your audience uses.
              </span>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Wrapping Up</h2>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            OG images are one of the highest-ROI optimizations you can make for your website.
            They&apos;re the first thing people see when your content is shared, and they
            directly impact whether someone clicks or scrolls past.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            The good news: with tools like{" "}
            <Link href="/" style={{ color: "var(--accent)" }}>
              SnapOG
            </Link>
            , you can go from zero OG images to beautiful, dynamic, per-page previews in
            minutes. No design skills required, no server to maintain, no build step to
            configure.
          </p>
          <div
            className="rounded-xl p-6 text-center"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <h3 className="text-xl font-bold mb-2">Ready to level up your social previews?</h3>
            <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
              Try the SnapOG editor — pick a template, customize it, and grab the URL.
            </p>
            <Link href="/" className="btn btn-primary">
              Open SnapOG Editor →
            </Link>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Related</h2>
          <ul className="space-y-2" style={{ color: "var(--text-secondary)" }}>
            <li>
              <Link href="/og-image-generator" style={{ color: "var(--accent)" }}>
                OG Image Generator — Create beautiful social cards instantly
              </Link>
            </li>
            <li>
              <a href="https://jsonbolt.vercel.app" style={{ color: "var(--accent)" }}>
                JSONBolt — Fast, beautiful JSON formatting
              </a>
            </li>
          </ul>
        </section>
      </article>

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
