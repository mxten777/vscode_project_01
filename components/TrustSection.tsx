"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "12",
    unit: "년",
    label: "국회의원 경력",
    sub: "3선 연속 당선",
    icon: "🏛️",
    color: "linear-gradient(135deg, #F59E0B, #FBBF24)",
  },
  {
    number: "150",
    unit: "건",
    label: "대표 발의 법안",
    sub: "처리율 78%",
    icon: "📋",
    color: "linear-gradient(135deg, #60A5FA, #93C5FD)",
  },
  {
    number: "4,200",
    unit: "억",
    label: "지역 예산 확보",
    sub: "역대 최대 규모",
    icon: "💰",
    color: "linear-gradient(135deg, #34D399, #6EE7B7)",
  },
  {
    number: "500",
    unit: "회",
    label: "주민 간담회",
    sub: "현장 중심 정치",
    icon: "🤝",
    color: "linear-gradient(135deg, #F472B6, #FBCFE8)",
  },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const rawNumber = parseFloat(stat.number.replace(",", ""));
  const counted = useCountUp(rawNumber, 1800 + index * 200, active);
  const display = rawNumber >= 1000 ? counted.toLocaleString() : counted;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "36px 28px",
        transition: "all 0.35s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = "rgba(255,255,255,0.16)";
        el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: stat.color,
          borderRadius: "20px 20px 0 0",
        }}
      />
      <div style={{ fontSize: "32px", marginBottom: "16px" }}>{stat.icon}</div>
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "6px",
          background: stat.color,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {display}
        <span style={{ fontSize: "60%", fontWeight: 700 }}>{stat.unit}</span>
      </div>
      <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
        {stat.label}
      </div>
      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{stat.sub}</div>
    </div>
  );
}

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trust"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0F2850 0%, #0B1F3A 100%)",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      {/* Divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(245,158,11,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            TRACK RECORD
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
            숫자로 증명하는{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              실적과 신뢰
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto" }}>
            말이 아닌 결과로, 약속이 아닌 실천으로 만들어온 12년의 기록입니다.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="trust-grid"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
