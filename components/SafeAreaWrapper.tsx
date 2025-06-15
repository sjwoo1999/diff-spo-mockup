'use client';

interface SafeAreaWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SafeAreaWrapper({ children, className = '' }: SafeAreaWrapperProps) {
  return (
    <div className={`min-h-screen bg-background pt-safe pb-safe px-4 ${className}`}>
      {children}
    </div>
  );
} 