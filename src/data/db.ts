import { Database } from '@/types'; // 타입 정의 파일 경로 확인

export const db: Database = {
    sports: [
        { id: 1, name: '플라잉 디스크', tagline: '바람을 가르는 짜릿한 즐거움', description: '원반을 던지고 받으며 즐기는 스포츠로, 간단한 규칙으로 누구나 쉽게 시작할 수 있습니다. 공원이나 넓은 잔디밭에서 즐기기 좋습니다.', intensity: 'low', preference: 'group', image: 'https://placehold.co/600x400/EA580C/ffffff?text=Flying+Disc' }, // ⭐ 변경 ⭐
        { id: 2, name: '슬랙라이닝', tagline: '균형 감각과 집중력의 예술', description: '나무나 기둥 사이에 설치된 줄 위에서 균형을 잡으며 걷는 운동입니다. 전신 근력 강화와 집중력 향상에 탁월한 효과가 있습니다.', intensity: 'medium', preference: 'solo', image: 'https://placehold.co/600x400/EA580C/ffffff?text=Slacklining' }, // ⭐ 변경 ⭐
        { id: 3, name: '클라이밍', tagline: '중력을 거스르는 실내 암벽 등반', description: '실내에 설치된 인공 암벽을 오르는 스포츠로, 전신 근력과 문제 해결 능력을 동시에 기를 수 있습니다. 성취감이 매우 높습니다.', intensity: 'medium', preference: 'solo', image: 'https://placehold.co/600x400/EA580C/ffffff?text=Climbing' }, // ⭐ 변경 ⭐
        { id: 4, name: '트릭킹', tagline: '아크로바틱과 무술의 화려한 조화', description: '태권도, 카포에라, 체조 등 다양한 기술을 융합한 익스트림 스포츠입니다. 화려한 발차기와 공중 동작이 특징입니다.', intensity: 'high', preference: 'group', image: 'https://placehold.co/600x400/EA580C/ffffff?text=Tricking' }, // ⭐ 변경 ⭐
        { id: 5, name: '서핑', tagline: '파도와 하나되는 궁극의 자유', description: '서프보드를 타고 파도를 즐기는 해양 스포츠입니다. 자연과 교감하며 스트레스를 해소하고 싶을 때 최고의 선택입니다.', intensity: 'high', preference: 'solo', image: 'https://placehold.co/600x400/EA580C/ffffff?text=Surfing' } // ⭐ 변경 ⭐
    ],
    classes: [
        { id: 1, name: '초보를 위한 클라이밍 입문', instructor: '김철수 코치', location: '강남 더클라임', price: '50,000원', image: 'https://placehold.co/100x100/EA580C/ffffff?text=C' }, // ⭐ 변경 ⭐
        { id: 2, name: '강원도 서핑 2박 3일 캠프', instructor: '서프홀릭', location: '양양 죽도해변', price: '200,000원', image: 'https://placehold.co/100x100/EA580C/ffffff?text=S' }, // ⭐ 변경 ⭐
        { id: 3, name: '도심 속 슬랙라이닝 원데이 클래스', instructor: '박영희 마스터', location: '서울숲 공원', price: '35,000원', image: 'https://placehold.co/100x100/EA580C/ffffff?text=SL' } // ⭐ 변경 ⭐
    ],
    community: [
        { id: 1, category: '정보', title: '플라잉 디스크 장비 추천 (초보용)', author: '원반고수', comments: 15 },
        { id: 2, category: '모임', title: '주말 번개 트릭킹 모임 (한강공원)', author: '날아라슈퍼맨', comments: 8 },
        { id: 3, category: '정보', title: '슬랙라이닝 잘하는 꿀팁 대방출', author: '균형의달인', comments: 12 },
        { id: 4, category: '홍보', title: '신규 클라이밍 동호회 \'어반클라이머스\' 회원 모집', author: '클라이밍중독', comments: 5 }
    ],
    user: {
        name: '방문자',
        onboardingChoices: {}
    }
};