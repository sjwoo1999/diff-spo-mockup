// src/components/onboarding/OnboardingStep1.tsx
import React from 'react';

interface OnboardingStep1Props {
    showOnboardingStep: (step: number) => void;
}

const OnboardingStep1: React.FC<OnboardingStep1Props> = ({ showOnboardingStep }) => {
    return (
        <div id="onboarding-step-1" className="animate-bounce-in">
            <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">SPIN</h1>
            <p className="text-xl text-white mb-12 leading-relaxed drop-shadow-md">일상에 새로운 스핀을 더하다.<br/>당신의 특별한 움직임, SPIN에서 시작!</p>
            <button onClick={() => showOnboardingStep(2)} className="w-full bg-white text-orange-600 font-bold py-5 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-300 text-xl active:scale-95 border-b-4 border-orange-700 hover:border-orange-800">시작하기</button>
        </div>
    );
};

export default OnboardingStep1;