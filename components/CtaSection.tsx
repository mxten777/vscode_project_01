"use client";

import { MessageCircle, Heart, Users } from "lucide-react";

const ctaActions = [
  {
    icon: MessageCircle,
    title: "문의하기",
    desc: "정치·정책·지역 현안에 대해 의견을 나눠주세요",
    color: "#3B82F6",
    bg: "linear-gradient(135deg, #1E3A8A, #2563EB)",
    href: "#",
    shadow: "rgba(37,99,235,0.4)",
  },
  {
    icon: Heart,
    title: "후원하기",
    desc: "더 나은 대한민국을 만드는 여정에 함께해 주세요",
    color: "#F59E0B",
    bg: "linear-gradient(135deg, #92400E, #F59E0B)",
    href: "#",
    shadow: "rgba(245,158,11,0.4)",
  },
  {
    icon: Users,
    title: "자원봉사 신청",
    desc: "현장에서 함께 뛰는 든든한 동반자가 되어주세요",
    color: "#34D399",
    bg: "linear-gradient(135deg, #065F46, #10B981)",
    href: "#",
    shadow: "rgba(16,185,129,0.4)",
  },
];

export default function CtaSection() {
  return (
    <section
      id="cta"
      style={{
        background: "linear-gradient(135deg, #06122A 0%, #0B1F3A 40%, #0F2850 100%)",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
          left: "-150px",
          top: "50%",
          transform: "translateY(-50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(245,158,11,0.4), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "999px",
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.3)",
            fontSize: "13px",
            fontWeight: 700,
            color: "#F59E0B",
            letterSpacing: "0.08em",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#F59E0B",
              display: "inline-block",
              animation: "ctaPulse 2s infinite",
            }}
          />
          CONNECT WITH ME
        </div>

        {/* Main headline */}
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          국민의 목소리를
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #F59E0B, #FBBF24, #FDE68A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            듣겠습니다
          </span>
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "560px",
            margin: "0 auto 64px",
            lineHeight: "1.75",
          }}
        >
          여러분의 작은 목소리 하나하나가 더 나은 정책을 만듭니다.
          함께 대화하고, 함께 만들어 가겠습니다.
        </p>

        {/* CTA Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "60px",
          }}
          className="cta-grid"
        >
          {ctaActions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.title}
                href={action.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "36px 24px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  textDecoration: "none",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-8px)";
                  el.style.borderColor = `${action.color}40`;
                  el.style.boxShadow = `0 24px 60px ${action.shadow}`;
                  el.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "18px",
                    background: action.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: `0 8px 24px ${action.shadow}`,
                  }}
                >
                  <Icon size={28} color="#fff" />
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    marginBottom: "10px",
                  }}
                >
                  {action.title}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: "1.6",
                    textAlign: "center",
                  }}
                >
                  {action.desc}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    background: action.bg,
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    boxShadow: `0 4px 14px ${action.shadow}`,
                  }}
                >
                  {action.title} →
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact card */}
        <div
          style={{
            padding: "36px 40px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
          className="contact-strip"
        >
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>
              의원실 직통 연락처
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              02-788-XXXX
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
              평일 09:00 – 18:00
            </div>
          </div>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "rgba(255,255,255,0.1)",
            }}
            className="divider-vertical"
          />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>
              이메일
            </div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#93C5FD" }}>
              office@cheongaram.kr
            </div>
          </div>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "rgba(255,255,255,0.1)",
            }}
            className="divider-vertical"
          />
          <div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>
              소셜 미디어
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {["YouTube", "Instagram", "Facebook", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                    e.currentTarget.style.color = "#93C5FD";
                    e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ctaPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .contact-strip { flex-direction: column !important; align-items: flex-start !important; }
          .divider-vertical { display: none !important; }
        }
      `}</style>
    </section>
  );
}
