"use client";

const newsItems = [
  {
    source: "조선일보",
    date: "2024.11.15",
    title: "청가람 의원, 지역 청년 지원 강화법 발의…'청년 정치의 새 지평'",
    desc: "청가람 의원이 대표 발의한 청년 지원 확대법이 국회 본회의를 통과하며 전국적 주목을 받고 있다.",
    category: "정책",
    color: "#3B82F6",
    imgBg: "linear-gradient(135deg, #1E3A8A, #2563EB)",
  },
  {
    source: "한국경제",
    date: "2024.10.03",
    title: "청가람 의원 '지역 경제 활성화' 간담회…중소기업 CEO 200명 참석",
    desc: "청가람 의원 주도로 열린 지역경제 간담회에 중소기업인 200여 명이 참석해 현장 의견을 전달했다.",
    category: "경제",
    color: "#F59E0B",
    imgBg: "linear-gradient(135deg, #92400E, #D97706)",
  },
  {
    source: "중앙일보",
    date: "2024.09.20",
    title: "복합문화센터 국비 380억 확보…청가람 의원 '최대 숙원사업 해결'",
    desc: "청가람 의원이 오랜 숙원이었던 지역 복합문화센터 건립을 위한 국비 380억 원을 확보했다.",
    category: "지역",
    color: "#34D399",
    imgBg: "linear-gradient(135deg, #065F46, #10B981)",
  },
  {
    source: "KBS 뉴스",
    date: "2024.08.12",
    title: "청가람 의원, 국회 정책위원회 부의장 취임…'협치 강화' 천명",
    desc: "국회 정책위원회 부의장으로 취임한 청가람 의원은 여야 협력 강화와 민생 입법에 집중하겠다고 밝혔다.",
    category: "의정",
    color: "#A78BFA",
    imgBg: "linear-gradient(135deg, #4C1D95, #7C3AED)",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      style={{
        background: "linear-gradient(180deg, #0D2347 0%, #0B1F3A 100%)",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.25)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#F59E0B",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            MEDIA COVERAGE
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
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              언론이 주목하는
            </span>{" "}
            청가람
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
            주요 언론에 보도된 의정활동 소식
          </p>
        </div>

        {/* News Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
          className="news-grid"
        >
          {newsItems.map((item, i) => (
            <a
              key={item.title}
              href="#"
              style={{
                display: "flex",
                flexDirection: i === 0 ? "column" : "row",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "all 0.35s ease",
              }}
              className={i === 0 ? "news-card-featured" : "news-card"}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = `${item.color}30`;
                el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.35)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  background: item.imgBg,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: i === 0 ? "200px" : "auto",
                  minWidth: i !== 0 ? "140px" : "auto",
                  position: "relative",
                  overflow: "hidden",
                }}
                className={i === 0 ? "news-img-featured" : "news-img"}
              >
                <div
                  style={{
                    fontSize: "40px",
                    opacity: 0.4,
                  }}
                >
                  📰
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: item.color,
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: item.color,
                    }}
                  >
                    {item.source}
                  </span>
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.25)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
                    {item.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: i === 0 ? "18px" : "15px",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: "1.5",
                    letterSpacing: "-0.01em",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: "1.65",
                  }}
                >
                  {item.desc}
                </p>
                <div
                  style={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "13px",
                    color: item.color,
                    fontWeight: 600,
                  }}
                >
                  기사 보기 →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            전체 언론보도 보기 →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .news-grid { grid-template-columns: 1fr !important; }
          .news-card { flex-direction: column !important; }
          .news-img { min-height: 120px !important; min-width: auto !important; }
        }
      `}</style>
    </section>
  );
}
