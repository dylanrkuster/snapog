# 📸 SnapOG

**Beautiful OG Images in Milliseconds** — [snapog-teal.vercel.app](https://snapog-teal.vercel.app)

Generate stunning social preview images for Twitter, Facebook, and LinkedIn with a simple URL API.

## How It Works

```html
<meta property="og:image"
  content="https://snapog-teal.vercel.app/api/og?title=My+Page&theme=dark&template=bold" />
```

That's it. One URL → beautiful PNG image.

## Templates

| Template | Description |
|----------|-------------|
| `default` | Clean, professional layout |
| `bold` | Large title with gradient accent |
| `minimal` | Maximum whitespace, clean typography |
| `blog` | Optimized for article previews |
| `product` | Product launch style |

## Themes

`dark` · `light` · `gradient` · `ocean` · `sunset` · `forest`

## API Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | string | required | Main heading |
| `description` | string | — | Subtitle |
| `template` | string | default | Template name |
| `theme` | string | dark | Color theme |
| `siteName` | string | — | Brand name |
| `accent` | string | #3b82f6 | Accent color |
| `width` | number | 1200 | Image width |
| `height` | number | 630 | Image height |

## Tech Stack

- Next.js 16 + TypeScript + Tailwind CSS
- @vercel/og (Satori-based edge image generation)
- Vercel Edge Functions

## Development

```bash
npm install
npm run dev
```

## License

MIT
