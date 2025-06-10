import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR, Inter } from 'next/font/google';
import Script from 'next/script';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-kr',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// GA 측정 ID는 환경변수에서 불러오기
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'DIFF-SPO | 이색 스포츠 큐레이션 플랫폼',
  description:
    'DIFF-SPO는 당신의 라이프스타일에 특별한 움직임을 더합니다. 이색 스포츠부터 커뮤니티, 클래스 예약, 장비 쇼핑까지 한 번에 경험해보세요!',
  keywords: [
    'DIFF-SPO',
    '스포츠 추천',
    '이색 스포츠',
    '스포츠 클래스',
    '액티비티 큐레이션',
    '취미 찾기',
    '운동 커뮤니티',
    '스포츠 장비 쇼핑',
  ],
  openGraph: {
    title: 'DIFF-SPO | 일상에 특별한 스핀을!',
    description: '스포츠가 지루하다고요? DIFF-SPO에서 나만의 이색 스포츠를 찾고, 공유하고, 즐기세요.',
    url: 'https://www.diff-spo.xyz',
    type: 'website',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'DIFF-SPO 서비스 소개 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIFF-SPO | 이색 스포츠 큐레이션',
    description: '내게 맞는 특별한 스포츠 경험, 지금 DIFF-SPO에서 시작하세요!',
    images: ['/images/logo/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* ✅ Google Analytics Script */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={[
          notoSansKr.variable,
          inter.variable,
          'flex',
          'flex-col',
          'min-h-screen',
          'w-full',
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  );
}
