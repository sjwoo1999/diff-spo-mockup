'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageType, OnboardingChoices, Sport, User } from '@/types';
import { database } from '@/data/database';
import { getPersonalizedRecommendations, recommendClasses, findMatchingClasses } from '@/utils/algorithms';
import HomePageContent from '@/components/home/HomePageContent';
import ClassesPageContent from '@/components/classes/ClassesPageContent';
import CommunityPageContent from '@/components/community/CommunityPageContent';
import MyPageContent from '@/components/my/MyPageContent';
import StorePageContent from '@/components/store/StorePageContent';
import BottomNav from '@/components/common/BottomNav';

function MainPageInner() {
    const [activePage, setActivePage] = useState<PageType>('home');
    const [userOnboardingChoices, setUserOnboardingChoices] = useState<OnboardingChoices>({
        purpose: [],
        ageGroup: [],
        availableTime: [],
        intensity: undefined,
        preference: undefined,
        cost: undefined,
        physicalLimitations: undefined,
        locationPreference: undefined,
    });
    const [recommendedSportsList, setRecommendedSportsList] = useState<Sport[]>([]);
    const [recommendedClasses, setRecommendedClasses] = useState(database.classes);
    const [matchingClasses, setMatchingClasses] = useState(database.classes);

    const searchParams = useSearchParams();

    // 목업 사용자 데이터
    const mockUser: User = {
        id: '1',
        name: '테스트 사용자',
        email: 'test@example.com',
        fitnessLevel: '중급',
        skillLevel: '초급',
        preferredLocation: '실내',
        equipment: ['테니스 라켓', '운동화'],
        activities: [],
        preferences: {
            preferredSports: ['테니스', '수영'],
            preferredTime: ['주말 오전'],
            preferredDays: ['토', '일'],
            preferredIntensity: '보통',
            preferredGroupSize: '소그룹'
        }
    };

    useEffect(() => {
        const savedChoices = localStorage.getItem('onboardingChoices');
        if (savedChoices) {
            setUserOnboardingChoices(JSON.parse(savedChoices) as OnboardingChoices);
        }
    }, []);

    useEffect(() => {
        // 개인화된 스포츠 추천
        const context = {
            weather: '맑음',
            time: '오후 2시',
            location: '강남구'
        };
        const recommendedSports = getPersonalizedRecommendations(mockUser, database.sports, context);
        setRecommendedSportsList(recommendedSports);

        // 클래스 추천
        const recommended = recommendClasses(mockUser, database.classes);
        setRecommendedClasses(recommended);

        // 스케줄 기반 클래스 매칭
        const matched = findMatchingClasses(mockUser, database.classes);
        setMatchingClasses(matched);
    }, [userOnboardingChoices]);

    useEffect(() => {
        // 쿼리스트링(tab=...)으로 진입 시 해당 탭 활성화
        const tab = searchParams.get('tab');
        if (tab && ['home','classes','community','my','store'].includes(tab)) {
            setActivePage(tab as PageType);
        }
    }, [searchParams]);

    const renderPageContent = () => {
        switch (activePage) {
            case 'home':
                return (
                    <HomePageContent 
                        recommendedSportsList={recommendedSportsList} 
                        userOnboardingChoices={userOnboardingChoices} 
                    />
                );
            case 'classes':
                return (
                    <ClassesPageContent 
                        classes={recommendedClasses}
                        matchingClasses={matchingClasses}
                    />
                );
            case 'community':
                return (
                    <CommunityPageContent posts={database.community} />
                );
            case 'my':
                return (
                    <MyPageContent database={database} />
                );
            case 'store':
                return (
                    <StorePageContent database={database} />
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center bg-black">
            <div className="relative w-full max-w-xl min-h-screen flex flex-col bg-white">
                <main className="flex-1 flex flex-col w-full max-w-xl mx-auto bg-white px-2 pb-24">
                    <div className="w-full max-w-xl mx-auto">
                        {renderPageContent()}
                    </div>
                </main>
                <BottomNav activePage={activePage} setActivePage={setActivePage} />
            </div>
        </div>
    );
}

export default function MainPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainPageInner />
        </Suspense>
    );
}
