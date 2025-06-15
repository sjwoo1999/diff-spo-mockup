import React from 'react';

export default function SafeAreaWrapper({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div
      className={`min-h-screen bg-white pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] ${className}`}
    >
      {children}
    </div>
  );
} 