'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useOnboarding from '@/hooks/useOnboarding';
import OnboardingSurvey from '@/components/onboarding/OnboardingSurvey';

const OnboardingPage: React.FC = () => {
  const router = useRouter();
  const {
    completeOnboarding,
    skipOptionalQuestions,
  } = useOnboarding();

  // ✅ 상태로 관리 (null: 초기 상태, true/false는 판단 완료)
  const [hasCompleted, setHasCompleted] = useState<null | boolean>(null);

  const handleComplete = useCallback(async () => {
    const success = await completeOnboarding();
    if (success) {
      localStorage.setItem('hasCompletedOnboarding', 'true');
      router.push('/main');
    }
  }, [completeOnboarding, router]);

  const handleSkip = useCallback(async () => {
    await skipOptionalQuestions();
    localStorage.setItem('hasCompletedOnboarding', 'true');
    router.push('/main');
  }, [skipOptionalQuestions, router]);

  // ✅ 최초 접근 시 상태 확인
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const hasAgreedToTerms = localStorage.getItem('agreedToTerms');
      const completed = localStorage.getItem('hasCompletedOnboarding');

      if (isLoggedIn !== 'true') {
        router.replace('/auth/login');
        return;
      }

      if (hasAgreedToTerms !== 'true') {
        router.replace('/terms-of-service');
        return;
      }

      // 상태 판단
      if (completed === 'true') {
        setHasCompleted(true);
      } else {
        setHasCompleted(false);
      }
    }
  }, [router]);

  // ✅ 리다이렉션 (hasCompleted === true일 때만)
  useEffect(() => {
    if (hasCompleted === true) {
      router.replace('/main');
    }
  }, [hasCompleted, router]);

  // ✅ 초기 상태일 때 렌더링 보류 (로딩 스피너 대체 가능)
  if (hasCompleted === null) return null;

  // ✅ 온보딩 진행
  return (
    <OnboardingSurvey
      onSurveyComplete={handleComplete}
      onSkipOptional={handleSkip}
    />
  );
};

export default OnboardingPage;
