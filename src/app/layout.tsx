// src/app/layout.tsx
import './globals.css';
import { Inter, Noto_Sans_KR } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'], // 필요한 모든 두께 포함
  variable: '--font-noto-sans-kr',
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body>{children}</body>
    </html>
  );
}