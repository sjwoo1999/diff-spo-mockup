import { User, Sport, ClassItem, CommunityPost, Comment } from '@/types';

// 타입 정의
type TimeSlot = '평일 오전' | '평일 오후' | '평일 저녁' | '주말 오전' | '주말 오후';
type Region = '강남' | '송파' | '마포';
type Season = '봄' | '여름' | '가을' | '겨울';

// 랜덤 데이터 생성 헬퍼 함수들
const getRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
const getRandomElements = <T>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
const getRandomNumber = (min: number, max: number): number => 
    Math.floor(Math.random() * (max - min + 1)) + min;

// 시간대별 선호도 가중치
const timeWeights: Record<TimeSlot, Record<string, number>> = {
    '평일 오전': { '요가': 0.8, '필라테스': 0.7, '수영': 0.6 },
    '평일 오후': { '테니스': 0.7, '골프': 0.8, '클라이밍': 0.6 },
    '평일 저녁': { '축구': 0.8, '농구': 0.7, '배드민턴': 0.6 },
    '주말 오전': { '골프': 0.9, '테니스': 0.8, '수영': 0.7 },
    '주말 오후': { '클라이밍': 0.8, '축구': 0.7, '농구': 0.6 }
};

// 계절별 스포츠 선호도
const seasonalSports: Record<Season, string[]> = {
    '봄': ['테니스', '골프', '러닝'],
    '여름': ['수영', '클라이밍', '요가'],
    '가을': ['골프', '테니스', '러닝'],
    '겨울': ['클라이밍', '필라테스', '수영']
};

// 지역별 스포츠 시설 밀도
const locationSportsDensity: Record<Region, Record<string, number>> = {
    '강남': { '테니스': 0.9, '골프': 0.8, '요가': 0.7 },
    '송파': { '수영': 0.9, '클라이밍': 0.7, '필라테스': 0.6 },
    '마포': { '축구': 0.8, '농구': 0.7, '배드민턴': 0.6 }
};

// 장비 목록
const equipmentList = [
    '테니스 라켓', '테니스 신발', '테니스 가방',
    '수영복', '수경', '수영모자',
    '골프 클럽', '골프 가방', '골프화',
    '요가 매트', '요가 블록',
    '클라이밍 슈즈', '클라이밍 하네스',
    '러닝화', '러닝 벨트',
    '축구화', '축구 양말',
    '농구화', '농구 양말',
    '배드민턴 라켓', '배드민턴 신발',
    '필라테스 매트', '필라테스 링'
];

// 사용자 데이터 생성
export const generateMockUsers = (count: number): User[] => {
    const fitnessLevels: User['fitnessLevel'][] = ['초급', '중급', '고급'];
    const skillLevels: User['skillLevel'][] = ['초급', '중급', '고급'];
    const locations: User['preferredLocation'][] = ['실내', '실외', '상관 없음'];
    const intensities: User['preferences']['preferredIntensity'][] = ['낮음', '보통', '높음'];
    const groupSizes: User['preferences']['preferredGroupSize'][] = ['개인', '소그룹', '대그룹'];
    const sports = ['테니스', '수영', '골프', '요가', '클라이밍', '러닝', '축구', '농구', '배드민턴', '필라테스'];
    const times: TimeSlot[] = ['평일 오전', '평일 오후', '평일 저녁', '주말 오전', '주말 오후'];
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const regions: Region[] = ['강남', '송파', '마포'];

    // 현재 계절 계산
    const currentMonth = new Date().getMonth();
    const season: Season = currentMonth < 2 ? '겨울' : 
                          currentMonth < 5 ? '봄' : 
                          currentMonth < 8 ? '여름' : 
                          currentMonth < 11 ? '가을' : '겨울';

    return Array.from({ length: count }, (_, i) => {
        const region = getRandomElement(regions);
        const preferredTime = getRandomElement(times);
        
        // 시간대별 스포츠 선호도 반영
        const timeBasedSports = Object.entries(timeWeights[preferredTime])
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([sport]) => sport);

        // 계절별 스포츠 선호도 반영
        const seasonalPreferredSports = seasonalSports[season];

        // 지역별 스포츠 시설 밀도 반영
        const regionBasedSports = Object.entries(locationSportsDensity[region])
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([sport]) => sport);

        // 선호 스포츠 선택 (시간대, 계절, 지역 특성 반영)
        const preferredSports = Array.from(new Set([
            ...timeBasedSports,
            ...seasonalPreferredSports,
            ...regionBasedSports
        ])).slice(0, 3);

        return {
            id: (i + 1).toString(),
            name: `사용자${i + 1}`,
            email: `user${i + 1}@example.com`,
            fitnessLevel: getRandomElement(fitnessLevels),
            skillLevel: getRandomElement(skillLevels),
            preferredLocation: getRandomElement(locations),
            equipment: getRandomElements(equipmentList, getRandomNumber(1, 5)),
            activities: [],
            preferences: {
                preferredSports,
                preferredTime: [preferredTime],
                preferredDays: getRandomElements(days, getRandomNumber(1, 5)),
                preferredIntensity: getRandomElement(intensities),
                preferredGroupSize: getRandomElement(groupSizes)
            }
        };
    });
};

