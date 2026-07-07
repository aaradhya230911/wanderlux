import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0E14",
          borderRadius: 14,
          color: "#C9A869",
          fontSize: 34,
          fontWeight: 600,
          fontFamily: "serif",
        }}
      >
        W
      </div>
    ),
    { ...size }
  );
}
