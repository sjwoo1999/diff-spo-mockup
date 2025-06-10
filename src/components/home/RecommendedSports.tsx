'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sport } from '@/types';
import Image from 'next/image';

interface RecommendedSportsProps {
    sports: Sport[];
    onExploreClick: () => void;
}

const RecommendedSports: React.FC<RecommendedSportsProps> = ({ sports, onExploreClick }) => {
    const router = useRouter();

    return (
        <section className="mb-8 mx-auto max-w-[512px]">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">추천 스포츠</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {sports.map((sport) => (
                    <div
                        key={sport.id}
                        onClick={() => router.push(`/sports/${sport.id}`)}
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
                    >
                        <Image
                            src={sport.imageUrl}
                            alt={sport.name}
                            width={600}
                            height={400}
                            className="w-full h-32 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-lg font-semibold text-black">{sport.name}</h3>
                        <p className="text-neutral-dark text-sm">{sport.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={onExploreClick}
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition active:scale-95"
                >
                    + 더 많은 스포츠 탐색하기
                </button>
            </div>
        </section>
    );
};

export default RecommendedSports;
