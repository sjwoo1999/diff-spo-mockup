// src/components/onboarding/OnboardingSurvey.tsx
'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';

import { OnboardingChoices } from '@/types';
import useOnboarding from '@/hooks/useOnboarding';
// import { database } from '@/data/database'; // 이전에 이미 삭제했거나, 다시 확인하고 삭제합니다.

// ✨ OnboardingStepProps에서 임포트할 타입들을 제거합니다. (이 파일에서 직접 사용되지 않음)
// import { OnboardingStepWithNextProps, OnboardingStepWithPrevNextProps } from '@/components/onboarding/OnboardingStepProps';


interface OnboardingSurveyProps {
    onSurveyComplete: (choices: OnboardingChoices) => void;
    onSkipOptional: () => void;
}

const OnboardingSurvey: React.FC<OnboardingSurveyProps> = ({ onSurveyComplete, onSkipOptional }) => {
    const router = useRouter();

    const {
        onboardingStep,
        saveOnboardingChoice,
        completeOnboarding,
        nextStep,
        prevStep,
        skipOptionalQuestions,
    } = useOnboarding();

    const [localOnboardingChoices, setLocalOnboardingChoices] = useState<OnboardingChoices>({
        purpose: [],
        intensity: undefined,
        preference: undefined,
        cost: undefined,
        ageGroup: [],
        physicalLimitations: [],
        locationPreference: undefined,
        availableTime: [],
    });

    const handleSaveChoice = useCallback(<K extends keyof OnboardingChoices>(key: K, value: OnboardingChoices[K]) => {
        setLocalOnboardingChoices(prev => ({
            ...prev,
            [key]: value
        }));
        saveOnboardingChoice(key, value);
    }, [saveOnboardingChoice]);


    const handleNextStep = useCallback(() => {
        nextStep();
    }, [nextStep]);

    const handleFinishOnboarding = useCallback(async () => {
        await completeOnboarding();
        onSurveyComplete(localOnboardingChoices);
        router.replace('/home');
    }, [localOnboardingChoices, completeOnboarding, onSurveyComplete, router]);

    const handleSkipAdditionalQuestions = useCallback(async () => {
        await skipOptionalQuestions();
        onSkipOptional();
        router.replace('/home');
    }, [skipOptionalQuestions, onSkipOptional, router]);

    const totalSteps = 2;

    return (
        <div className="w-full max-w-lg mx-auto rounded-lg shadow-xl p-6 overflow-y-auto max-h-[95vh] text-white bg-gradient-to-br from-orange-600 to-red-600">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                SPIN 온보딩 설문 ({onboardingStep}/{totalSteps})
            </h2>

            {onboardingStep === 1 && (
                <OnboardingStep1
                    currentChoices={localOnboardingChoices}
                    saveChoice={handleSaveChoice}
                    onNext={handleNextStep}
                />
            )}

            {onboardingStep === 2 && (
                <OnboardingStep2
                    currentChoices={localOnboardingChoices}
                    saveChoice={handleSaveChoice}
                    onNext={handleFinishOnboarding}
                    onPrev={prevStep}
                    onSkipOptional={handleSkipAdditionalQuestions}
                />
            )}
        </div>
    );
};

export default OnboardingSurvey;