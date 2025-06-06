// src/components/common/PageHeader.tsx
import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <header className="py-5 border-b-2 border-gray-100 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
        </header>
    );
};

export default PageHeader;