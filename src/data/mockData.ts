import { User, Sport, ClassItem, CommunityPost } from '@/types';
import { generateMockUsers, generateMockClasses, generateMockPosts } from '@/utils/mockDataGenerator';

// 100명의 가상 사용자 데이터 생성
export const mockUsers: User[] = generateMockUsers(100);

// 100개의 가상 클래스 데이터 생성
export const mockClasses: ClassItem[] = generateMockClasses(100);

// 100개의 가상 커뮤니티 게시글 데이터 생성
export const mockPosts: CommunityPost[] = generateMockPosts(100);

// 가상의 사용자-스포츠 상호작용 데이터 생성
export const userSportInteractions = mockUsers.flatMap(user => 
    user.preferences.preferredSports.map((sport, index) => ({
        userId: user.id,
        sportId: (index + 1).toString(),
        rating: Math.floor(Math.random() * 3) + 3, // 3-5 사이의 평점
        timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
    }))
);

// 가상의 사용자-클래스 상호작용 데이터 생성
export const userClassInteractions = mockUsers.flatMap(user => 
    Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
        userId: user.id,
        classId: (Math.floor(Math.random() * 100) + 1).toString(),
        rating: Math.floor(Math.random() * 3) + 3, // 3-5 사이의 평점
        timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
    }))
); 