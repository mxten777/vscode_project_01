"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060F1E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "11px",
                  background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "19px",
                  fontWeight: 900,
                  color: "#fff",
                  boxShadow: "0 4px 14px rgba(59,130,246,0.35)",
                }}
              >
                淸
              </div>
              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#fff" }}>
                  청가람 국회의원
                </div>
                <div style={{ fontSize: "12px", color: "#93C5FD", marginTop: "2px" }}>
                  3선 · 국회 정책위원회 부의장
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: "1.75",
                maxWidth: "320px",
              }}
            >
              12년간 국민과 함께 현장을 지켜온 청가람 의원의 공식 홈페이지입니다.
              정책으로 증명하는 신뢰의 정치를 약속합니다.
            </p>
          </div>

          {/* Link columns */}
          {[
            {
              title: "빠른 링크",
              links: ["소개", "핵심 정책", "의정활동", "언론보도", "소통"],
              hrefs: ["#leadership", "#policy", "#timeline", "#news", "#cta"],
            },
            {
              title: "정책 분야",
              links: ["청년 정책", "교육 혁신", "경제 성장", "복지 강화", "지역 발전"],
              hrefs: ["#policy", "#policy", "#policy", "#policy", "#policy"],
            },
            {
              title: "소통 채널",
              links: ["문의하기", "후원하기", "자원봉사", "뉴스레터"],
              hrefs: ["#cta", "#cta", "#cta", "#cta"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={col.hrefs[i]}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#93C5FD";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © 2024 청가람 국회의원 공식 사이트. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["개인정보처리방침", "이용약관", "저작권 정책"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
