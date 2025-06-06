export interface User {
    name: string;
    onboardingChoices: {
        preference?: 'solo' | 'group';
        intensity?: 'low' | 'medium' | 'high';
    };
}

export interface Sport {
    id: number;
    name: string;
    tagline: string;
    description: string;
    intensity: 'low' | 'medium' | 'high';
    preference: 'solo' | 'group';
    image: string;
}

export interface Class {
    id: number;
    name: string;
    instructor: string;
    location: string;
    price: string;
    image: string;
}

export interface CommunityPost {
    id: number;
    category: '정보' | '모임' | '홍보';
    title: string;
    author: string;
    comments: number;
}

export interface Database {
    sports: Sport[];
    classes: Class[];
    community: CommunityPost[];
    user: User;
}