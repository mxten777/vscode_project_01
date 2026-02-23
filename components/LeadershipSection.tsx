"use client";

const values = [
  { icon: "⚖️", title: "공정한 정치", desc: "모든 결정에서 편향 없이 공정하게" },
  { icon: "🔍", title: "투명한 의정", desc: "열린 행정, 국민께 모두 공개" },
  { icon: "💪", title: "강한 책임감", desc: "약속한 것은 반드시 실천합니다" },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      style={{
        background: "linear-gradient(180deg, #0B1F3A 0%, #0D2347 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%)",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "70px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="leadership-grid"
      >
        {/* LEFT: Photo */}
        <div>
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            }}
          >
            {/* Placeholder portrait card */}
            <div
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(160deg, #1E3A8A 0%, #0F2850 50%, #0B1F3A 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB, #1E3A8A)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "42px",
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: "20px",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.4)",
                }}
              >
                鄭
              </div>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                청가람
              </div>
              <div style={{ fontSize: "13px", color: "#93C5FD", marginTop: "6px", letterSpacing: "0.05em" }}>
                국회의원 · 3선
              </div>
              <div
                style={{
                  marginTop: "30px",
                  padding: "10px 30px",
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  borderRadius: "10px",
                  fontSize: "13px",
                  color: "#F59E0B",
                  fontWeight: 600,
                }}
              >
                현직 국회의원
              </div>
            </div>

            {/* Overlay gradient bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(11,31,58,0.7), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Decorative corner accent */}
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "-10px",
              width: "80px",
              height: "80px",
              border: "2px solid rgba(245,158,11,0.3)",
              borderRadius: "14px",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* RIGHT: Message */}
        <div>
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
              marginBottom: "20px",
            }}
          >
            LEADERSHIP MESSAGE
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "28px",
            }}
          >
            국민을 위한 정치,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              현장에서 답을 찾겠습니다
            </span>
          </h2>

          <div
            style={{
              width: "50px",
              height: "3px",
              background: "linear-gradient(90deg, #F59E0B, #3B82F6)",
              borderRadius: "2px",
              marginBottom: "28px",
            }}
          />

          <div
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.85",
              marginBottom: "40px",
            }}
          >
            <p style={{ marginBottom: "18px" }}>
              저는 12년간 오직 국민만을 바라보며 정치를 해왔습니다.
              화려한 말보다는 묵묵한 실천, 이해관계보다는 국민의 이익을 먼저 생각해왔습니다. (청가람)
            </p>
            <p style={{ marginBottom: "18px" }}>
              지역 현장을 500번 이상 발로 뛰며 주민의 목소리를 직접 들었고,
              그 목소리를 국회에서 150건의 법안으로 실현시켰습니다.
            </p>
            <p>
              앞으로도 국민이 주인인 대한민국을 만들기 위해, 더 낮은 자세로,
              더 강한 실천력으로 나아가겠습니다.
            </p>
          </div>

          {/* Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{ fontSize: "24px", flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>
                    {v.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  marginBottom: "2px",
                }}
              >
                청가람 국회의원
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                3선 · 국회 정책위원회 부의장
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
