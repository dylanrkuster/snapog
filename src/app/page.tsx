import OGEditor from "@/components/OGEditor";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📸</span>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "var(--accent)" }}>SnapOG</h1>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Beautiful social previews</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#api" style={{ color: "var(--text-secondary)" }}>API Docs</a>
            <a href="#pricing" style={{ color: "var(--text-secondary)" }}>Pricing</a>
            <a href="https://github.com/dylanrkuster/snapog" target="_blank" rel="noopener" style={{ color: "var(--text-secondary)" }}>GitHub</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Beautiful OG Images in{" "}
            <span style={{ color: "var(--accent)" }}>Milliseconds</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Generate stunning social preview images for Twitter, Facebook, and LinkedIn.
            Pick a template, customize it, grab the URL. No signup required.
          </p>
        </div>
        <OGEditor />
      </section>

      {/* API Docs */}
      <section id="api" className="px-4 py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Simple API</h2>
          <p className="text-center mb-8" style={{ color: "var(--text-secondary)" }}>
            One URL. No SDK. No authentication needed for free tier.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Base URL</h3>
            <pre>{`GET /api/og?title=Hello+World&theme=dark`}</pre>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th className="text-left py-3 pr-4 font-medium">Parameter</th>
                    <th className="text-left py-3 pr-4 font-medium">Type</th>
                    <th className="text-left py-3 pr-4 font-medium">Default</th>
                    <th className="text-left py-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["title", "string", "(required)", "Main heading text"],
                    ["description", "string", "—", "Subtitle / description"],
                    ["template", "string", "default", "Template: default, bold, minimal, blog, product"],
                    ["theme", "string", "dark", "Color theme: dark, light, gradient, ocean, sunset, forest"],
                    ["siteName", "string", "—", "Your site name or brand"],
                    ["accent", "string", "#3b82f6", "Accent color (hex)"],
                    ["width", "number", "1200", "Image width in pixels"],
                    ["height", "number", "630", "Image height in pixels"],
                  ].map(([param, type, def, desc]) => (
                    <tr key={param} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td className="py-3 pr-4"><code>{param}</code></td>
                      <td className="py-3 pr-4" style={{ color: "var(--text-secondary)" }}>{type}</td>
                      <td className="py-3 pr-4" style={{ color: "var(--text-secondary)" }}>{def}</td>
                      <td className="py-3" style={{ color: "var(--text-secondary)" }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Example</h3>
            <pre className="text-xs">{`<!-- In your HTML <head> -->
<meta property="og:image"
  content="https://snapog.vercel.app/api/og?title=My+Blog+Post&template=blog&theme=ocean&siteName=myblog.dev" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image"
  content="https://snapog.vercel.app/api/og?title=My+Blog+Post&template=blog&theme=ocean&siteName=myblog.dev" />`}</pre>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Pricing</h2>
          <p className="mb-10" style={{ color: "var(--text-secondary)" }}>
            Free to start. Pay only when you scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: ["50 images / month", "All templates", "All themes", "1200×630 default", "Community support"],
                cta: "Get Started",
                primary: false,
              },
              {
                name: "Pro",
                price: "$9",
                period: "/ month",
                features: ["1,000 images / month", "Custom dimensions", "Remove SnapOG branding", "Priority support", "API key access"],
                cta: "Coming Soon",
                primary: true,
              },
              {
                name: "Unlimited",
                price: "$29",
                period: "/ month",
                features: ["Unlimited images", "Custom fonts", "Custom CSS", "White-label", "Dedicated support"],
                cta: "Coming Soon",
                primary: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl p-6 text-left"
                style={{
                  background: "var(--bg-secondary)",
                  border: plan.primary ? "2px solid var(--accent)" : "1px solid var(--border)",
                }}
              >
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent)" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={plan.primary ? "btn btn-primary w-full justify-center" : "btn w-full justify-center"}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQ */}
      <section className="px-4 py-16" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          {[
            { q: "What is an OG image?", a: "An OG (Open Graph) image is the preview image that appears when you share a link on social media platforms like Twitter, Facebook, LinkedIn, and Slack. A good OG image dramatically increases click-through rates." },
            { q: "How does SnapOG work?", a: "SnapOG generates images on-the-fly using a simple URL API. Just construct a URL with your parameters (title, description, theme), and SnapOG returns a PNG image. The image is generated at the edge for maximum speed — typically under 100ms." },
            { q: "Do I need an API key?", a: "No! The free tier works without any authentication. Just use the URL directly in your HTML meta tags. API keys are only needed for Pro and Unlimited plans." },
            { q: "What image format is returned?", a: "SnapOG returns PNG images at 1200×630 pixels by default — the recommended size for OG images across all major platforms." },
            { q: "Can I use this for dynamic pages?", a: "Yes! Since the image is generated from URL parameters, you can dynamically construct the URL for each page. Perfect for blogs, product pages, and user profiles." },
          ].map((faq) => (
            <details key={faq.q} className="mb-4 p-4 rounded-lg" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }}>
              <summary className="font-medium cursor-pointer">{faq.q}</summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-8 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
        <p>📸 SnapOG — Beautiful social previews, generated in milliseconds. <a href="https://jsonbolt.vercel.app" style={{ color: "var(--accent)" }}>Also try JSONBolt</a>.</p>
      </footer>
    </main>
  );
}
