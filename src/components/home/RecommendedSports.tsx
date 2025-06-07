// src/components/home/RecommendedSports.tsx
import React from 'react'
import { Sport } from '@/types';
import Image from 'next/image';

interface RecommendedSportsProps {
    sports: Sport[];
}

const RecommendedSports: React.FC<RecommendedSportsProps> = ({ sports }) => {
    return (
        <section className="mb-8 mx-auto max-w-[512px]">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">추천 스포츠</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sports.map((sport) => (
                    <div key={sport.id} className="bg-white rounded-lg shadow-md p-4">
                        <Image
                            src={sport.imageUrl}
                            alt={sport.name}
                            width={600}
                            height={400}
                            className="w-full h-32 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{sport.name}</h3>
                        <p className="text-gray-600 text-sm">{sport.description}</p>
                        {/* 기타 스포츠 상세 정보 렌더링 */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecommendedSports;