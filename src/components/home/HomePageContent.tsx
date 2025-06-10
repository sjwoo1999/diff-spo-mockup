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
        <div className={`page active ${commonPadding} overflow-y-auto`}>
            <div className="mb-6">
                <div
                    data-glitch="DIFF-SPO"
                    className="glitch text-3xl sm:text-4xl font-extrabold tracking-widest select-none"
                    style={{
                    color: '#6B21A8', // 기본 보라 (차분한 톤)
                    }}
                >
                    DIFF-SPO
                    <style jsx>{`
                    .glitch::before {
                        color: #A78BFA !important;  /* 연보라 */
                        opacity: 0.4 !important;
                        animation: glitch-soft 1.5s infinite;
                    }
                    .glitch::after {
                        color: #C4B5FD !important;  /* 아주 연한 보라 */
                        opacity: 0.3 !important;
                        animation: glitch-soft 1.5s infinite reverse;
                    }

                    @keyframes glitch-soft {
                        0% { transform: translate(0); }
                        25% { transform: translate(-0.5px, 0.5px); }
                        50% { transform: translate(0.5px, -0.5px); }
                        75% { transform: translate(-0.5px, -0.5px); }
                        100% { transform: translate(0); }
                    }
                    `}</style>
                </div>
            </div>
            <p className="text-neutral-dark text-sm sm:text-base mb-6 sm:mb-8">
                {userOnboardingChoices.preference === '개인' && '혼자서 즐기기 좋은'}
                {userOnboardingChoices.preference === '그룹' && '함께 즐기기 좋은'}
                {userOnboardingChoices.preference === '상관 없음' && '다양한'} 스포츠를 추천해 드려요!
            </p>
    
            <RecommendedSports sports={recommendedSportsList} onExploreClick={handleExploreClick} />
    
            <div className="mt-8">
                <PopularClasses classes={database.classes} />
            </div>
        </div>
    );
};

export default HomePageContent;
