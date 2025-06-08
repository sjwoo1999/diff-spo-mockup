// src/components/onboarding/OnboardingStep2.tsx
import React from 'react';
import { OnboardingStepWithPrevNextProps } from '@/types/OnboardingStepProps'; // ✨ OnboardingStep2Props 대신 OnboardingStepWithPrevNextProps 임포트
import { IntensityLevel, PreferenceType, CostLevel, AgeGroup, LocationPreference, AvailableTime, PhysicalLimitations } from '@/types'; // 필요한 타입들 임포트

// OnboardingStep2Props 대신 OnboardingStepWithPrevNextProps를 사용
const OnboardingStep2: React.FC<OnboardingStepWithPrevNextProps> = ({ currentChoices, saveChoice, onNext, onPrev, onSkipOptional }) => {
    // ... (기존 OnboardingStep2 컴포넌트 로직)
    const intensityLevels: IntensityLevel[] = ['낮음', '보통', '높음'];
    const preferenceTypes: PreferenceType[] = ['개인', '그룹', '상관 없음'];
    const costLevels: CostLevel[] = ['무료', '저렴', '보통', '고가'];
    const ageGroups: AgeGroup[] = ['10대', '20대', '30대', '40대', '50대 이상'];
    const locationPreferences: LocationPreference[] = ['실내', '실외', '상관 없음'];
    const availableTimes: AvailableTime[] = ['평일 오전', '평일 오후', '주말', '상관 없음', '언제든'];
    const physicalLimitations: PhysicalLimitations[] = ['없음', '관절', '심혈관', '호흡기', '기타'];


    return (
        <div className="space-y-6">
            {/* 운동 강도 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">선호하는 운동 강도를 선택해 주세요.</h3>
                <div className="flex flex-wrap gap-3">
                    {intensityLevels.map((level) => (
                        <button
                            key={level}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.intensity === level
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => saveChoice('intensity', level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {/* 운동 선호 타입 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">혼자 운동하는 것을 선호하시나요, 그룹으로 선호하시나요?</h3>
                <div className="flex flex-wrap gap-3">
                    {preferenceTypes.map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.preference === type
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => saveChoice('preference', type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* 비용 선호도 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">운동 비용에 대한 선호도를 알려주세요.</h3>
                <div className="flex flex-wrap gap-3">
                    {costLevels.map((cost) => (
                        <button
                            key={cost}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.cost === cost
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => saveChoice('cost', cost)}
                        >
                            {cost}
                        </button>
                    ))}
                </div>
            </div>

            {/* 연령대 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">주로 어떤 연령대와 함께 운동하시나요? (복수 선택 가능)</h3>
                <div className="flex flex-wrap gap-3">
                    {ageGroups.map((age) => (
                        <button
                            key={age}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.ageGroup?.includes(age)
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => {
                                const newAgeGroups = currentChoices.ageGroup?.includes(age)
                                    ? currentChoices.ageGroup.filter(a => a !== age)
                                    : [...(currentChoices.ageGroup || []), age];
                                saveChoice('ageGroup', newAgeGroups);
                            }}
                        >
                            {age}
                        </button>
                    ))}
                </div>
            </div>

            {/* 선호 위치 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">주로 실내와 실외 중 어디서 운동하시나요?</h3>
                <div className="flex flex-wrap gap-3">
                    {locationPreferences.map((location) => (
                        <button
                            key={location}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.locationPreference === location
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => saveChoice('locationPreference', location)}
                        >
                            {location}
                        </button>
                    ))}
                </div>
            </div>

            {/* 가용한 시간 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">주로 언제 운동할 시간이 있으신가요? (복수 선택 가능)</h3>
                <div className="flex flex-wrap gap-3">
                    {availableTimes.map((time) => (
                        <button
                            key={time}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.availableTime?.includes(time)
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => {
                                const newAvailableTimes = currentChoices.availableTime?.includes(time)
                                    ? currentChoices.availableTime.filter(t => t !== time)
                                    : [...(currentChoices.availableTime || []), time];
                                saveChoice('availableTime', newAvailableTimes);
                            }}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            {/* 신체적 제약 */}
            <div>
                <h3 className="text-xl font-semibold text-white mb-4">혹시 신체적 제약이 있으신가요? (복수 선택 가능)</h3>
                <div className="flex flex-wrap gap-3">
                    {physicalLimitations.map((limitation) => (
                        <button
                            key={limitation}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                ${currentChoices.physicalLimitations?.includes(limitation)
                                ? 'bg-white text-orange-600 shadow-md'
                                : 'bg-white/30 text-white hover:bg-white/50'
                            }`}
                            onClick={() => {
                                const newLimitations = currentChoices.physicalLimitations?.includes(limitation)
                                    ? currentChoices.physicalLimitations.filter(l => l !== limitation)
                                    : [...(currentChoices.physicalLimitations || []), limitation];
                                saveChoice('physicalLimitations', newLimitations);
                            }}
                        >
                            {limitation}
                        </button>
                    ))}
                </div>
            </div>


            <div className="flex justify-between mt-8">
                <button
                    onClick={onPrev}
                    className="py-2 px-6 bg-white text-orange-600 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors"
                >
                    이전
                </button>
                <button
                    onClick={onSkipOptional}
                    className="py-2 px-6 bg-gray-500 text-white rounded-lg font-semibold shadow-md hover:bg-gray-600 transition-colors"
                >
                    건너뛰기
                </button>
                <button
                    onClick={onNext}
                    className="py-2 px-6 bg-white text-orange-600 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-colors"
                >
                    완료
                </button>
            </div>
        </div>
    );
};

export default OnboardingStep2;