// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Database } from '@/types';
import { db as initialDb } from '@/data/db';
import useOnboarding from '@/hooks/useOnboarding';

// Import Page Components
import OnboardingSection from '@/components/onboarding/OnboardingSection';
import HomePage from '@/components/home/HomePage';
import CommunityPage from '../components/community/CommunityPage';
import ClassesPage from '../components/classes/ClassesPage';
import MyPage from '../components/my/MyPage';
import BottomNav from '../components/common/BottomNav';

export default function Home() {
    const [database, setDatabase] = useState<Database>(initialDb);
    const {
        currentPage,
        setCurrentPage,
        onboardingStep,
        setOnboardingStep,
        showBottomNav,
        setShowBottomNav,
        saveOnboardingChoice,
        finishOnboarding,
    } = useOnboarding(setDatabase); // Pass setDatabase to the hook

    // Effect to scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    // Determine which page to render
    const renderPage = () => {
        switch (currentPage) {
            case 'onboarding':
                return (
                    <OnboardingSection
                        onboardingStep={onboardingStep}
                        showOnboardingStep={setOnboardingStep}
                        saveOnboardingChoice={saveOnboardingChoice}
                        finishOnboarding={finishOnboarding}
                    />
                );
            case 'home':
                return <HomePage database={database} />;
            case 'community':
                return <CommunityPage database={database} />;
            case 'classes':
                return <ClassesPage database={database} />;
            case 'my':
                return <MyPage database={database} />;
            default:
                return null;
        }
    };

    return (
        <div id="app" className="max-w-lg mx-auto bg-white min-h-screen shadow-xl overflow-hidden relative">
            <main id="main-content" className="pb-20">
                {renderPage()}
            </main>

            <BottomNav currentPage={currentPage} showPage={setCurrentPage} showBottomNav={showBottomNav} />
        </div>
    );
}