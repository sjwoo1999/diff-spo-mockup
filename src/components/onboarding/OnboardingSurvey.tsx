'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';

import { OnboardingChoices } from '@/types';
import useOnboarding from '@/hooks/useOnboarding';

interface OnboardingSurveyProps {
  onSurveyComplete: (choices: OnboardingChoices) => void;
  onSkipOptional: () => void;
}

const OnboardingSurvey: React.FC<OnboardingSurveyProps> = ({
  onSurveyComplete,
  onSkipOptional,
}) => {
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

  const handleSaveChoice = useCallback(
    <K extends keyof OnboardingChoices>(key: K, value: OnboardingChoices[K]) => {
      setLocalOnboardingChoices((prev) => ({
        ...prev,
        [key]: value,
      }));
      saveOnboardingChoice(key, value);
    },
    [saveOnboardingChoice]
  );

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
    <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white font-kr px-4 py-8">
      {/* 헤더 */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-center drop-shadow-md">
        DIFF-SPO 온보딩 ({onboardingStep}/{totalSteps})
      </h1>

      {/* 질문 영역 */}
      <div className="w-full max-w-lg flex-grow flex flex-col justify-center">
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

      {/* 푸터 */}
      <footer className="text-sm text-white/70 mt-8 text-center font-sans">
        ⛳ 특별한 스포츠 경험을 위한 <span className="text-white font-semibold">DIFF-SPO</span>와 함께하세요.
      </footer>
    </div>
  );
};

export default OnboardingSurvey;
