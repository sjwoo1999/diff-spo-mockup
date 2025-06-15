import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import AllClasses from '@/components/classes/AllClasses';
import { ClassItem } from '@/types';
import ClassCard from './ClassCard';

interface ClassesPageContentProps {
    classes: ClassItem[];
    matchingClasses: ClassItem[];
}

const ClassesPageContent: React.FC<ClassesPageContentProps> = ({ classes, matchingClasses }) => {
    const commonPadding = 'p-4 sm:p-6 md:p-8';

    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-xl mx-auto overflow-y-auto px-4 pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4 px-4">추천 클래스</h2>
                <div className="grid grid-cols-1 gap-4 mb-8 w-full">
                    {classes.map((classItem) => (
                        <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-primary mb-4 px-4">스케줄 기반 매칭 클래스</h2>
                <div className="grid grid-cols-1 gap-4 w-full">
                    {matchingClasses.map((classItem) => (
                        <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassesPageContent;
