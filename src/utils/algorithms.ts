import { Sport, User, ClassItem, CommunityPost, StoreItem } from '@/types';
import { mockUsers, userSportInteractions, userClassInteractions } from '@/data/mockData';

// 1. 개인화 추천 알고리즘
export const getPersonalizedRecommendations = (
    user: User,
    sports: Sport[],
    context: { weather: string; time: string; location: string }
): Sport[] => {
    return sports.map(sport => {
        // 콘텐츠 기반 점수 (40%)
        const contentScore = calculateContentScore(sport, user);
        
        // 협업 필터링 점수 (30%)
        const collabScore = calculateCollaborativeScore(sport, user);
        
        // 컨텍스트 기반 점수 (30%)
        const contextScore = calculateContextScore(sport, context);
        
        const finalScore = (contentScore * 0.4) + (collabScore * 0.3) + (contextScore * 0.3);
        
        return {
            ...sport,
            recommendationScore: finalScore
        };
    }).sort((a, b) => (b.recommendationScore || 0) - (a.recommendationScore || 0));
};

// 2. 스포츠-사용자 매칭 알고리즘
export const calculateSportUserMatch = (user: User, sport: Sport): number => {
    let score = 0;
    
    // 체력 레벨 매칭 (30%)
    const fitnessLevelMap = {
        '초급': '낮음',
        '중급': '보통',
        '고급': '높음'
    };
    if (fitnessLevelMap[user.fitnessLevel] === sport.intensity) score += 0.3;
    
    // 장비 보유 여부 (20%)
    const hasRequiredEquipment = sport.requiredEquipment?.every(
        equipment => user.equipment?.includes(equipment)
    );
    if (hasRequiredEquipment) score += 0.2;
    
    // 환경 선호 일치 (30%)
    if (user.preferredLocation === sport.locationPreference) score += 0.3;
    
    // 기술 수준 (20%)
    if (user.skillLevel === sport.requiredSkillLevel) score += 0.2;
    
    return score;
};

// 3. 전문성 기반 커뮤니티 추천
export const calculateExpertiseScore = (user: User, sport: Sport): number => {
    const activityScore = calculateActivityScore(user, sport);
    const contributionScore = calculateContributionScore(user, sport);
    const certificationScore = calculateCertificationScore(user, sport);
    
    return (activityScore * 0.4) + (contributionScore * 0.3) + (certificationScore * 0.3);
};

// 4. 감정 분석 기반 댓글 요약
export const analyzeComment = (text: string) => {
    // 간단한 키워드 추출
    const keywords = extractKeywords(text);
    
    // 감정 분석 (목업)
    const sentiment = analyzeSentiment(text);
    
    return {
        sentiment,
        keywords,
        relevanceScore: calculateRelevanceScore(text, keywords),
        summary: generateSummary(text, keywords)
    };
};

// 5. KoBERT 기반 클래스 추천 (목업)
export const recommendClasses = (user: User, classes: ClassItem[]): ClassItem[] => {
    return classes.map(cls => {
        const preferenceScore = calculatePreferenceScore(cls, user);
        const instructorScore = calculateInstructorScore(cls, user);
        const popularityScore = calculatePopularityScore(cls);
        
        const finalScore = (preferenceScore * 0.4) + (instructorScore * 0.3) + (popularityScore * 0.3);
        
        return {
            ...cls,
            recommendationScore: finalScore
        };
    }).sort((a, b) => (b.recommendationScore || 0) - (a.recommendationScore || 0));
};

// 6. 스케줄 기반 클래스 매칭
export const findMatchingClasses = (user: User, classes: ClassItem[]): ClassItem[] => {
    return classes.map(cls => {
        const timeScore = calculateTimeAvailabilityScore(cls, user);
        const travelScore = calculateTravelScore(cls, user);
        
        const finalScore = (timeScore * 0.5) + (travelScore * 0.5);
        
        return {
            ...cls,
            matchingScore: finalScore
        };
    }).sort((a, b) => (b.matchingScore || 0) - (a.matchingScore || 0));
};

// 7. 구매 이력 기반 장비 추천
export const recommendEquipment = (user: User, items: StoreItem[]): StoreItem[] => {
    return items.map(item => {
        const compatibilityScore = calculateCompatibilityScore(item, user);
        const valueScore = calculateValueScore(item);
        const preferenceScore = calculatePreferenceScore(item, user);
        
        const finalScore = (compatibilityScore * 0.4) + (valueScore * 0.3) + (preferenceScore * 0.3);
        
        return {
            ...item,
            recommendationScore: finalScore
        };
    }).sort((a, b) => (b.recommendationScore || 0) - (a.recommendationScore || 0));
};

// 8. 활동 기반 피드백 생성
export const generateActivityFeedback = (user: User): string => {
    const diversityScore = calculateDiversityScore(user);
    const goalAchievementScore = calculateGoalAchievementScore(user);
    const fitnessProgressScore = calculateFitnessProgressScore(user);
    
    return generateFeedbackText(diversityScore, goalAchievementScore, fitnessProgressScore);
};

// 9. 성향 분석 시스템
export const analyzePersonality = (user: User) => {
    const sportPreference = analyzeSportPreference(user);
    const activityPattern = analyzeActivityPattern(user);
    const socialInteraction = analyzeSocialInteraction(user);
    
    return {
        sportTendency: sportPreference,
        activityPattern,
        socialTendency: socialInteraction,
        recommendedActivities: generateRecommendedActivities(user)
    };
};

// Helper functions
const calculateContentScore = (sport: Sport, user: User): number => {
    // 목업 구현
    return Math.random() * 0.4 + 0.6; // 0.6 ~ 1.0 사이의 점수
};

