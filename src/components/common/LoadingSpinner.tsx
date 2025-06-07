// src/components/common/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
      {/* 흰색 텍스트와 어울리도록 스피너 색상을 흰색으로 변경했습니다. */}
    </div>
  );
};

export default LoadingSpinner;