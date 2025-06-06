// src/components/onboarding/OnboardingStep3.tsx
import React from 'react';

interface OnboardingStep3Props {
    saveOnboardingChoice: (key: 'intensity', value: 'low' | 'medium' | 'high') => void;
    finishOnboarding: () => void;
}

const OnboardingStep3: React.FC<OnboardingStep3Props> = ({ saveOnboardingChoice, finishOnboarding }) => {
    return (
        <div id="onboarding-step-3" className="fade-in">
            <h2 className="text-4xl font-bold mb-10 drop-shadow-md">선호하는 운동 강도를<br/>선택해주세요.</h2>
             <div className="space-y-6 w-full max-w-sm">
                <button onClick={() => { saveOnboardingChoice('intensity', 'low'); finishOnboarding(); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🍃 가볍게 즐기는 힐링</button>
                <button onClick={() => { saveOnboardingChoice('intensity', 'medium'); finishOnboarding(); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🔥 활동적인 에너지 발산</button>
                <button onClick={() => { saveOnboardingChoice('intensity', 'high'); finishOnboarding(); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🚀 한계를 넘는 익스트림</button>
            </div>
        </div>
    );
};

export default OnboardingStep3;