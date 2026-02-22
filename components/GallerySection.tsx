"use client";

const galleryItems = [
  { label: "지역 주민 간담회", category: "소통", bg: "linear-gradient(135deg, #1E3A8A, #2563EB)", size: "large" },
  { label: "청년 정책 포럼", category: "정책", bg: "linear-gradient(135deg, #92400E, #D97706)", size: "small" },
  { label: "국회 본회의", category: "의정", bg: "linear-gradient(135deg, #065F46, #059669)", size: "small" },
  { label: "현장 방문", category: "현장", bg: "linear-gradient(135deg, #4C1D95, #7C3AED)", size: "medium" },
  { label: "복지 시설 방문", category: "복지", bg: "linear-gradient(135deg, #831843, #DB2777)", size: "medium" },
  { label: "교육 현장 방문", category: "교육", bg: "linear-gradient(135deg, #1E3A8A, #3B82F6)", size: "large" },
  { label: "경제 좌담회", category: "경제", bg: "linear-gradient(135deg, #78350F, #F59E0B)", size: "small" },
  { label: "환경 캠페인", category: "환경", bg: "linear-gradient(135deg, #064E3B, #34D399)", size: "small" },
];

const icons: Record<string, string> = {
  소통: "🗣️", 정책: "📋", 의정: "🏛️", 현장: "🚶", 복지: "🤝", 교육: "📚", 경제: "📈", 환경: "🌱",
};

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        background: "#0B1F3A",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 30% 70%, rgba(245,158,11,0.06) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(34,211,153,0.12)",
              border: "1px solid rgba(34,211,153,0.25)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#6EE7B7",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            FIELD ACTIVITIES
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            국민과 함께한{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6EE7B7, #34D399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              현장 활동
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
            책상이 아닌 현장에서, 말이 아닌 행동으로
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto",
            gap: "16px",
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                gridColumn:
                  i === 0 ? "span 2" :
                  i === 5 ? "span 2" :
                  "span 1",
                aspectRatio: (i === 0 || i === 5) ? "16/9" : "4/3",
                cursor: "pointer",
              }}
              className="gallery-item"
            >
              {/* Background */}
              <div
                style={{
                  background: item.bg,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "36px",
                  transition: "transform 0.45s ease",
                }}
                className="gallery-bg"
              >
                {icons[item.category] || "📸"}
              </div>

              {/* Overlay on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,31,58,0.9) 0%, rgba(11,31,58,0.4) 50%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                }}
                className="gallery-overlay"
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: "rgba(59,130,246,0.4)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#93C5FD",
                    marginBottom: "6px",
                    width: "fit-content",
                  }}
                >
                  현장 활동
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-item:hover .gallery-bg { transform: scale(1.06) !important; }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-item { grid-column: span 1 !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
