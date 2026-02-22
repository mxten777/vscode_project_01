"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Users } from "lucide-react";

function FadeUp({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0B1F3A 0%, #0F2850 40%, #1E3A8A 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Floating Orbs */}
      <div
        className="orb animate-float"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          top: "-150px",
          right: "-100px",
          opacity: 0.18,
        }}
      />
      <div
        className="orb animate-float-reverse"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)",
          bottom: "-100px",
          left: "-80px",
          opacity: 0.12,
        }}
      />
      <div
        className="orb animate-pulse-glow"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #1E3A8A 0%, transparent 70%)",
          top: "40%",
          left: "40%",
          opacity: 0.2,
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* LEFT: Text Content */}
        <div>
          {/* Badges */}
          <FadeUp delay={0} style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.4)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#F59E0B",
                letterSpacing: "0.08em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#F59E0B",
                  display: "inline-block",
                  animation: "heroPulse 2s infinite",
                }}
              />
              현직 국회의원
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.35)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#93C5FD",
                letterSpacing: "0.08em",
              }}
            >
              3선 국회의원
            </span>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.1} style={{ marginBottom: "20px" }}>
            <h1>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.6rem, 6vw, 5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.08",
                }}
              >
                대한민국의
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.6rem, 6vw, 5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: "1.08",
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24, #FDE68A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                미래를 준비합니다
              </span>
            </h1>
          </FadeUp>

          {/* Sub-headline */}
          <FadeUp
            delay={0.2}
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "14px",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            <p>
              정책으로 증명하는 국회의원{" "}
              <strong style={{ color: "#93C5FD", fontWeight: 700 }}>청가람</strong>
            </p>
          </FadeUp>

          <FadeUp
            delay={0.28}
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "44px",
              maxWidth: "480px",
              lineHeight: "1.7",
            }}
          >
            <p>
              12년간 현장에서 국민과 함께 뛰어온 청가람 의원.
              <br />
              말이 아닌 실천으로, 약속이 아닌 결과로 보여드리겠습니다.
            </p>
          </FadeUp>

          {/* CTA Buttons */}
          <FadeUp delay={0.38} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#policy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 28px",
                background: "linear-gradient(135deg, #1E3A8A, #2563EB)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(37,99,235,0.45)",
                transition: "all 0.25s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 32px rgba(37,99,235,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.45)";
              }}
            >
              <FileText size={17} />
              정책 보기
              <ArrowRight size={15} />
            </a>
            <a
              href="#timeline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 28px",
                background: "rgba(255,255,255,0.07)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                borderRadius: "10px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              의정활동 보기
            </a>
            <a
              href="#cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 28px",
                background: "transparent",
                color: "#F59E0B",
                fontWeight: 600,
                fontSize: "15px",
                borderRadius: "10px",
                textDecoration: "none",
                border: "1px solid rgba(245,158,11,0.35)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,158,11,0.1)";
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Users size={17} />
              소통하기
            </a>
          </FadeUp>
        </div>

        {/* RIGHT: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "460px",
            }}
          >
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(245,158,11,0.15))",
                filter: "blur(30px)",
              }}
            />
            {/* Image frame */}
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.15)",
                background: "linear-gradient(180deg, #1E3A8A 0%, #0B1F3A 100%)",
                aspectRatio: "3/4",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(180deg, #1E3A8A 0%, #0F2850 60%, #0B1F3A 100%)",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563EB, #1E3A8A)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "52px",
                    fontWeight: 900,
                    color: "#fff",
                    marginBottom: "20px",
                    boxShadow: "0 8px 30px rgba(37,99,235,0.5)",
                  }}
                >
                  淸
                </div>
                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  청가람
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "13px",
                    color: "#93C5FD",
                    letterSpacing: "0.1em",
                  }}
                >
                  GA-RAM CHEONG
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    padding: "8px 20px",
                    borderRadius: "999px",
                    background: "rgba(245,158,11,0.15)",
                    border: "1px solid rgba(245,158,11,0.35)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#F59E0B",
                    letterSpacing: "0.05em",
                  }}
                >
                  3선 국회의원
                </div>
              </div>
            </div>

            {/* Floating badge - bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
              style={{
                position: "absolute",
                bottom: "24px",
                left: "-20px",
                background: "rgba(11,31,58,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: "14px",
                padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "3px" }}>
                국회의원 경력
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                12년
              </div>
            </motion.div>

            {/* Upper badge - top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
              style={{
                position: "absolute",
                top: "24px",
                right: "-16px",
                background: "rgba(11,31,58,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "14px",
                padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "3px" }}>
                발의 법안
              </div>
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #60A5FA, #93C5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                150건
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255,255,255,0.35)",
          fontSize: "12px",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
            animation: "heroPulse 2s infinite",
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 40px 20px !important;
          }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
