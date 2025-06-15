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

export interface Comment {
    id: string;
    author: string;
    authorAvatar?: string;
    content: string;
    createdAt: string;
}
  
export interface CommunityPost {
    id: string;
    title: string;
    content: string;
    author: string;
    authorAvatar?: string;
    createdAt: string;
    comments: Comment[];
    externalLink?: string;
    category: '후기' | '질문' | '정보' | '자유';
    likes: number;
}

// ----------------------------------------------------
// 마이페이지 및 사용자 관련 타입
// ----------------------------------------------------

export interface Badge {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    acquiredAt?: string; // 획득일
}

export interface Ranking {
    tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    rank: number;
    total: number;
    week: string; // 예: '2024-W23'
}

export interface User {
    id: string;
    name: string;
    email: string;
    fitnessLevel: '초급' | '중급' | '고급';
    skillLevel: '초급' | '중급' | '고급';
    preferredLocation: '실내' | '실외' | '상관 없음';
    equipment: string[];
    activities: Activity[];
    preferences: UserPreferences;
    badges?: Badge[];
    ranking?: Ranking;
    followers?: string[]; // 나를 팔로우하는 유저 id 배열
    following?: string[]; // 내가 팔로우하는 유저 id 배열
    profileImage?: string; // 프로필 이미지 경로
    bio?: string; // 한 줄 소개
}

export interface Activity {
    id: string;
    type: string;
    date: string;
    duration: number;
    intensity: '낮음' | '보통' | '높음';
    location: string;
}

export interface UserPreferences {
    preferredSports: string[];
    preferredTime: string[];
    preferredDays: string[];
    preferredIntensity: '낮음' | '보통' | '높음';
    preferredGroupSize: '개인' | '소그룹' | '대그룹';
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
    description: string;
    intensity: '낮음' | '보통' | '높음';
    preference: '개인' | '그룹';
    cost: '저렴' | '보통' | '비쌈';
    ageGroup: string[];
    locationPreference: '실내' | '실외';
    availableTime: string[];
    imageUrl: string;
    requiredEquipment?: string[];
    requiredSkillLevel?: '초급' | '중급' | '고급';
    recommendationScore?: number;
}

export type ClassType = '클라이밍' | '요가' | '필라테스' | '러닝' | '수영' | '헬스' | '축구' | '농구' | '테니스' | '기타';

export interface ClassItem {
    id: string;
    title: string;
    type: string;
    instructor: string;
    price: number;
    duration: string;
    imageUrl: string;
    rating?: number;
    reviews?: number;
    location?: string;
    recommendationScore?: number;
    matchingScore?: number;
}

export interface StoreItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    vendorName: string;
    externalPurchaseLink: string;
    isAffiliateLink: boolean;
    recommendationScore?: number;
}

export type PageType = 'home' | 'classes' | 'community' | 'my' | 'store';

export interface Report {
    id: string;
    userId: string;
    title: string;
    createdAt: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    type: 'activity' | 'performance' | 'recommendation';
    content?: {
        summary: string;
        details: {
            category: string;
            value: string | number;
            description: string;
        }[];
        recommendations?: {
            title: string;
            description: string;
            priority: 'high' | 'medium' | 'low';
        }[];
        badgesEarned?: Badge[];
        ranking?: Ranking;
    };
    error?: string;
}