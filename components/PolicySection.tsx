"use client";

const policies = [
  {
    icon: "🎓",
    title: "청년 정책",
    subtitle: "Youth Policy",
    desc: "청년 일자리 5만 개 창출, 청년 주거 지원금 확대, 청년 창업 펀드 1,000억 조성으로 청년이 희망을 꿈꾸는 사회를 만듭니다.",
    points: ["일자리 5만개 창출", "주거지원금 확대", "창업펀드 1,000억"],
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #1E3A8A, #2563EB)",
    tag: "핵심 공약",
  },
  {
    icon: "📚",
    title: "교육 혁신",
    subtitle: "Education Reform",
    desc: "디지털 시대에 맞는 교육 환경 구축, 공교육 강화, 교육 격차 해소를 통해 모든 아이들에게 평등한 기회를 제공합니다.",
    points: ["디지털 교육 혁신", "공교육 강화", "교육 격차 해소"],
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #92400E, #D97706)",
    tag: "최우선 과제",
  },
  {
    icon: "📈",
    title: "경제 성장",
    subtitle: "Economic Growth",
    desc: "중소기업 지원 확대, 고부가가치 산업 육성, 규제 혁신으로 지속 가능한 경제 성장의 토대를 마련합니다.",
    points: ["중소기업 지원", "스타트업 생태계", "규제 혁신"],
    color: "#34D399",
    gradient: "linear-gradient(135deg, #065F46, #059669)",
    tag: "경제 비전",
  },
  {
    icon: "🏥",
    title: "복지 강화",
    subtitle: "Welfare Enhancement",
    desc: "사각지대 없는 복지망 구축, 의료비 부담 경감, 돌봄 서비스 확대로 누구도 소외되지 않는 사회를 실현합니다.",
    points: ["의료비 경감", "돌봄 서비스 확대", "사각지대 해소"],
    color: "#F472B6",
    gradient: "linear-gradient(135deg, #831843, #DB2777)",
    tag: "사회 안전망",
  },
  {
    icon: "🏙️",
    title: "지역 발전",
    subtitle: "Regional Development",
    desc: "지역 균형 발전, 교통 인프라 확충, 지역 문화·관광 육성으로 살기 좋은 지역을 만들어 나갑니다.",
    points: ["교통 인프라 확충", "균형 발전", "문화·관광 육성"],
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, #4C1D95, #7C3AED)",
    tag: "지역 공약",
  },
  {
    icon: "🌱",
    title: "환경·미래",
    subtitle: "Green Future",
    desc: "탄소중립 실현, 재생에너지 전환 가속화, 친환경 도시 조성으로 다음 세대에 물려줄 깨끗한 환경을 만듭니다.",
    points: ["탄소중립 실현", "재생에너지 확대", "친환경 도시"],
    color: "#6EE7B7",
    gradient: "linear-gradient(135deg, #064E3B, #10B981)",
    tag: "미래 비전",
  },
];

export default function PolicySection() {
  return (
    <section
      id="policy"
      style={{
        background: "#0B1F3A",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(30,58,138,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245,158,11,0.06) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
            CORE POLICIES
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
            국민을 위한{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #93C5FD)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              핵심 정책
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            현장에서 직접 듣고, 데이터로 분석하고, 정책으로 실현합니다.
          </p>
        </div>

        {/* Policy Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="policy-grid"
        >
          {policies.map((policy, i) => (
            <div
              key={policy.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "32px 28px",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px)";
                el.style.borderColor = `${policy.color}40`;
                el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px ${policy.color}25`;
                el.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: policy.gradient,
                  borderRadius: "20px 20px 0 0",
                  opacity: 0.8,
                }}
              />

              {/* Tag */}
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: `${policy.color}18`,
                  border: `1px solid ${policy.color}35`,
                  fontSize: "11px",
                  fontWeight: 700,
                  color: policy.color,
                  letterSpacing: "0.05em",
                  marginBottom: "20px",
                }}
              >
                {policy.tag}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: policy.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "20px",
                  boxShadow: `0 8px 20px ${policy.color}30`,
                }}
              >
                {policy.icon}
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                }}
              >
                {policy.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: policy.color,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  marginBottom: "14px",
                }}
              >
                {policy.subtitle}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: "1.75",
                  marginBottom: "20px",
                }}
              >
                {policy.desc}
              </p>

              {/* Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {policy.points.map((point) => (
                  <div
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: policy.color,
                        flexShrink: 0,
                      }}
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .policy-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .policy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
