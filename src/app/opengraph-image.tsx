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
          background: "linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 26, color: "#a5b4fc" }}>{profile.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#c7d2fe", marginTop: 8 }}>{profile.heroTitle}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 20, maxWidth: 1000 }}>
            React · Angular · Node.js · GraphQL · LangChain · RAG
          </div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px",
                borderRadius: 16,
                border: "1px solid rgba(165,180,252,0.3)",
                background: "rgba(99,102,241,0.12)",
              }}
            >
              <div style={{ fontSize: 36, fontWeight: 700 }}>{m.value}</div>
              <div style={{ fontSize: 20, color: "#a1a1aa" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
