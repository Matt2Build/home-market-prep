import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256,
};

export const contentType = "image/png";

export default function Icon() {
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
            width: 188,
            height: 188,
            borderRadius: 44,
            border: "2px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.06)",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              fontSize: 42,
              letterSpacing: 9,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            HMP
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 20,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#F0D28A",
            }}
          >
            Seller Prep
          </div>
        </div>
      </div>
    ),
    size,
  );
}