// 클래스 데이터 생성
export const generateMockClasses = (count: number): ClassItem[] => {
    const types = ['테니스', '수영', '골프', '요가', '클라이밍', '러닝', '축구', '농구', '배드민턴', '필라테스'];
    const instructors = [
        '김강사', '이강사', '박강사', '최강사', '정강사',
        '강강사', '조강사', '윤강사', '장강사', '임강사'
    ];
    const durations = ['1시간', '1시간 30분', '2시간'];
    const locations = [
        '강남 테니스장', '송파 수영장', '잠실 골프장',
        '홍대 요가원', '강남 클라이밍장', '올림픽공원 러닝코스',
        '월드컵경기장', '잠실실내체육관', '송파배드민턴장',
        '강남필라테스'
    ];

    // 시간대별 클래스 가격 변동
    const timeBasedPriceMultiplier: Record<TimeSlot, number> = {
        '평일 오전': 0.8,
        '평일 오후': 1.0,
        '평일 저녁': 1.2,
        '주말 오전': 1.3,
        '주말 오후': 1.4
    };

    return Array.from({ length: count }, (_, i) => {
        const type = getRandomElement(types);
        const timeSlot = getRandomElement(Object.keys(timeBasedPriceMultiplier) as TimeSlot[]);
        const basePrice = getRandomNumber(30000, 100000);
        const priceMultiplier = timeBasedPriceMultiplier[timeSlot];

        return {
            id: (i + 1).toString(),
            title: `${type} ${getRandomElement(['입문', '초급', '중급', '고급'])} 클래스`,
            type,
            instructor: getRandomElement(instructors),
            price: Math.round(basePrice * priceMultiplier),
            duration: getRandomElement(durations),
            imageUrl: `/images/classes/class${getRandomNumber(1, 10)}.jpg`,
            rating: Number((Math.random() * 2 + 3).toFixed(1)), // 3.0 ~ 5.0
            reviews: getRandomNumber(5, 100),
            location: getRandomElement(locations),
            timeSlot,
            maxParticipants: getRandomNumber(4, 20),
            currentParticipants: getRandomNumber(0, 15),
            difficulty: getRandomElement(['입문', '초급', '중급', '고급']),
            equipment: getRandomElements(equipmentList, getRandomNumber(0, 3))
        };
    });
};

// 커뮤니티 게시글 데이터 생성
export const generateMockPosts = (count: number): CommunityPost[] => {
    const categories: CommunityPost['category'][] = ['후기', '질문', '정보', '자유'];
    const titles = [
        '테니스 레슨 후기', '수영 강습 추천', '골프 스윙 교정',
        '요가 효과', '클라이밍 초보자 팁', '러닝 코스 추천',
        '축구 동호회 모집', '농구 대회 정보', '배드민턴 대회 후기',
        '필라테스 효과'
    ];
    const contents = [
        '정말 좋은 경험이었습니다. 강사님께서 친절하게 가르쳐주셔서 많은 도움이 되었어요.',
        '처음 시작하는 분들께 추천드립니다. 기초부터 차근차근 배울 수 있어요.',
        '운동 효과가 정말 좋았습니다. 꾸준히 하니 체력이 많이 좋아졌어요.',
        '동호회 활동이 정말 즐거웠습니다. 좋은 분들과 함께 운동할 수 있어서 좋았어요.',
        '대회 참가 경험이 정말 좋았습니다. 다음에도 참가하고 싶어요.'
    ];

    // 시간대별 게시글 생성 빈도
    const timeBasedPostFrequency: Record<TimeSlot, number> = {
        '평일 오전': 0.3,
        '평일 오후': 0.5,
        '평일 저녁': 0.8,
        '주말 오전': 0.6,
        '주말 오후': 0.4
    };

    return Array.from({ length: count }, (_, i) => {
        const timeSlot = getRandomElement(Object.keys(timeBasedPostFrequency) as TimeSlot[]);
        const postTime = new Date();
        postTime.setHours(getRandomNumber(0, 23));
        postTime.setMinutes(getRandomNumber(0, 59));
        postTime.setDate(postTime.getDate() - getRandomNumber(0, 30));

        return {
            id: (i + 1).toString(),
            title: `${getRandomElement(titles)} ${i + 1}`,
            content: getRandomElement(contents),
            author: `사용자${getRandomNumber(1, 100)}`,
            authorAvatar: `/images/avatars/avatar${getRandomNumber(1, 10)}.jpg`,
            createdAt: postTime.toISOString(),
            comments: generateMockComments(getRandomNumber(0, 10)),
            category: getRandomElement(categories),
            likes: getRandomNumber(0, 100),
            externalLink: Math.random() > 0.7 ? `https://example.com/post${i + 1}` : undefined,
            timeSlot,
            tags: getRandomElements(['초보자', '중급자', '고급자', '추천', '후기', '질문'], getRandomNumber(1, 3))
        };
    });
};

// 댓글 데이터 생성
export const generateMockComments = (count: number): Comment[] => {
    const contents = [
        '좋은 정보 감사합니다!',
        '저도 비슷한 경험이 있어요.',
        '정말 도움이 되었습니다.',
        '다음에도 좋은 정보 부탁드려요.',
        '추천 감사합니다!',
        '저도 한번 해보고 싶네요.',
        '좋은 후기 감사합니다.',
        '정말 유익한 정보네요.',
        '저도 비슷한 생각이에요.',
        '좋은 제안 감사합니다.'
    ];

    return Array.from({ length: count }, (_, i) => {
        const commentTime = new Date();
        commentTime.setHours(getRandomNumber(0, 23));
        commentTime.setMinutes(getRandomNumber(0, 59));
        commentTime.setDate(commentTime.getDate() - getRandomNumber(0, 7));

        return {
            id: (i + 1).toString(),
            content: getRandomElement(contents),
            author: `사용자${getRandomNumber(1, 100)}`,
            authorAvatar: `/images/avatars/avatar${getRandomNumber(1, 10)}.jpg`,
            createdAt: commentTime.toISOString(),
            likes: getRandomNumber(0, 20),
            isAuthor: Math.random() > 0.9,
            isExpert: Math.random() > 0.95
        };
    });
}; 