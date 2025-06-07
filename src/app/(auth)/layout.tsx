// src/app/(auth)/login/layout.tsx
import React from 'react';

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // 여기서는 특별한 Wrapper 없이 단순히 children을 렌더링하거나,
        // 로그인 페이지에만 적용될 특정 스타일/레이아웃을 적용할 수 있습니다.
        // 예: 중앙 정렬, 배경색 등
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
            {children}
        </div>
    );
}