// src/components/common/PageHeader.tsx (예상 경로)

import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string; // className 속성 추가
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className }) => {
    return (
        <div className={`text-center ${className}`}> {/* className 적용 */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-lg">{description}</p>
        </div>
    );
};

export default PageHeader;