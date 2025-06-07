// src/hooks/useOnboarding.ts

import { useState, useEffect, useCallback } from 'react';
import { OnboardingChoices, OnboardingChoiceKey } from '@/types';

// 기본 초기값 (OnboardingChoices 타입에 맞게 조정)
const initialOnboardingChoices: OnboardingChoices = {
    purpose: [],
    ageGroup: [],
    availableTime: [],
    intensity: undefined,
    preference: undefined,
    cost: undefined,
    physicalLimitations: undefined,
    locationPreference: undefined,
};

const useOnboarding = () => {
    const [onboardingStep, setOnboardingStep] = useState(1);
    const [onboardingChoices, setOnboardingChoices] = useState<OnboardingChoices>(initialOnboardingChoices);
    // ✨ 제거합니다.
    // const [isLoading, setIsLoading] = useState(false);
    // const [agreedToTerms, setAgreedToTerms] = useState(false);

    const totalSteps = 2; // ✨ 총 스텝 수를 2로 변경 (OnboardingStep1, OnboardingStep2)

    // 로컬 스토리지에서 선택 사항 로드 (최초 렌더링 시)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedChoices = localStorage.getItem('onboardingChoices');
            if (savedChoices) {
                setOnboardingChoices(JSON.parse(savedChoices) as OnboardingChoices);
            }

            // ✨ 제거합니다.
            // const savedAgreedToTerms = localStorage.getItem('agreedToTerms');
            // if (savedAgreedToTerms === 'true') {
            //     setAgreedToTerms(true);
            // }

            // 온보딩 완료 여부 확인 및 스텝 설정
            const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
            const hasAgreedToTerms = localStorage.getItem('agreedToTerms'); // TermsOfServicePage에서 저장된 값

            if (hasCompletedOnboarding === 'true' && hasAgreedToTerms === 'true') {
                setOnboardingStep(totalSteps + 1); // 완료 상태로 설정
            } else if (hasAgreedToTerms !== 'true') {
                // 약관 동의가 안 되어 있다면, 온보딩을 시작하지 않도록 초기 스텝을 1로 유지하거나,
                // 페이지에서 직접 리다이렉트하는 것이 더 낫습니다. (현재 page.tsx에서 처리 중)
            }
        }
    }, [totalSteps]); // totalSteps가 변경될 수 있으므로 의존성 배열에 추가 (현재는 상수지만, 미래를 대비)

    // 선택 사항 저장
    const saveOnboardingChoice = useCallback(<K extends OnboardingChoiceKey>(key: K, value: OnboardingChoices[K]) => {
        setOnboardingChoices(prev => {
            const newChoices = { ...prev, [key]: value };
            localStorage.setItem('onboardingChoices', JSON.stringify(newChoices));
            return newChoices;
        });
    }, []);

    // 온보딩 완료 처리 (실제 데이터 저장 및 플래그 설정)
    // 이 함수를 `nextStep` 내부에서 호출할 수 있도록 `useCallback`으로 감싸줍니다.
    const completeOnboarding = useCallback(async () => {
        // setIsLoading(true); // ✨ 제거
        try {
            console.log('온보딩 선택 사항 완료:', onboardingChoices);
            // 실제 백엔드 API 호출 등을 여기에 추가
            // await api.saveOnboardingData(onboardingChoices);

            localStorage.setItem('hasCompletedOnboarding', 'true');
            // setIsLoading(false); // ✨ 제거
            return true;
        } catch (error) {
            console.error('온보딩 완료 중 오류 발생:', error);
            // setIsLoading(false); // ✨ 제거
            return false;
        }
    }, [onboardingChoices]); // onboardingChoices가 변경될 수 있으므로 의존성 배열에 추가

    // 다음 스텝으로 이동
    const nextStep = useCallback(() => {
        setOnboardingStep(prev => {
            const next = prev + 1;
            // ✨ 마지막 스텝을 넘어서면 온보딩 완료 처리
            if (next > totalSteps) {
                completeOnboarding(); // 직접 호출하도록 변경
                return totalSteps + 1; // 완료 상태로 설정하여 스텝 증가 방지
            }
            return next;
        });
    }, [completeOnboarding, totalSteps]);


    // 이전 스텝으로 이동
    const prevStep = useCallback(() => {
        setOnboardingStep(prev => Math.max(1, prev - 1));
    }, []);

    // 추가 질문 건너뛰기 (온보딩 완료 처리와 동일하게 동작)
    const skipOptionalQuestions = useCallback(async () => {
        // setIsLoading(true); // ✨ 제거
        try {
            console.log('추가 질문 건너뛰기 - 현재 온보딩 선택 사항으로 완료:', onboardingChoices);
            localStorage.setItem('hasCompletedOnboarding', 'true');
            // setIsLoading(false); // ✨ 제거
            return true;
        } catch (error) {
            console.error('추가 질문 건너뛰기 중 오류 발생:', error);
            // setIsLoading(false); // ✨ 제거
            return false;
        }
    }, [onboardingChoices]);

    return {
        onboardingStep,
        onboardingChoices,
        saveOnboardingChoice,
        nextStep,
        prevStep,
        completeOnboarding,
        skipOptionalQuestions,
        // isLoading, // ✨ 제거
        // agreedToTerms, // ✨ 제거
        // setAgreedToTerms, // ✨ 제거
    };
};

export default useOnboarding;