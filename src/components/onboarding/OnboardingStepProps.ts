// src/components/onboarding/OnboardingStepProps.ts
import { OnboardingChoices } from '@/types';

export interface OnboardingBaseProps {
    currentChoices: OnboardingChoices;
    saveChoice: <K extends keyof OnboardingChoices>(key: K, value: OnboardingChoices[K]) => void;
}

export interface OnboardingStepWithNextProps extends OnboardingBaseProps {
    onNext: () => void;
}

export interface OnboardingStepWithPrevNextProps extends OnboardingStepWithNextProps {
    onPrev: () => void;
    onSkipOptional?: () => Promise<void>; // onSkipOptional을 여기에 포함
}

export interface TermsPageFinalStepProps {
    agreedToTerms: boolean;
    setAgreedToTerms: (agreed: boolean) => void;
    setShowTermsModal: (show: boolean) => void;
    isLoading: boolean;
    onComplete: () => void;
}