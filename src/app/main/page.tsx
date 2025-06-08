'use client';

import React, { useState, useEffect } from 'react';
import { database } from '@/data/database';
import { Sport, OnboardingChoices } from '@/types';
import BottomNav from '@/components/common/BottomNav';
import HomePageContent from '@/components/home/HomePageContent';
import ClassesPageContent from '@/components/classes/ClassesPageContent';
import CommunityPageContent from '@/components/community/CommunityPageContent';
import MyPageContent from '@/components/my/MyPageContent';
import StorePageContent from '@/components/store/StorePageContent';

type PageType = 'home' | 'classes' | 'community' | 'my' | 'store';

const MainPage: React.FC = () => {
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

    useEffect(() => {
        const savedChoices = localStorage.getItem('onboardingChoices');
        if (savedChoices) {
            setUserOnboardingChoices(JSON.parse(savedChoices) as OnboardingChoices);
        }
    }, []);

    useEffect(() => {
        const filtered = database.sports.filter((sport) => {
            let matches = true;

            if (userOnboardingChoices.intensity && sport.intensity !== userOnboardingChoices.intensity) {
                matches = false;
            }
            if (userOnboardingChoices.preference && sport.preference !== userOnboardingChoices.preference) {
                matches = false;
            }
            if (userOnboardingChoices.purpose?.length > 0) {
                matches = sport.purpose?.some(p => userOnboardingChoices.purpose.includes(p)) ?? false;
            }
            if (userOnboardingChoices.cost && sport.cost !== userOnboardingChoices.cost) {
                matches = false;
            }
            if (userOnboardingChoices.ageGroup?.length > 0) {
                matches = sport.ageGroup?.some(a => userOnboardingChoices.ageGroup.includes(a)) ?? false;
            }
            if (userOnboardingChoices.locationPreference && 
                sport.locationPreference !== userOnboardingChoices.locationPreference &&
                userOnboardingChoices.locationPreference !== '상관 없음') {
                matches = false;
            }
            if (userOnboardingChoices.availableTime?.length > 0 && !userOnboardingChoices.availableTime.includes('언제든')) {
                matches = sport.availableTime?.some(t => userOnboardingChoices.availableTime.includes(t)) ?? false;
            }

            return matches;
        });

        setRecommendedSportsList(filtered);
    }, [userOnboardingChoices]);

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
                    <ClassesPageContent classes={database.classes} />
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
        <>
            <main className="flex flex-col flex-grow min-h-screen w-full max-w-[512px] mx-auto overflow-y-auto">
                {renderPageContent()}
            </main>
            <BottomNav activePage={activePage} setActivePage={setActivePage} />
        </>
    );
};

export default MainPage;
