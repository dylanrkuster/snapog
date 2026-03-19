export interface TemplateConfig {
  id: string;
  name: string;
  description: string;
  defaults: OGParams;
}

export interface OGParams {
  title: string;
  description?: string;
  theme?: "dark" | "light" | "gradient" | "ocean" | "sunset" | "forest";
  template?: string;
  fontSize?: string;
  logo?: string;
  siteName?: string;
  accent?: string;
}

export const templates: TemplateConfig[] = [
  {
    id: "default",
    name: "Clean",
    description: "Simple, professional layout with title and description",
    defaults: {
      title: "My Awesome Page",
      description: "A compelling description that makes people want to click",
      theme: "dark",
      siteName: "mysite.com",
    },
  },
  {
    id: "bold",
    name: "Bold",
    description: "Large title with gradient accent bar",
    defaults: {
      title: "Ship Fast, Learn Faster",
      description: "Build products that people actually want",
      theme: "gradient",
      siteName: "startup.io",
    },
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean typography, maximum whitespace",
    defaults: {
      title: "Less is More",
      theme: "light",
      siteName: "minimal.dev",
    },
  },
  {
    id: "blog",
    name: "Blog Post",
    description: "Optimized for article previews",
    defaults: {
      title: "How We Scaled to 1M Users",
      description: "The technical decisions that made it possible",
      theme: "dark",
      siteName: "engineering.blog",
    },
  },
  {
    id: "product",
    name: "Product",
    description: "Product launch style with feature highlights",
    defaults: {
      title: "Introducing SnapOG",
      description: "Beautiful social preview images, generated in milliseconds",
      theme: "ocean",
      siteName: "snapog.dev",
      accent: "#3b82f6",
    },
  },
];

interface ThemeColors {
  bg: string;
  text: string;
  subtext: string;
  accent: string;
  border: string;
  bgGradient?: string;
}

export function getThemeColors(theme: string, accent?: string): ThemeColors {
  const accentColor = accent || "#f59e0b";
  switch (theme) {
    case "light":
      return { bg: "#ffffff", text: "#111111", subtext: "#666666", accent: accentColor, border: "#e5e5e5" };
    case "gradient":
      return { bg: "#0f0f0f", text: "#ffffff", subtext: "#a3a3a3", accent: accentColor, border: "#333", bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" };
    case "ocean":
      return { bg: "#0c1222", text: "#e2e8f0", subtext: "#94a3b8", accent: "#38bdf8", border: "#1e3a5f" };
    case "sunset":
      return { bg: "#1a0a0a", text: "#fde8e8", subtext: "#d4a3a3", accent: "#f97316", border: "#4a1a1a" };
    case "forest":
      return { bg: "#0a1a0c", text: "#e8fde8", subtext: "#a3d4a3", accent: "#22c55e", border: "#1a4a1c" };
    case "dark":
    default:
      return { bg: "#0a0a0a", text: "#e5e5e5", subtext: "#a3a3a3", accent: accentColor, border: "#2a2a2a" };
  }
}
