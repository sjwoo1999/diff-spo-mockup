import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import AllClasses from '@/components/classes/AllClasses';
import { ClassItem } from '@/types';

interface ClassesPageContentProps {
    classes: ClassItem[];
}

const ClassesPageContent: React.FC<ClassesPageContentProps> = ({ classes }) => {
    const commonPadding = 'p-4 sm:p-6 md:p-8';

    return (
        <div className={`page active ${commonPadding} overflow-y-auto`}>
            <PageHeader
                title="클래스 & 여행"
                description="DIFF-SPO과 함께라면 당신의 취향을 찾아 더욱 풍부한 경험을 누릴 수 있습니다."
                // 🎨 생략해도 default 값이 위에서 반영됨 (black / neutral-dark)
            />
            <div className="mt-6">
                <AllClasses classes={classes} />
            </div>
        </div>
    );
};

export default ClassesPageContent;
