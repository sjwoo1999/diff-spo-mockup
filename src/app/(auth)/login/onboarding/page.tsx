'use client';
import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useOnboarding from '@/hooks/useOnboarding';

import OnboardingStep1 from '@/components/onboarding/OnboardingStep1';
import OnboardingStep2 from '@/components/onboarding/OnboardingStep2';

const OnboardingPage: React.FC = () => {
    const router = useRouter();
    const {
        onboardingStep,
        onboardingChoices,
        saveOnboardingChoice,
        nextStep,
        prevStep,
        completeOnboarding,
        skipOptionalQuestions,
    } = useOnboarding();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 상태도 확인
            const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
            const hasAgreedToTerms = localStorage.getItem('agreedToTerms'); // 'hasAgreedToTerms' 대신 'agreedToTerms' 사용 확인

            // 로그인 안 됐으면 로그인 페이지로
            if (isLoggedIn !== 'true') {
                router.replace('/auth/login');
            } 
            // 약관 동의 안 됐으면 약관 페이지로 (올바른 경로 사용)
            else if (hasAgreedToTerms !== 'true') {
                router.replace('/terms-of-service'); // ✨ 이 부분을 수정했습니다!
            } 
            // 온보딩 완료했으면 홈으로
            else if (hasCompletedOnboarding === 'true') {
                router.replace('/home');
            }
            // 그 외 (로그인 O, 약관 동의 O, 온보딩 미완료) -> 현재 온보딩 페이지 유지
        }
    }, [router]); // router는 의존성 배열에 있어야 합니다.

    const handleCompleteOnboarding = useCallback(async () => {
        const success = await completeOnboarding();
        if (success) {
            localStorage.setItem('hasCompletedOnboarding', 'true'); // 온보딩 완료 상태 저장
            router.push('/home');
        }
    }, [completeOnboarding, router]);

    const handleSkipAdditionalQuestions = useCallback(async () => {
        await skipOptionalQuestions();
        localStorage.setItem('hasCompletedOnboarding', 'true'); // 건너뛰면 완료한 것으로 간주
        router.push('/home');
    }, [skipOptionalQuestions, router]);

    const renderStepContent = () => {
        const commonProps = {
            currentChoices: onboardingChoices,
            saveChoice: saveOnboardingChoice,
        };

        switch (onboardingStep) {
            case 1:
                return <OnboardingStep1 {...commonProps} onNext={nextStep} />;
            case 2:
                return (
                    <OnboardingStep2
                        {...commonProps}
                        onNext={nextStep}
                        onPrev={prevStep}
                        onSkipOptional={handleSkipAdditionalQuestions}
                    />
                );
            default:
                // 온보딩 단계가 2를 초과하면 자동으로 완료 처리
                return <p className="text-white">온보딩 완료 중...</p>;
        }
    };

    const totalSteps = 2; // 총 온보딩 단계 수

    useEffect(() => {
        // 온보딩 단계가 총 단계를 초과하면 완료 처리
        if (onboardingStep > totalSteps) {
            handleCompleteOnboarding();
        }
    }, [onboardingStep, totalSteps, handleCompleteOnboarding]);


    return (
        <div className="page active p-4 sm:p-6 md:p-8 flex flex-col justify-between items-center text-center overflow-y-auto flex-grow bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold mt-4 mb-8">
                SPIN 온보딩 ({onboardingStep}/{totalSteps})
            </h1>
            <div className="flex-grow w-full max-w-lg mx-auto flex flex-col justify-center items-center">
                {renderStepContent()}
            </div>
            {/* 하단 네비게이션 또는 버튼이 있다면 여기에 추가 */}
        </div>
    );
};

export default OnboardingPage;