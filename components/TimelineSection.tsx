"use client";

const timelineItems = [
  {
    year: "2024",
    title: "지역 복합문화센터 건립 추진",
    desc: "주민 숙원사업인 복합문화센터 건립을 위한 국비 380억 원을 확보하였습니다.",
    category: "지역발전",
    badge: "예산 확보",
    color: "#F59E0B",
  },
  {
    year: "2023",
    title: "청년 주거 지원 특별법 대표 발의",
    desc: "청년 무주택자 대상 전세 보증금 지원 확대와 공공임대주택 공급 의무화를 담은 법안을 대표 발의했습니다.",
    category: "청년정책",
    badge: "법안 발의",
    color: "#3B82F6",
  },
  {
    year: "2022",
    title: "국회 정책위원회 부의장 선임",
    desc: "여야 합의로 국회 정책위원회 부의장으로 선임되어 입법 리더십을 강화했습니다.",
    category: "의정활동",
    badge: "요직 선임",
    color: "#34D399",
  },
  {
    year: "2022",
    title: "지역 교통 인프라 개선 완료",
    desc: "지역 교통 개선을 위한 도로·철도 사업 예산 1,200억 원을 확보해 착공에 들어갔습니다.",
    category: "지역발전",
    badge: "사업 착수",
    color: "#A78BFA",
  },
  {
    year: "2021",
    title: "중소기업 지원 확대법 통과",
    desc: "지역 중소기업 R&D 지원을 3배 확대하는 법안을 통과시켜 지역 경제 활성화에 기여했습니다.",
    category: "경제정책",
    badge: "법안 통과",
    color: "#F472B6",
  },
  {
    year: "2020",
    title: "3선 국회의원 당선",
    desc: "70.2%의 역대 최고 득표율로 3선에 성공하며 지역 주민의 신뢰를 재확인했습니다.",
    category: "의정활동",
    badge: "3선 당선",
    color: "#F59E0B",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
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
            "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.07) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.25)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#93C5FD",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            LEGISLATIVE HISTORY
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
            주요{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              의정활동 기록
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
            현장에서 만든 변화, 국회에서 이룬 결실
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "48px" }}>
          {/* Vertical gradient line */}
          <div
            style={{
              position: "absolute",
              left: "14px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(180deg, #3B82F6, #1E3A8A, #F59E0B, #1E3A8A, #3B82F6)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {timelineItems.map((item, i) => (
              <div
                key={`${item.year}-${item.title}`}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-42px",
                    top: "20px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: item.color,
                    border: "3px solid #0B1F3A",
                    boxShadow: `0 0 12px ${item.color}60`,
                    zIndex: 2,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = `${item.color}30`;
                    el.style.transform = "translateX(4px)";
                    el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.transform = "translateX(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Left accent */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      background: item.color,
                      borderRadius: "16px 0 0 16px",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 800,
                          color: item.color,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.year}
                      </span>
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: "6px",
                          background: `${item.color}18`,
                          border: `1px solid ${item.color}30`,
                          fontSize: "11px",
                          fontWeight: 700,
                          color: item.color,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.3)",
                        background: "rgba(255,255,255,0.05)",
                        padding: "3px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.01em",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: "1.65",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More CTA */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#93C5FD",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(59,130,246,0.18)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            전체 의정활동 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}