const calculateCollaborativeScore = (sport: Sport, user: User): number => {
    // 1. 유사 사용자 찾기
    const similarUsers = findSimilarUsers(user);
    
    // 2. 유사 사용자들의 해당 스포츠에 대한 평점 계산
    const ratings = userSportInteractions
        .filter(interaction => 
            similarUsers.includes(interaction.userId) && 
            interaction.sportId === sport.id
        )
        .map(interaction => interaction.rating);
    
    // 3. 평균 평점 계산
    if (ratings.length === 0) return 0.5; // 데이터가 없는 경우 중립적인 점수 반환
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    
    // 4. 0-1 사이의 점수로 정규화
    return averageRating / 5;
};

const calculateContextScore = (sport: Sport, context: any): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7; // 0.7 ~ 1.0 사이의 점수
};

const calculateActivityScore = (user: User, sport: Sport): number => {
    // 목업 구현
    return Math.random() * 0.4 + 0.6;
};

const calculateContributionScore = (user: User, sport: Sport): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const calculateCertificationScore = (user: User, sport: Sport): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const extractKeywords = (text: string): string[] => {
    // 간단한 키워드 추출 (목업)
    return text.split(' ').filter(word => word.length > 2).slice(0, 5);
};

const analyzeSentiment = (text: string): string => {
    // 간단한 감정 분석 (목업)
    const positiveWords = ['좋아', '대박', '최고', '행복', '즐거운'];
    const negativeWords = ['싫어', '별로', '힘들', '어려운', '불편'];
    
    const positiveCount = positiveWords.filter(word => text.includes(word)).length;
    const negativeCount = negativeWords.filter(word => text.includes(word)).length;
    
    if (positiveCount > negativeCount) return '긍정적';
    if (negativeCount > positiveCount) return '부정적';
    return '중립적';
};

const calculateRelevanceScore = (text: string, keywords: string[]): number => {
    // 목업 구현
    return Math.random() * 0.2 + 0.8;
};

const generateSummary = (text: string, keywords: string[]): string => {
    // 간단한 요약 생성 (목업)
    return `${keywords[0]} 관련 ${keywords[1]}에 대한 ${keywords[2]} 경험을 공유`;
};

const calculatePreferenceScore = (item: any, user: User): number => {
    // 목업 구현
    return Math.random() * 0.4 + 0.6;
};

const calculateInstructorScore = (cls: ClassItem, user: User): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const calculatePopularityScore = (cls: ClassItem): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const calculateTimeAvailabilityScore = (cls: ClassItem, user: User): number => {
    // 목업 구현
    return Math.random() * 0.5 + 0.5;
};

const calculateTravelScore = (cls: ClassItem, user: User): number => {
    // 목업 구현
    return Math.random() * 0.5 + 0.5;
};

const calculateCompatibilityScore = (item: StoreItem, user: User): number => {
    // 목업 구현
    return Math.random() * 0.4 + 0.6;
};

const calculateValueScore = (item: StoreItem): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const calculateDiversityScore = (user: User): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const calculateGoalAchievementScore = (user: User): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const calculateFitnessProgressScore = (user: User): number => {
    // 목업 구현
    return Math.random() * 0.3 + 0.7;
};

const generateFeedbackText = (
    diversityScore: number,
    goalAchievementScore: number,
    fitnessProgressScore: number
): string => {
    // 목업 구현
    return `현재 운동 다양성은 ${Math.round(diversityScore * 100)}%이며, 
            목표 달성도는 ${Math.round(goalAchievementScore * 100)}%입니다. 
            체력 변화는 상승 추세를 보이고 있습니다.`;
};

const analyzeSportPreference = (user: User): string => {
    // 목업 구현
    return '다양한 운동 선호형';
};

const analyzeActivityPattern = (user: User): string => {
    // 목업 구현
    return '주말 그룹 활동형';
};

const analyzeSocialInteraction = (user: User): string => {
    // 목업 구현
    return '적극적 공유형';
};

const generateRecommendedActivities = (user: User): string[] => {
    // 목업 구현
    return [
        '주말 테니스 클럽 가입',
        '수영 동호회 참여',
        '커뮤니티 리더 역할 제안'
    ];
};

// 유사 사용자 찾기 함수
const findSimilarUsers = (targetUser: User): string[] => {
    return mockUsers
        .filter(user => user.id !== targetUser.id)
        .map(user => ({
            id: user.id,
            similarity: calculateUserSimilarity(targetUser, user)
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3) // 상위 3명의 유사 사용자 선택
        .map(user => user.id);
};

// 사용자 유사도 계산 함수
const calculateUserSimilarity = (user1: User, user2: User): number => {
    let similarity = 0;
    
    // 1. 체력 레벨 유사도 (20%)
    if (user1.fitnessLevel === user2.fitnessLevel) similarity += 0.2;
    
    // 2. 기술 수준 유사도 (20%)
    if (user1.skillLevel === user2.skillLevel) similarity += 0.2;
    
    // 3. 환경 선호 유사도 (20%)
    if (user1.preferredLocation === user2.preferredLocation) similarity += 0.2;
    
    // 4. 선호 스포츠 유사도 (20%)
    const commonSports = user1.preferences.preferredSports.filter(
        sport => user2.preferences.preferredSports.includes(sport)
    );
    similarity += (commonSports.length / Math.max(
        user1.preferences.preferredSports.length,
        user2.preferences.preferredSports.length
    )) * 0.2;
    
    // 5. 활동 시간 유사도 (20%)
    const commonTimes = user1.preferences.preferredTime.filter(
        time => user2.preferences.preferredTime.includes(time)
    );
    similarity += (commonTimes.length / Math.max(
        user1.preferences.preferredTime.length,
        user2.preferences.preferredTime.length
    )) * 0.2;
    
    return similarity;
}; 