"use client";

import { useState, useMemo } from "react";
import { templates } from "@/lib/templates";

const THEMES = ["dark", "light", "gradient", "ocean", "sunset", "forest"] as const;

export default function OGEditor() {
  const [title, setTitle] = useState("My Awesome Page");
  const [description, setDescription] = useState("A compelling description that makes people click");
  const [theme, setTheme] = useState<string>("dark");
  const [template, setTemplate] = useState("default");
  const [siteName, setSiteName] = useState("mysite.com");
  const [accent, setAccent] = useState("#3b82f6");
  const [copied, setCopied] = useState<string | null>(null);

  const imageUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("title", title);
    if (description) params.set("description", description);
    params.set("theme", theme);
    params.set("template", template);
    if (siteName) params.set("siteName", siteName);
    if (accent) params.set("accent", accent);
    return `/api/og?${params.toString()}`;
  }, [title, description, theme, template, siteName, accent]);

  const fullUrl = typeof window !== "undefined"
    ? `${window.location.origin}${imageUrl}`
    : imageUrl;

  const metaTag = `<meta property="og:image" content="${fullUrl}" />`;
  const htmlTag = `<meta property="og:image" content="${fullUrl}" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:image" content="${fullUrl}" />`;

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Controls */}
        <div className="lg:col-span-2 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
              Template
            </label>
            <div className="grid grid-cols-2 gap-2">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTemplate(t.id);
                    setTitle(t.defaults.title);
                    if (t.defaults.description) setDescription(t.defaults.description);
                    if (t.defaults.theme) setTheme(t.defaults.theme);
                    if (t.defaults.siteName) setSiteName(t.defaults.siteName);
                    if (t.defaults.accent) setAccent(t.defaults.accent);
                  }}
                  className={`template-card text-left ${template === t.id ? "active" : ""}`}
                >
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{t.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Title</label>
            <input className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Page title" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Description</label>
            <input className="input-field" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional description" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Site Name</label>
            <input className="input-field" value={siteName} onChange={(e) => setSiteName(e.target.value)} placeholder="yoursite.com" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Theme</label>
              <select className="input-field" value={theme} onChange={(e) => setTheme(e.target.value)}>
                {THEMES.map((t) => (
                  <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Accent Color</label>
              <div className="flex gap-2">
                <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} className="w-10 h-10 rounded cursor-pointer border-0" />
                <input className="input-field flex-1" value={accent} onChange={(e) => setAccent(e.target.value)} placeholder="#3b82f6" />
              </div>
            </div>
          </div>
        </div>

        {/* Preview + Code */}
        <div className="lg:col-span-3 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Live Preview (1200×630)</label>
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="OG Image Preview"
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Image URL</label>
              <button className="btn text-xs" onClick={() => copyText(fullUrl, "url")}>
                {copied === "url" ? "✅ Copied!" : "📋 Copy URL"}
              </button>
            </div>
            <pre className="text-xs break-all" style={{ color: "var(--accent)" }}>{fullUrl}</pre>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>HTML Meta Tags</label>
              <button className="btn text-xs" onClick={() => copyText(htmlTag, "html")}>
                {copied === "html" ? "✅ Copied!" : "📋 Copy HTML"}
              </button>
            </div>
            <pre className="text-xs" style={{ color: "var(--text-primary)" }}>{htmlTag}</pre>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Quick Meta Tag</label>
              <button className="btn text-xs" onClick={() => copyText(metaTag, "meta")}>
                {copied === "meta" ? "✅ Copied!" : "📋 Copy"}
              </button>
            </div>
            <pre className="text-xs" style={{ color: "var(--text-primary)" }}>{metaTag}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
