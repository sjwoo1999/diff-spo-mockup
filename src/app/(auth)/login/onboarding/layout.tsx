// src/app/(auth)/login/layout.tsx
// 이 파일은 로그인 및 온보딩 페이지의 레이아웃을 정의합니다.

import React from 'react';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ 배경을 완전한 검은색(#0B0B0B 또는 Tailwind의 'bg-black')으로 설정
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      {children}
    </div>
  );
}
