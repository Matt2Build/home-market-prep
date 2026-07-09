import { ImageResponse } from "next/og";
import { neighborhoodPageMap } from "@/lib/neighborhood-pages";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = neighborhoodPageMap.get(slug);
  const area = page?.areaName ?? "Snohomish County";
  const city = page?.parentCity ?? "Washington";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(160deg, #111111 0%, #1F2937 40%, #C6A664 100%)",
          color: "white",
          padding: "60px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#F0D28A",
          }}
        >
          HomeMarketPrep
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 26, textTransform: "uppercase", color: "#F0D28A" }}>
            {city}, WA
          </div>
          <div style={{ fontSize: 70, lineHeight: 1.04, fontWeight: 700 }}>
            Selling a House
            <br />
            in {area}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.84)" }}>
          Neighborhood Guide • Seller Prep • Free CMA
        </div>
      </div>
    ),
    size,
  );
}
