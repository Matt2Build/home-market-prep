import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HomeMarketPrep Snohomish County Seller CMA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #111111 0%, #2A2A2A 45%, #C6A664 100%)",
          color: "white",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <span>Home</span>
          <span style={{ color: "#F0D28A", marginLeft: 8 }}>Market</span>
          <span style={{ marginLeft: 8 }}>Prep</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#F0D28A", fontSize: 24, textTransform: "uppercase" }}>
            Snohomish County, WA
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
            Free CMA
            <br />
            Seller Prep
            <br />
            Listing Guidance
          </div>
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)" }}>
          Price smarter. Prep cleaner. List with context.
        </div>
      </div>
    ),
    size,
  );
}
