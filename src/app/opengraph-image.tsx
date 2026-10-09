import { ImageResponse } from "next/og";
import { metrics, profile } from "@/data/resume";

export const alt = `${profile.name}, ${profile.heroTitle}`;
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
          padding: 72,
          background: "linear-gradient(145deg, #e8f0ed 0%, #f5faf8 40%, #d4ebe4 100%)",
          color: "#1a2f2a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "45% 55% 50% 50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(145deg, #4a9b86, #2a6b58)",
              color: "white",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 24, color: "#3d554e" }}>{profile.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 500, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#2a6b58", marginTop: 10 }}>{profile.heroTitle}</div>
          <div style={{ fontSize: 26, color: "#3d554e", marginTop: 18, maxWidth: 980 }}>
            React · Angular · Node.js · GraphQL · LangChain · RAG
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px",
                borderRadius: "28px 36px 24px 32px",
                border: "1px solid rgba(126,184,168,0.45)",
                background: "rgba(255,255,255,0.55)",
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 600, color: "#2a6b58" }}>{m.value}</div>
              <div style={{ fontSize: 18, color: "#3d554e" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
