// src/app/(auth)/login/layout.tsx
// 이 파일은 로그인 및 온보딩 페이지의 레이아웃을 정의합니다.

import React from 'react';

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // 로그인 및 온보딩 페이지에 공통적으로 적용될 레이아웃 스타일
        // 예를 들어, 전체 화면을 차지하고 내용을 중앙에 배치하는 스타일
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 p-4">
            {children}
        </div>
    );
}