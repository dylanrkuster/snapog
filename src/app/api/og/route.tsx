import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";
import { getThemeColors } from "@/lib/templates";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get("title") || "Hello World";
  const description = searchParams.get("description") || "";
  const theme = searchParams.get("theme") || "dark";
  const template = searchParams.get("template") || "default";
  const siteName = searchParams.get("siteName") || "";
  const accent = searchParams.get("accent") || undefined;
  const width = parseInt(searchParams.get("width") || "1200");
  const height = parseInt(searchParams.get("height") || "630");

  const colors = getThemeColors(theme, accent);

  const element = renderTemplate(template, {
    title,
    description,
    siteName,
    colors,
    width,
    height,
  });

  return new ImageResponse(element, {
    width,
    height,
  });
}

interface RenderProps {
  title: string;
  description: string;
  siteName: string;
  colors: ReturnType<typeof getThemeColors>;
  width: number;
  height: number;
}

function renderTemplate(template: string, props: RenderProps) {
  switch (template) {
    case "bold":
      return renderBold(props);
    case "minimal":
      return renderMinimal(props);
    case "blog":
      return renderBlog(props);
    case "product":
      return renderProduct(props);
    default:
      return renderDefault(props);
  }
}

function renderDefault({ title, description, siteName, colors }: RenderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 80px",
        width: "100%",
        height: "100%",
        background: colors.bgGradient || colors.bg,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {siteName && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
            fontSize: "24px",
            color: colors.accent,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: colors.accent,
            }}
          />
          {siteName}
        </div>
      )}
      <div
        style={{
          fontSize: title.length > 40 ? "48px" : "64px",
          fontWeight: 700,
          color: colors.text,
          lineHeight: 1.2,
          marginBottom: description ? "20px" : "0",
          maxWidth: "900px",
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: "28px",
            color: colors.subtext,
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}

function renderBold({ title, description, siteName, colors }: RenderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: colors.bg,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "8px",
          background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}88)`,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: title.length > 30 ? "56px" : "72px",
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          {title}
        </div>
        {description && (
          <div style={{ fontSize: "28px", color: colors.subtext, lineHeight: 1.4 }}>
            {description}
          </div>
        )}
        {siteName && (
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              fontSize: "22px",
              color: colors.accent,
              fontWeight: 500,
            }}
          >
            {siteName}
          </div>
        )}
      </div>
    </div>
  );
}

function renderMinimal({ title, siteName, colors }: RenderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        background: colors.bg,
        fontFamily: "Inter, system-ui, sans-serif",
        textAlign: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: title.length > 30 ? "52px" : "64px",
          fontWeight: 700,
          color: colors.text,
          lineHeight: 1.2,
          maxWidth: "900px",
        }}
      >
        {title}
      </div>
      {siteName && (
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "24px",
            color: colors.subtext,
            fontWeight: 400,
          }}
        >
          {siteName}
        </div>
      )}
    </div>
  );
}

function renderBlog({ title, description, siteName, colors }: RenderProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: colors.bg,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "8px",
          height: "100%",
          background: colors.accent,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          padding: "60px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {siteName && (
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: colors.accent,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "24px",
              }}
            >
              {siteName}
            </div>
          )}
          <div
            style={{
              fontSize: title.length > 50 ? "42px" : "52px",
              fontWeight: 700,
              color: colors.text,
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>
        {description && (
          <div style={{ fontSize: "26px", color: colors.subtext, lineHeight: 1.4, maxWidth: "800px" }}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

function renderProduct({ title, description, siteName, colors }: RenderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: colors.bg,
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "60px 80px",
      }}
    >
      {siteName && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: colors.accent,
              fontSize: "24px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {siteName.charAt(0).toUpperCase()}
          </div>
          <div style={{ fontSize: "24px", color: colors.subtext, fontWeight: 500 }}>{siteName}</div>
        </div>
      )}
      <div
        style={{
          fontSize: title.length > 35 ? "52px" : "64px",
          fontWeight: 700,
          color: colors.text,
          lineHeight: 1.15,
          marginBottom: "20px",
          maxWidth: "900px",
        }}
      >
        {title}
      </div>
      {description && (
        <div style={{ fontSize: "28px", color: colors.subtext, lineHeight: 1.4, maxWidth: "800px" }}>
          {description}
        </div>
      )}
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          width: "120px",
          height: "4px",
          borderRadius: "2px",
          background: colors.accent,
        }}
      />
    </div>
  );
}
