// src/components/common/PageHeader.tsx

import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string; // className 속성 추가
    as?: 'h1' | 'h2' | 'h3'; // ⭐ 추가: heading level flexibility
    titleColor?: string;
    descriptionColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className, as = 'h2', titleColor= 'text-gray-800', descriptionColor='text-gray-600', }) => {
    const HeadingTag = as; // 동적 heading tag

    return (
        <div className={`text-center max-w-xl mx-auto ${className}`}>
            <HeadingTag className={`text-3xl font-bold mb-2 ${titleColor}`}>{title}</HeadingTag>
            <p className={`text-lg ${descriptionColor}`}>{description}</p>
        </div>
    );
};

export default PageHeader;
