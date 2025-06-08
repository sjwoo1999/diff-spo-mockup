'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import RecommendedSports from '@/components/home/RecommendedSports';
import ComparatorChart from '@/components/home/ComparatorChart';
import PopularClasses from '@/components/home/PopularClasses';
import { Sport, OnboardingChoices } from '@/types';
import { database } from '@/data/database';
import { useRouter } from 'next/navigation'; // ⭐ 추가

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
        <div className={`page active ${commonPadding} overflow-y-auto`}>
            <PageHeader
                title="SPIN 홈"
                description="이색 스포츠와 클래스를 추천해 드려요!"
                className="mb-6"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">SPIN 홈</h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                {userOnboardingChoices.preference === '개인' && '혼자서 즐기기 좋은'}
                {userOnboardingChoices.preference === '그룹' && '함께 즐기기 좋은'}
                {userOnboardingChoices.preference === '상관 없음' && '다양한'} 스포츠를 추천해 드려요!
            </p>

            <RecommendedSports sports={recommendedSportsList} onExploreClick={handleExploreClick} />

            <div className="mt-8">
                <ComparatorChart recommendedSports={recommendedSportsList} />
            </div>

            <div className="mt-8">
                <PopularClasses classes={database.classes} />
            </div>
        </div>
    );
};

export default HomePageContent;
