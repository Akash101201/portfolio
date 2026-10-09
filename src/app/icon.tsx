import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

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
          borderRadius: "45% 55% 50% 50%",
          background: "linear-gradient(145deg, #4a9b86, #2a6b58)",
          color: "white",
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        {profile.initials}
      </div>
    ),
    size,
  );
}
