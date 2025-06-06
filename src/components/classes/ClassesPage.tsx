// src/components/classes/ClassesPage.tsx
import React, { useCallback } from 'react';
import { Database } from '@/types';
import PageHeader from '@/components/common/PageHeader';

interface ClassesPageProps {
    database: Database;
}

const ClassesPage: React.FC<ClassesPageProps> = ({ database }) => {
    const renderAllClasses = useCallback(() => {
        return database.classes.map((c, index) => (
            <div
                key={c.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition duration-300 interactive-card active:scale-99 animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="p-5">
                    <h3 className="font-bold text-xl text-gray-900">{c.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">강사: <span className="font-medium">{c.instructor}</span></p>
                    <p className="text-gray-600 text-sm">장소: <span className="font-medium">{c.location}</span></p>
                    <div className="text-right font-bold text-2xl text-orange-600 mt-5">{c.price}</div>
                </div>
            </div>
        ));
    }, [database.classes]);

    return (
        <section id="page-classes" className="page active p-4">
            <PageHeader
                title="클래스 &amp; 여행"
                description="전문가에게 직접 배우거나, 운동과 여행을 함께 즐겨보세요. SPIN이 검증한 수준 높은 클래스와 특별한 여행 상품이 준비되어 있습니다."
            />
            <div id="all-classes" className="space-y-4 mt-6">
                {renderAllClasses()}
            </div>
        </section>
    );
};

export default ClassesPage;