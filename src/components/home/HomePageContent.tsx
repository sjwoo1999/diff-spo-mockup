'use client';

import React from 'react';
import RecommendedSports from '@/components/home/RecommendedSports';
import PopularClasses from '@/components/home/PopularClasses';
import { Sport, OnboardingChoices } from '@/types';
import { database } from '@/data/database';
import { useRouter } from 'next/navigation'; // ⭐ 추가
import '@/styles/glitch.css'; // ✨ glitch 애니메이션 CSS

interface HomePageContentProps {
    recommendedSportsList: Sport[];
    userOnboardingChoices: OnboardingChoices;
}

const HomePageContent: React.FC<HomePageContentProps> = ({ recommendedSportsList, userOnboardingChoices }) => {
    const router = useRouter(); // ⭐ 추가
    const commonPadding = 'p-4 sm:p-6 md:p-8';

    // ⭐ 탐색 페이지로 이동하는 핸들러
    const handleExploreClick = () => {
        router.push('/explore-sports');
    };

    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-xl mx-auto px-4 pt-6">
                <RecommendedSports sports={recommendedSportsList} onExploreClick={handleExploreClick} />
                <div className="mt-8 w-full">
                    <PopularClasses classes={database.classes} />
                </div>
            </div>
        </div>
    );
};

export default HomePageContent;
