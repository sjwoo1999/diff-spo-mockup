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
    title: 'SPIN',
    description: '일상에 새로운 스핀을 더하다. 당신의 특별한 움직임, SPIN에서 시작!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${notoSansKr.variable} ${inter.variable} flex flex-col min-h-screen w-full`}>
                {children}
            </body>
        </html>
    );
}
