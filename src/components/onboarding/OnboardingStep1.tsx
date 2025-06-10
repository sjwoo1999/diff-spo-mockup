'use client';

import React from 'react';
import { OnboardingStepWithNextProps } from '@/types/OnboardingStepProps';
import { Purpose } from '@/types';

const OnboardingStep1: React.FC<OnboardingStepWithNextProps> = ({ currentChoices, saveChoice, onNext }) => {
    const purposes: Purpose[] = [
        '다이어트', '체력 증진', '취미', '힐링', '경쟁',
        '여행', '교류', '스트레스 해소', '상관 없음'
    ];

    const handlePurposeChange = (purpose: Purpose) => {
        const newPurposes = currentChoices.purpose?.includes(purpose)
            ? currentChoices.purpose.filter(p => p !== purpose)
            : [...(currentChoices.purpose || []), purpose];
        saveChoice('purpose', newPurposes);
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">어떤 운동 목적을 가지고 계신가요?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {purposes.map((purpose) => (
                        <button
                            key={purpose}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.purpose?.includes(purpose)
                                    ? 'bg-white text-primary shadow-md'
                                    : 'bg-white/30 text-white hover:bg-white/50'
                                }`}
                            onClick={() => handlePurposeChange(purpose)}
                        >
                            {purpose}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    disabled={!currentChoices.purpose || currentChoices.purpose.length === 0}
                    className="py-2 px-6 bg-white text-primary rounded-lg font-semibold shadow-md
                               disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default OnboardingStep1;
