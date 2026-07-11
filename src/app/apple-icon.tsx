import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(145deg, #111111 0%, #232323 62%, #C6A664 100%)",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 136,
            height: 136,
            borderRadius: 34,
            border: "2px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 34,
              letterSpacing: 7,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            HMP
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 15,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#F0D28A",
            }}
          >
            CMA
          </div>
        </div>
      </div>
    ),
    size,
  );
}
