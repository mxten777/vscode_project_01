# 청가람 국회의원 공식 랜딩페이지

> **대통령 후보급 초프리미엄 정치인 브랜드 사이트**  
> "신뢰 · 리더십 · 미래 비전"을 담은 공식 웹사이트

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [기술 스택](#2-기술-스택)
3. [디렉토리 구조](#3-디렉토리-구조)
4. [컴포넌트 상세 설명](#4-컴포넌트-상세-설명)
5. [디자인 시스템](#5-디자인-시스템)
6. [애니메이션 시스템](#6-애니메이션-시스템)
7. [반응형 브레이크포인트](#7-반응형-브레이크포인트)
8. [개발 환경 설정](#8-개발-환경-설정)
9. [빌드 및 배포](#9-빌드-및-배포)
10. [성능 최적화 전략](#10-성능-최적화-전략)
11. [커스터마이징 가이드](#11-커스터마이징-가이드)

---

## 1. 프로젝트 개요

### 목적

이 프로젝트는 국회의원 **청가람**의 공식 랜딩페이지입니다.  
단순한 정치 홍보물이 아닌, **국가 리더 브랜드 사이트** 수준으로 설계되었습니다.

### 사용자 경험 목표

사이트에 방문하는 사용자가 느껴야 할 인상:

- 이 사람은 **국가 지도자급**이다
- **능력 있고 신뢰감** 있다
- **정책 중심** 정치인이다
- **세련되고 현대적**인 정치인이다

### 벤치마크 수준

| 기준 | 목표 |
|---|---|
| 정치 사이트 | 미국 대선 캠페인 사이트 수준 |
| 브랜드 사이트 | 대기업 CEO 브랜드 사이트 수준 |
| UX 수준 | 프리미엄 SaaS 사이트 수준 |

---

## 2. 기술 스택

| 분류 | 기술 | 버전 | 용도 |
|---|---|---|---|
| 프레임워크 | **Next.js** | 16.1.6 | App Router, SSG, 라우팅 |
| 언어 | **TypeScript** | ^5 | 타입 안전성 |
| 스타일링 | **Tailwind CSS** | ^4 | 유틸리티 CSS |
| 애니메이션 | **Framer Motion** | ^12 | 진입 애니메이션, 트랜지션 |
| 아이콘 | **Lucide React** | ^0.575 | 프리미엄 SVG 아이콘 |
| 폰트 | **Noto Sans KR** | Google Fonts | 한국어 최적화 타이포그래피 |
| 런타임 | **Node.js** | 24.x LTS | 서버 런타임 |

### 주요 설계 결정

- **App Router** 사용 (Next.js 13+ 방식) — 파일 기반 라우팅, 레이아웃 공유
- **`"use client"` 지시어** — 인터랙션·애니메이션이 있는 모든 컴포넌트에 적용
- **Static Prerendering** — SEO 최적화 및 Lighthouse 성능 확보
- **인라인 스타일 + className 혼용** — Tailwind 유틸리티와 동적 JavaScript 스타일을 함께 사용

---

## 3. 디렉토리 구조

```
vscode_project_01/
├── app/                          # Next.js App Router 루트
│   ├── globals.css               # 전역 스타일, CSS 변수, 커스텀 유틸리티
│   ├── layout.tsx                # 루트 레이아웃 (메타데이터, 폰트 로드)
│   └── page.tsx                  # 메인 페이지 (모든 섹션 조합)
│
├── components/                   # 페이지 섹션 컴포넌트
│   ├── Navbar.tsx                # 고정 상단 내비게이션 바
│   ├── HeroSection.tsx           # 풀스크린 히어로 섹션
│   ├── TrustSection.tsx          # 신뢰도 수치 섹션
│   ├── PolicySection.tsx         # 핵심 정책 섹션
│   ├── LeadershipSection.tsx     # 리더십 메시지 섹션
│   ├── TimelineSection.tsx       # 의정활동 타임라인
│   ├── NewsSection.tsx           # 언론보도 섹션
│   ├── GallerySection.tsx        # 활동 사진 갤러리
│   ├── CtaSection.tsx            # 소통 CTA 섹션
│   └── Footer.tsx                # 하단 푸터
│
├── public/                       # 정적 파일 (이미지 등)
├── next.config.ts                # Next.js 설정
├── tailwind.config.ts            # Tailwind 설정 (자동 생성)
├── tsconfig.json                 # TypeScript 설정
├── postcss.config.mjs            # PostCSS 설정
└── package.json                  # 의존성 및 스크립트
```

---

## 4. 컴포넌트 상세 설명

### 4.1 `Navbar.tsx` — 상단 내비게이션

**역할:** 페이지 최상단에 고정되는 내비게이션 바

**주요 기능:**
- `scrollY > 40px` 감지 시 배경에 블러·반투명 효과 적용
- 데스크탑: 가로 메뉴 + 황금색 "후원하기" CTA 버튼
- 모바일: 햄버거 버튼 → 풀스크린 드롭다운 메뉴
- `useState` + `useEffect`로 스크롤 상태 관리
- 768px 이하에서 `.mobile-menu-btn` 노출, `.desktop-nav` 숨김

**섹션 앵커 링크:**

| 메뉴 | 이동 섹션 |
|---|---|
| 소개 | `#leadership` |
| 정책 | `#policy` |
| 의정활동 | `#timeline` |
| 언론보도 | `#news` |
| 소통 | `#cta` |

---

### 4.2 `HeroSection.tsx` — 히어로 섹션

**역할:** 사이트의 첫인상을 결정하는 풀스크린 핵심 섹션

**레이아웃:**
```
┌────────────────────────────────┐
│  [배지] 현직 국회의원 | 3선      │
│                                │
│  대한민국의                      │  ┌──────────────┐
│  미래를 준비합니다 (황금 gradient) │  │   인물 사진   │
│                                │  │              │
│  정책으로 증명하는 국회의원 청가람  │  │  [뱃지-경력] │
│                                │  │  [뱃지-법안] │
│  [정책 보기] [의정활동] [소통하기] │  └──────────────┘
└────────────────────────────────┘
```

**프리미엄 요소:**
- Floating Orb 3개 (파랑·금·미드나이트) — CSS `@keyframes float` 애니메이션
- 격자 오버레이 (투명도 3% 그리드)
- 스크롤 인디케이터 (하단 중앙)
- Framer Motion `FadeUp` 래퍼 컴포넌트 — 0~0.38초 딜레이로 순차 진입

**`FadeUp` 컴포넌트:**
```tsx
// 사용법
<FadeUp delay={0.1} style={{ marginBottom: "20px" }}>
  <h1>...</h1>
</FadeUp>
```

---

### 4.3 `TrustSection.tsx` — 신뢰도 섹션

**역할:** Hero 바로 아래 배치되는 수치 기반 신뢰도 증명 섹션

**표시 데이터:**

| 수치 | 설명 |
|---|---|
| 12년 | 국회의원 경력 |
| 150건 | 대표 발의 법안 |
| 4,200억 | 지역 예산 확보 |
| 500회 | 주민 간담회 |

**Count-up 애니메이션:**
- `IntersectionObserver` — 섹션이 뷰포트에 30% 이상 진입 시 카운팅 시작
- `useCountUp(target, duration, active)` 커스텀 훅 사용
- cubic-ease-out 공식: `1 - (1 - progress)³`
- 각 카드마다 `1800 + index * 200ms` 딜레이로 순차 실행

**카드 스타일:** Glass Card (반투명 배경 + backdrop-blur)

---

### 4.4 `PolicySection.tsx` — 핵심 정책 섹션

**역할:** 6대 핵심 정책을 프리미엄 카드 그리드로 제시

**6대 정책:**

| 아이콘 | 정책명 | 컬러 |
|---|---|---|
| 🎓 | 청년 정책 | `#3B82F6` (블루) |
| 📚 | 교육 혁신 | `#F59E0B` (골드) |
| 📈 | 경제 성장 | `#34D399` (그린) |
| 🏥 | 복지 강화 | `#F472B6` (핑크) |
| 🏙️ | 지역 발전 | `#A78BFA` (퍼플) |
| 🌱 | 환경·미래 | `#6EE7B7` (민트) |

**hover 효과:**
- `translateY(-8px)` 상승
- 카드 색상별 `border-color` 변경
- `box-shadow` 증가 (컬러별 glow)

---

### 4.5 `LeadershipSection.tsx` — 리더십 메시지

**역할:** 인물 사진과 진정성 있는 인사말을 통한 신뢰 구축

**레이아웃:** 좌측 인물 사진 + 우측 메시지 (2열 그리드)

**구성 요소:**
- 인물 사진 프레임 (4:5 비율, 하단 그라디언트 오버레이)
- 3가지 핵심 가치 카드: 공정한 정치 / 투명한 의정 / 강한 책임감
- 서명 영역 (이름 + 직책)

---

### 4.6 `TimelineSection.tsx` — 의정활동 타임라인

**역할:** 연도별 주요 의정활동을 타임라인으로 시각화

**디자인 특징:**
- 좌측 수직 라인: `linear-gradient(블루 → 네이비 → 골드 → 네이비 → 블루)`
- 각 항목: 점(dot) + 카드 형태
- hover 시 `translateX(4px)` 이동 + 좌측 컬러 accent 라인 강조

**타임라인 항목 데이터 구조:**
```tsx
{
  year: "2024",
  title: "지역 복합문화센터 건립 추진",
  desc: "...",
  category: "지역발전",
  badge: "예산 확보",
  color: "#F59E0B",
}
```

---

### 4.7 `NewsSection.tsx` — 언론보도 섹션

**역할:** 주요 언론 보도 카드형 레이아웃으로 신뢰성 강화

**그리드 구성:**
- 2열 그리드
- 첫 번째 카드: Featured (세로형, 이미지 상단)
- 나머지 카드: 가로형 (이미지 좌측 + 텍스트 우측)

**hover 효과:** `translateY(-6px)` + 컬러별 border glow

---

### 4.8 `GallerySection.tsx` — 활동 사진 갤러리

**역할:** 현장 활동 사진을 Masonry 스타일 그리드로 전시

**그리드 구성 (4열):**
- 1번, 6번 카드: `grid-column: span 2` (와이드 카드, 16:9 비율)
- 나머지 카드: 1열 (4:3 비율)

**hover 효과:**
```
배경 이미지: scale(1.06) zoom-in
오버레이: opacity 0 → 1 (어두운 그라디언트 + "현장 활동" 텍스트)
```

---

### 4.9 `CtaSection.tsx` — 소통 CTA 섹션

**역할:** 국민 참여 유도를 위한 대형 Call-to-Action 섹션

**3가지 행동 유도:**

| 아이콘 | 액션 | 컬러 |
|---|---|---|
| 💬 | 문의하기 | `#3B82F6` |
| ❤️ | 후원하기 | `#F59E0B` |
| 👥 | 자원봉사 신청 | `#34D399` |

**하단 연락처 스트립:** 전화번호 / 이메일 / 소셜 미디어 링크 (YouTube, Instagram, Facebook, X)

---

### 4.10 `Footer.tsx` — 하단 푸터

**역할:** 전체 사이트 정보 요약 및 링크 모음

**4열 구성:**
1. 브랜드 로고 + 소개 문구
2. 빠른 링크
3. 정책 분야 링크
4. 소통 채널 링크

---

## 5. 디자인 시스템

### 5.1 컬러 팔레트

```css
/* 주요 색상 */
--navy:       #0B1F3A   /* Primary - 다크 네이비 배경 */
--royal-blue: #1E3A8A   /* Secondary - 로열 블루 */
--gold:       #F59E0B   /* Accent - 골드 (강조, CTA) */
--sky-blue:   #3B82F6   /* Support - 스카이 블루 */

/* 파생 색상 */
#93C5FD   /* Light Blue - 부제목, 뱃지 텍스트 */
#FBBF24   /* Light Gold - 그라디언트 끝 */
#060F1E   /* Deep Navy - Footer 배경 */
```

### 5.2 타이포그래피

| 용도 | 크기 | 굵기 | 비고 |
|---|---|---|---|
| Hero 헤드라인 | `clamp(2.6rem, 6vw, 5rem)` | 900 | 반응형 fluid 크기 |
| 섹션 타이틀 | `clamp(1.8rem, 4vw, 2.6rem)` | 900 | |
| 카드 제목 | `17~20px` | 700~800 | |
| 본문 | `14~16px` | 400 | `line-height: 1.65~1.85` |
| 뱃지/레이블 | `11~13px` | 700 | `letter-spacing: 0.05~0.1em` |

**폰트:** Noto Sans KR (Google Fonts), weight: 300/400/500/700/900

### 5.3 공통 CSS 유틸리티 클래스

`app/globals.css`에 정의된 커스텀 유틸리티:

```css
.gradient-text        /* 골드 계열 그라디언트 텍스트 */
.gradient-text-blue   /* 블루 계열 그라디언트 텍스트 */
.glass-card           /* 반투명 블러 Glass 카드 */
.glow-gold            /* 골드 글로우 박스 섀도 */
.glow-blue            /* 블루 글로우 박스 섀도 */
.orb                  /* Floating Orb 기본 스타일 */
.animate-float        /* 상하 8초 float 애니메이션 */
.animate-float-reverse /* 반대 방향 10초 float */
.animate-pulse-glow   /* 4초 opacity pulse */
```

---

## 6. 애니메이션 시스템

### 6.1 CSS 커스텀 애니메이션 (`globals.css`)

```css
@keyframes float           /* 8s - 상하 20px 이동, scale 1→1.05 */
@keyframes floatReverse    /* 10s - 반대 방향 */
@keyframes pulse-glow      /* 4s - opacity 0.2↔0.4 */
```

### 6.2 Framer Motion 진입 애니메이션

**Hero 섹션 진입 순서:**

| 요소 | 딜레이 | 효과 |
|---|---|---|
| 뱃지 (현직/3선) | 0s | `opacity 0→1`, `y 36→0` |
| 헤드라인 | 0.1s | 동일 |
| 서브 헤드라인 | 0.2s | 동일 |
| 설명 문구 | 0.28s | 동일 |
| CTA 버튼 그룹 | 0.38s | 동일 |
| 인물 사진 | 0.2s | `opacity 0→1`, `scale 0.95→1` |
| 하단 뱃지 | 0.7s | `opacity 0→1`, `x -20→0` |
| 상단 뱃지 | 0.9s | `opacity 0→1`, `x 20→0` |
| 스크롤 인디케이터 | 1.2s | `opacity 0→1` |

**`FadeUp` 재사용 컴포넌트 구조:**
```tsx
function FadeUp({ children, delay = 0, style }) {
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
```

### 6.3 TrustSection Count-up 훅

```tsx
function useCountUp(target: number, duration: number, active: boolean) {
  // active === true 일 때 카운팅 시작
  // cubic easeOut: ease = 1 - (1 - progress)³
  // requestAnimationFrame 기반 60fps 업데이트
}
```

---

## 7. 반응형 브레이크포인트

| 구간 | 조건 | 주요 변화 |
|---|---|---|
| 데스크탑 | `> 1024px` | 기본 레이아웃 (2~4열) |
| 태블릿 | `769px ~ 1024px` | 일부 2열로 축소 |
| 모바일 | `≤ 768px` | 전체 1열, 버튼 세로 정렬 |
| 소형 모바일 | `≤ 560px` | TrustSection 1열 |
| 초소형 | `≤ 480px` | Gallery 1열 |

**각 컴포넌트별 반응형 처리:**

| 컴포넌트 | 데스크탑 | 모바일 |
|---|---|---|
| HeroSection | 2열 (텍스트 / 사진) | 1열 (사진 하단) |
| TrustSection | 4열 | 2열 → 1열 |
| PolicySection | 3열 | 2열 → 1열 |
| LeadershipSection | 2열 (사진 / 메시지) | 1열 |
| NewsSection | 2열 | 1열 |
| GallerySection | 4열 (스팬 포함) | 2열 → 1열 |
| CtaSection | 3열 | 1열 |
| Footer | 4열 | 2열 → 1열 |

---

## 8. 개발 환경 설정

### 8.1 사전 요구사항

- **Node.js** v20 이상 (권장: v24 LTS)
- **npm** v10 이상

### 8.2 설치 및 실행

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

개발 서버 주소: **http://localhost:3000**

### 8.3 Windows PowerShell 실행 정책 문제 해결

npm 스크립트가 실행되지 않는 경우:

```powershell
# 실행 정책 변경 (현재 사용자)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

# PATH 새로고침 (Node.js 신규 설치 후)
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" +
            [System.Environment]::GetEnvironmentVariable("PATH","User")
```

---

## 9. 빌드 및 배포

### 9.1 프로덕션 빌드

```bash
# 빌드
npm run build

# 로컬에서 프로덕션 모드 실행
npm run start
```

**빌드 결과 확인 항목:**
- `✓ Compiled successfully` — TypeScript 컴파일 성공
- `✓ Finished TypeScript` — 타입 오류 없음
- `✓ Generating static pages` — 정적 사전 렌더링 완료
- 라우트: `○ /` — Static 사전 렌더링

### 9.2 Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

**환경 변수 (필요 시):**

| 변수명 | 설명 | 기본값 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 사이트 도메인 | — |

### 9.3 빌드 오류 대응

| 오류 유형 | 원인 | 해결 방법 |
|---|---|---|
| `Event handlers cannot be passed to Client Component props` | 서버 컴포넌트에 `onMouseEnter` 등 전달 | 해당 파일 상단에 `"use client"` 추가 |
| Framer Motion `Variants` 타입 오류 | `ease` 에 숫자 배열 사용 | `ease: "easeOut"` 문자열로 변경 |
| `npm` not recognized | Node.js PATH 미등록 | 위 PowerShell PATH 새로고침 실행 |

---

## 10. 성능 최적화 전략

### 10.1 적용된 최적화 기법

| 기법 | 적용 위치 | 효과 |
|---|---|---|
| **Static Prerendering** | 전체 페이지 | TTFB 최소화 |
| **Google Fonts `display=swap`** | `layout.tsx` | CLS(레이아웃 이동) 방지 |
| **IntersectionObserver** | TrustSection | 뷰포트 진입 시만 카운팅 실행 |
| **CSS transform 애니메이션** | hover 효과 전체 | GPU 가속, 리페인트 없음 |
| **`passive: true` 이벤트** | Navbar 스크롤 | 스크롤 성능 저하 방지 |
| **`requestAnimationFrame`** | Count-up | 프레임 드롭 없는 애니메이션 |

### 10.2 이미지 최적화 가이드 (실제 사진 교체 시)

실제 인물 사진 사용 시 `next/image` 컴포넌트 활용 권장:

```tsx
import Image from "next/image";

<Image
  src="/portrait.jpg"
  alt="청가람 국회의원"
  width={460}
  height={613}
  priority          // Hero 이미지는 priority 설정
  className="..."
/>
```

---

## 11. 커스터마이징 가이드

### 11.1 인물명/직책 변경

전체 검색·교체 대상 문자열:

```
"청가람"     → 실제 의원명으로 교체
"3선"        → 실제 선수로 교체
"鄭"         → 성씨 한자로 교체
"GA-RAM CHEONG" → 로마자 이름으로 교체
"02-788-XXXX"    → 실제 연락처로 교체
"office@cheongaram.kr" → 실제 이메일로 교체
```

### 11.2 수치 데이터 변경

`TrustSection.tsx` 상단 `stats` 배열:

```tsx
const stats = [
  { number: "12", unit: "년", label: "국회의원 경력", ... },
  { number: "150", unit: "건", label: "대표 발의 법안", ... },
  { number: "4,200", unit: "억", label: "지역 예산 확보", ... },
  { number: "500", unit: "회", label: "주민 간담회", ... },
];
```

### 11.3 정책 내용 변경

`PolicySection.tsx` 상단 `policies` 배열에서 각 정책의 `title`, `desc`, `points` 수정

### 11.4 타임라인 항목 변경

`TimelineSection.tsx` 상단 `timelineItems` 배열에 항목 추가/수정

### 11.5 실제 인물 사진 교체

현재 인물 사진 영역은 CSS gradient로 대체된 플레이스홀더입니다.  
실제 사진 교체 위치:

- **HeroSection.tsx** — 우측 인물 카드 내부 `<div>` → `<Image>` 태그로 교체
- **LeadershipSection.tsx** — 좌측 사진 카드 내부 → `<Image>` 태그로 교체

### 11.6 컬러 테마 변경

`app/globals.css`의 `:root` 변수 수정:

```css
:root {
  --background: #0B1F3A;   /* 메인 배경색 */
  --navy: #0B1F3A;         /* Primary */
  --royal-blue: #1E3A8A;   /* Secondary */
  --gold: #F59E0B;         /* Accent */
  --sky-blue: #3B82F6;     /* Support */
}
```

---

## 라이선스

이 프로젝트는 청가람 국회의원 공식 사이트 용도로 제작되었습니다.  
무단 복제 및 상업적 이용을 금합니다.

---

*최종 업데이트: 2026년 2월 22일*
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
