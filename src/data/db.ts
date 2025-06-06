// src/data/db.ts
import { Database } from '@/types';

export const db: Database = {
    user: {
        name: 'SPIN User', // Default name, can be updated after onboarding
        onboardingChoices: {
            preference: null,
            intensity: null,
        },
    },
    sports: [
        {
            id: '1',
            name: '클라이밍',
            tagline: '도시 속 암벽, 짜릿한 성취감!',
            image: 'https://placehold.co/600x400/ffe4e6/44403c?text=Climbing',
            intensity: 'high',
            preference: 'solo',
        },
        {
            id: '2',
            name: '패들보드 요가',
            tagline: '물 위에서 즐기는 평온함과 균형!',
            image: 'https://placehold.co/600x400/e0f2fe/44403c?text=Paddleboard+Yoga',
            intensity: 'low',
            preference: 'solo',
        },
        {
            id: '3',
            name: '스윙댄스',
            tagline: '경쾌한 음악에 맞춰 스텝을 밟다!',
            image: 'https://placehold.co/600x400/f0fdf4/44403c?text=Swing+Dance',
            intensity: 'medium',
            preference: 'group',
        },
        {
            id: '4',
            name: '트릭킹',
            tagline: '아크로바틱과 무술의 환상적인 조합!',
            image: 'https://placehold.co/600x400/fff7ed/44403c?text=Tricking',
            intensity: 'high',
            preference: 'group',
        },
        {
            id: '5',
            name: '플라잉 요가',
            tagline: '공중에서 펼쳐지는 아름다운 움직임!',
            image: 'https://placehold.co/600x400/fef2f2/44403c?text=Flying+Yoga',
            intensity: 'medium',
            preference: 'solo',
        },
    ],
    classes: [
        {
            id: 'c1',
            name: '초보자를 위한 클라이밍 기초',
            instructor: '김철수',
            location: '강남 실내 암벽',
            price: '5만원',
            image: 'https://placehold.co/80x80/e0f2fe/44403c?text=Class1',
        },
        {
            id: 'c2',
            name: '한여름 밤의 스윙댄스 파티',
            instructor: '이영희',
            location: '홍대 댄스 스튜디오',
            price: '3만원',
            image: 'https://placehold.co/80x80/f0fdf4/44403c?text=Class2',
        },
        {
            id: 'c3',
            name: '밸런스 UP! 패들보드 요가 체험',
            instructor: '박지민',
            location: '한강 시민공원',
            price: '4만원',
            image: 'https://placehold.co/80x80/ffe4e6/44403c?text=Class3',
        },
    ],
    community: [
        {
            id: 'p1',
            category: '모임',
            title: '주말 번개 트릭킹 모임 참가자 모집!',
            author: '트릭킹마스터',
            comments: 12,
        },
        {
            id: 'p2',
            category: '정보',
            title: '클라이밍 초보자를 위한 장비 가이드',
            author: '클라이밍고수',
            comments: 8,
        },
        {
            id: 'p3',
            category: '자유',
            title: '플라잉 요가 후기 공유해요!',
            author: '요가홀릭',
            comments: 5,
        },
    ],
};