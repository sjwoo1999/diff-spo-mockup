// src/types/index.ts (이전 제공해주신 코드 기반으로 수정)

// ----------------------------------------------------
// 온보딩 관련 타입
// ----------------------------------------------------

export type Purpose = '다이어트' | '체력 증진' | '취미' | '힐링' | '경쟁' | '여행' | '교류' | '스트레스 해소' | '상관 없음';
export type IntensityLevel = '낮음' | '보통' | '높음';
export type PreferenceType = '개인' | '그룹' | '상관 없음';
// 비용 (예시)
export type CostLevel = '무료' | '저렴' | '보통' | '고가';
// 연령대 (예시)
export type AgeGroup = '10대' | '20대' | '30대' | '40대' | '50대 이상';
// 선호 위치 (예시)
export type LocationPreference = '실내' | '실외' | '상관 없음';
// 가용한 시간 (예시)
export type AvailableTime = '평일 오전' | '평일 오후' | '주말' | '상관 없음' | '언제든';
// 신체적 제약 (예시)
export type PhysicalLimitations = '없음' | '관절' | '심혈관' | '호흡기' | '기타';

// 온보딩 선택지들을 하나로 묶는 인터페이스
export interface OnboardingChoices {
    purpose?: Purpose[];
    intensity?: IntensityLevel;
    preference?: PreferenceType;
    cost?: CostLevel;
    ageGroup?: AgeGroup[];
    locationPreference?: LocationPreference;
    availableTime?: AvailableTime[];
    physicalLimitations?: PhysicalLimitations[];
}

// ✨ OnboardingChoiceKey 타입 추가
export type OnboardingChoiceKey = keyof OnboardingChoices;

// ----------------------------------------------------
// 커뮤니티 관련 타입
// ----------------------------------------------------

export interface CommunityPost {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string; // "YYYY-MM-DD HH:MM:SS"
    comments: Comment[];
    externalLink?: string;
    category: string; // 후기 / 질문 / 정보 / 자유
}

export interface Comment {
    id: string;
    author: string;
    content: string;
    createdAt: string;
}

// ----------------------------------------------------
// 마이페이지 및 사용자 관련 타입
// ----------------------------------------------------

export interface User {
    id: string; // 사용자 고유 ID
    name: string;
    email: string; // 로그인에 사용될 수 있는 이메일
    gender: 'male' | 'female' | 'other';
    dateOfBirth: string; // 예: "1990-01-01"
    phoneNumber: string; // 예: "010-1234-5678"
    profilePicture?: string; // 프로필 이미지 URL (선택 사항)
    hasCompletedOnboarding?: boolean;
    hasAgreedToTerms?: boolean;
    // ... 기타 사용자 정보
}

// 데이터베이스의 전체 구조를 나타내는 타입
// MyPage.tsx에서 database prop으로 받음
export interface Database {
    user: User;
    sports: Sport[];
    classes: ClassItem[];
    community: CommunityPost[];
    storeItems: StoreItem[];
}

// ----------------------------------------------------
// 홈 페이지 및 클래스/스포츠 관련 타입
// ----------------------------------------------------

export interface Sport {
    id: string;
    name: string;
    imageUrl: string;
    description?: string;
    intensity?: IntensityLevel;
    preference?: PreferenceType;
    purpose?: Purpose[];
    cost?: CostLevel;
    ageGroup?: AgeGroup[];
    locationPreference?: LocationPreference;
    availableTime?: AvailableTime[];
}

export type ClassType = '클라이밍' | '요가' | '필라테스' | '러닝' | '수영' | '헬스' | '축구' | '농구' | '테니스' | '기타';

export interface ClassItem {
    id: string;
    title: string;
    type: ClassType;
    instructor: string;
    price: number;
    duration: string;
    imageUrl: string;
    rating?: number;
    reviews?: number;
    location?: string;
}

export interface StoreItem {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    vendorName?: string;
    externalPurchaseLink: string;
    isAffiliateLink?: boolean;
}