// src/components/onboarding/OnboardingSection.tsx
import React from 'react';
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';
import OnboardingStep3 from './OnboardingStep3';

interface OnboardingSectionProps {
    onboardingStep: number;
    showOnboardingStep: (step: number) => void;
    saveOnboardingChoice: (key: 'preference' | 'intensity', value: 'solo' | 'group' | 'low' | 'medium' | 'high') => void;
    finishOnboarding: () => void;
}

const OnboardingSection: React.FC<OnboardingSectionProps> = ({
    onboardingStep,
    showOnboardingStep,
    saveOnboardingChoice,
    finishOnboarding,
}) => {
    return (
        <section id="page-onboarding" className="page active">
            <div className="h-screen flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-orange-600 to-red-600 text-white">
                {onboardingStep === 1 && <OnboardingStep1 showOnboardingStep={showOnboardingStep} />}
                {onboardingStep === 2 && <OnboardingStep2 saveOnboardingChoice={saveOnboardingChoice} showOnboardingStep={showOnboardingStep} />}
                {onboardingStep === 3 && <OnboardingStep3 saveOnboardingChoice={saveOnboardingChoice} finishOnboarding={finishOnboarding} />}
            </div>
        </section>
    );
};

export default OnboardingSection;