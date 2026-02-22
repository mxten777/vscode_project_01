import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "청가람 국회의원 | 국민과 함께 만드는 대한민국",
  description: "정책으로 증명하는 국회의원 청가람. 신뢰·리더십·미래 비전을 담은 공식 사이트입니다.",
  keywords: "청가람, 국회의원, 정책, 청년, 교육, 경제, 복지, 지역발전",
  openGraph: {
    title: "청가람 국회의원 | 국민과 함께 만드는 대한민국",
    description: "정책으로 증명하는 국회의원 청가람의 공식 사이트",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
