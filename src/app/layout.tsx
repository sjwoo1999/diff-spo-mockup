import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR, Inter } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-noto-sans-kr',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'DIFF-SPO | 이색 스포츠 큐레이션 플랫폼',
    description: 'DIFF-SPO는 당신의 라이프스타일에 특별한 움직임을 더합니다. 이색 스포츠부터 커뮤니티, 클래스 예약, 장비 쇼핑까지 한 번에 경험해보세요!',
    keywords: ['DIFF-SPO', '스포츠 추천', '이색 스포츠', '스포츠 클래스', '액티비티 큐레이션', '취미 찾기', '운동 커뮤니티', '스포츠 장비 쇼핑'],
    openGraph: {
      title: 'DIFF-SPO | 일상에 특별한 스핀을!',
      description: '스포츠가 지루하다고요? DIFF-SPO에서 나만의 이색 스포츠를 찾고, 공유하고, 즐기세요.',
      url: 'https://diff-spo.xyz',
      type: 'website',
      images: [
        {
          url: '/images/logo/logo.png', // 📌 썸네일 이미지가 있다면 해당 경로 설정
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
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
