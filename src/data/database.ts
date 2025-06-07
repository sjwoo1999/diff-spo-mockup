// src/data/database.ts
// Assuming this is your actual database file content.
// You need to go through EACH sport object and ensure the values match the Korean types.

import { Sport, ClassItem, CommunityPost, StoreItem, User } from '@/types'; // ✨ Class 대신 ClassItem 임포트

interface Database {
    sports: Sport[];
    classes: ClassItem[]; // ✨ Class[] 대신 ClassItem[]으로 변경
    community: CommunityPost[];
    storeItems: StoreItem[];
    user: User;
}

export const database: Database = {
    sports: [
        {
            id: '1',
            name: '클라이밍',
            purpose: ['취미', '다이어트'],
            intensity: '보통',
            preference: '개인',
            cost: '보통', // '중간 (3만원~10만원)' -> '보통' (CostLevel 타입에 맞게 조정)
            ageGroup: ['20대', '30대'],
            locationPreference: '실내',
            availableTime: ['평일 오후', '주말'], // '평일 저녁' -> '평일 오후', '주말 오후' -> '주말' (AvailableTime 타입에 맞게 조정)
            // physicalLimitations는 선택 사항이므로 데이터에 없어도 됨
            imageUrl: '/images/climbing.jpg', // ✨ image 대신 imageUrl 사용
            description: '벽을 오르며 성취감을 느끼는 운동',
            // pros: ['전신 운동', '문제 해결 능력 향상'], // Sport 타입에 pros/cons가 없다면 제거하거나 타입에 추가
            // cons: ['장비 필요', '부상 위험'],
        },
        {
            id: '2',
            name: '서핑',
            purpose: ['여행', '힐링'],
            intensity: '높음',
            preference: '그룹',
            cost: '고가', // '고비용 (10만원~)' -> '고가' (CostLevel 타입에 맞게 조정)
            ageGroup: ['20대', '30대', '40대'],
            locationPreference: '실외', // '야외' -> '실외' (LocationPreference 타입에 맞게 조정)
            availableTime: ['주말'], // '주말 오전', '주말 오후' -> '주말' (AvailableTime 타입에 맞게 조정)
            // physicalLimitations는 선택 사항이므로 데이터에 없어도 됨
            imageUrl: '/images/surfing.jpg', // ✨ image 대신 imageUrl 사용
            description: '파도를 타고 자유를 느끼는 운동',
            // pros: ['스트레스 해소', '자연과 교감'],
            // cons: ['날씨 영향', '초보자 어려움'],
        },
        {
            id: '3',
            name: '요가',
            purpose: ['힐링', '다이어트'],
            intensity: '낮음',
            preference: '개인',
            cost: '저렴', // '저비용 (~3만원)' -> '저렴' (CostLevel 타입에 맞게 조정)
            ageGroup: ['20대', '30대', '40대', '50대 이상'],
            locationPreference: '실내',
            availableTime: ['평일 오전', '평일 오후'],
            // physicalLimitations는 선택 사항이므로 데이터에 없어도 됨
            imageUrl: '/images/yoga.jpg', // ✨ image 대신 imageUrl 사용
            description: '몸과 마음의 균형을 찾아주는 운동',
            // pros: ['유연성 향상', '스트레스 감소'],
            // cons: ['꾸준함 필요', '지루할 수 있음'],
        },
        // ... (이 외의 스포츠 객체들도 ClassItem에 맞게 수정해야 합니다.)
    ],
    // ... (rest of your database object)
    classes: [
        // 클래스 데이터도 ClassItem 인터페이스에 맞게 조정되어야 합니다.
        // 예를 들어:
        {
            id: 'class1',
            title: '초보자 클라이밍 강습',
            type: '클라이밍',
            instructor: '김스핀',
            price: 50000,
            duration: '2시간',
            imageUrl: '/images/class_climbing.jpg',
            rating: 4.8,
            reviews: 120,
            location: '강남 클라이밍 짐',
        },
        {
            id: 'class2',
            title: '파워 요가 심화반',
            type: '요가',
            instructor: '박요가',
            price: 70000,
            duration: '1시간 30분',
            imageUrl: '/images/class_yoga.jpg',
            rating: 4.5,
            reviews: 80,
            location: '스핀 요가 스튜디오',
        },
        // ... 기타 클래스 데이터
    ],
    community: [], // 실제 커뮤니티 데이터로 채워야 함
    storeItems: [], // 실제 스토어 아이템 데이터로 채워야 함
    user: { // 실제 사용자 데이터로 채워야 함
        id: 'user1',
        name: '김이용',
        email: 'user@example.com',
        gender: 'male',
        dateOfBirth: '1995-03-15',
        phoneNumber: '010-1234-5678',
        hasCompletedOnboarding: true,
        hasAgreedToTerms: true,
    },
};