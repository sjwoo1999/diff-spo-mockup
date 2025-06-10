// src/app/(auth)/login/layout.tsx
import React from 'react';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {children}
    </div>
  );
}
