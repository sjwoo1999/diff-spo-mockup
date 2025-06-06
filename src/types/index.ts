// src/types/index.ts
export interface Sport {
    id: string;
    name: string;
    tagline: string;
    image: string;
    intensity: 'low' | 'medium' | 'high';
    preference: 'solo' | 'group';
}

export interface Class {
    id: string;
    name: string;
    instructor: string;
    location: string;
    price: string;
    image: string;
}

export interface CommunityPost {
    id: string;
    category: '정보' | '모임' | '자유';
    title: string;
    author: string;
    comments: number;
}

export interface User {
    name: string;
    onboardingChoices: {
        preference: 'solo' | 'group' | null;
        intensity: 'low' | 'medium' | 'high' | null;
    };
}

export interface Database {
    user: User;
    sports: Sport[];
    classes: Class[];
    community: CommunityPost[];
}