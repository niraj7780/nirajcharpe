import { ImageResponse } from "next/og";

export const alt = "Niraj Charpe — Software Engineer at HCLTech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafafa",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, backgroundColor: "#a3e635", display: "flex" }} />
          <div style={{ fontSize: 26, color: "#525252", letterSpacing: 2 }}>SOFTWARE ENGINEER · HCLTECH</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 800, color: "#0f0f0f", letterSpacing: -3, lineHeight: 1.05 }}>
            Niraj Charpe
          </div>
          <div style={{ fontSize: 36, color: "#404040" }}>
            Software Engineer at HCLTech
          </div>
          <div style={{ fontSize: 28, color: "#737373" }}>
            Backend · Databases · Web · AI
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "#525252" }}>
          <div>github.com/niraj7780</div>
          <div style={{ display: "flex", height: 6, width: 220, backgroundColor: "#a3e635" }} />
          <div>nirajcharpe.is-a.dev</div>
        </div>
      </div>
    ),
    size
  );
}
