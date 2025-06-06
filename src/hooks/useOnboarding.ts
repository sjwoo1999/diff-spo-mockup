// src/hooks/useOnboarding.ts
import { useState, useEffect } from 'react';
import { Database } from '@/types';

type PageType = 'onboarding' | 'home' | 'community' | 'classes' | 'my';
type OnboardingChoiceKey = 'preference' | 'intensity';
type OnboardingChoiceValue = 'solo' | 'group' | 'low' | 'medium' | 'high';

interface UseOnboardingReturn {
    currentPage: PageType;
    setCurrentPage: React.Dispatch<React.SetStateAction<PageType>>;
    onboardingStep: number;
    setOnboardingStep: React.Dispatch<React.SetStateAction<number>>;
    showBottomNav: boolean;
    setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>;
    saveOnboardingChoice: (key: OnboardingChoiceKey, value: OnboardingChoiceValue) => void;
    finishOnboarding: () => void;
}

const useOnboarding = (setDatabase: React.Dispatch<React.SetStateAction<Database>>): UseOnboardingReturn => {
    const [currentPage, setCurrentPage] = useState<PageType>('onboarding');
    const [onboardingStep, setOnboardingStep] = useState(1);
    const [showBottomNav, setShowBottomNav] = useState(false);

    useEffect(() => {
        // You can uncomment this block for production or if you want to persist onboarding
        // const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
        // if (hasCompletedOnboarding === 'true') {
        //     setCurrentPage('home');
        //     setShowBottomNav(true);
        //     const savedChoices = localStorage.getItem('onboardingChoices');
        //     if (savedChoices) {
        //         setDatabase(prevDb => ({
        //             ...prevDb,
        //             user: {
        //                 ...prevDb.user,
        //                 onboardingChoices: JSON.parse(savedChoices)
        //             }
        //         }));
        //     }
        // } else {
        //     setCurrentPage('onboarding');
        //     setShowBottomNav(false);
        // }

        // For development/testing, always start with onboarding
        setCurrentPage('onboarding');
        setShowBottomNav(false);
    }, [setDatabase]); // Add setDatabase to dependencies if it's stable. If it's a state setter from useState, it's stable.

    const saveOnboardingChoice = (key: OnboardingChoiceKey, value: OnboardingChoiceValue) => {
        setDatabase(prevDb => ({
            ...prevDb,
            user: {
                ...prevDb.user,
                onboardingChoices: {
                    ...prevDb.user.onboardingChoices,
                    [key]: value
                }
            }
        }));
    };

    const finishOnboarding = () => {
        // Ensure database state is updated before saving to localStorage
        setDatabase(prevDb => {
            const updatedDb = {
                ...prevDb,
                user: {
                    ...prevDb.user,
                    onboardingChoices: {
                        ...prevDb.user.onboardingChoices,
                    }
                }
            };
            localStorage.setItem('hasCompletedOnboarding', 'true');
            localStorage.setItem('onboardingChoices', JSON.stringify(updatedDb.user.onboardingChoices));
            setCurrentPage('home');
            setShowBottomNav(true);
            return updatedDb;
        });
    };

    return {
        currentPage,
        setCurrentPage,
        onboardingStep,
        setOnboardingStep,
        showBottomNav,
        setShowBottomNav,
        saveOnboardingChoice,
        finishOnboarding,
    };
};

export default useOnboarding;