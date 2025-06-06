// src/components/onboarding/OnboardingStep2.tsx
import React from 'react';

interface OnboardingStep2Props {
    saveOnboardingChoice: (key: 'preference', value: 'solo' | 'group') => void;
    showOnboardingStep: (step: number) => void;
}

const OnboardingStep2: React.FC<OnboardingStep2Props> = ({ saveOnboardingChoice, showOnboardingStep }) => {
    return (
        <div id="onboarding-step-2" className="fade-in">
            <h2 className="text-4xl font-bold mb-10 drop-shadow-md">어떤 스타일의 운동을<br/>선호하시나요?</h2>
            <div className="space-y-6 w-full max-w-sm">
                <button onClick={() => { saveOnboardingChoice('preference', 'solo'); showOnboardingStep(3); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🧘 혼자서 집중하는 운동</button>
                <button onClick={() => { saveOnboardingChoice('preference', 'group'); showOnboardingStep(3); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🤝 여럿이 함께 즐기는 운동</button>
            </div>
        </div>
    );
};

export default OnboardingStep2;