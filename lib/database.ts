import { User } from '@/types';

// Create users first
const user1: User = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  fitnessLevel: '중급',
  skillLevel: '중급',
  preferredLocation: '실내',
  equipment: ['요가매트', '러닝화'],
  activities: [
    {
      id: 'a1',
      type: 'workout',
      date: '2024-03-20',
      duration: 60,
      intensity: '보통',
      location: '서울 강남구'
    },
    {
      id: 'a2',
      type: 'achievement',
      date: '2024-03-19',
      duration: 30,
      intensity: '낮음',
      location: '서울 강남구'
    }
  ],
  preferences: {
    preferredSports: ['요가', '러닝'],
    preferredTime: ['평일 오전', '주말 오전'],
    preferredDays: ['월', '수', '토'],
    preferredIntensity: '보통',
    preferredGroupSize: '소그룹'
  },
  badges: [
    { id: 'badge1', name: 'Early Bird', imageUrl: '/images/badge/early-bird.png', description: '아침 운동 5회 달성!' },
    { id: 'badge2', name: 'Consistent', imageUrl: '/images/badge/consistent.png', description: '3일 연속 운동 성공!' }
  ],
  ranking: {
    tier: 'Silver',
    rank: 42,
    total: 120,
    week: '2024-W23'
  },
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  bio: 'Fitness enthusiast and sports lover'
};

const user2: User = {
  id: 'user2',
  name: 'Jane Smith',
  email: 'jane@example.com',
  fitnessLevel: '초급',
  skillLevel: '초급',
  preferredLocation: '실외',
  equipment: ['요가매트'],
  activities: [
    {
      id: 'a3',
      type: 'workout',
      date: '2024-03-20',
      duration: 45,
      intensity: '보통',
      location: '서울 마포구'
    },
    {
      id: 'a4',
      type: 'achievement',
      date: '2024-03-18',
      duration: 20,
      intensity: '낮음',
      location: '서울 마포구'
    }
  ],
  preferences: {
    preferredSports: ['요가'],
    preferredTime: ['주말 오전'],
    preferredDays: ['토'],
    preferredIntensity: '낮음',
    preferredGroupSize: '개인'
  },
  badges: [
    { id: 'badge3', name: 'Yoga Master', imageUrl: '/images/badge/yoga-master.png', description: '요가 10회 달성!' },
    { id: 'badge4', name: 'Meditation Guru', imageUrl: '/images/badge/meditation.png', description: '명상 7일 연속 성공!' }
  ],
  ranking: {
    tier: 'Bronze',
    rank: 78,
    total: 120,
    week: '2024-W23'
  },
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  bio: 'Yoga instructor and wellness coach'
};

const user3: User = {
  id: 'user3',
  name: 'Mike Johnson',
  email: 'mike@example.com',
  fitnessLevel: '고급',
  skillLevel: '고급',
  preferredLocation: '실내',
  equipment: ['덤벨', '풀업바'],
  activities: [
    {
      id: 'a5',
      type: 'workout',
      date: '2024-03-20',
      duration: 50,
      intensity: '높음',
      location: '서울 용산구'
    },
    {
      id: 'a6',
      type: 'achievement',
      date: '2024-03-17',
      duration: 25,
      intensity: '보통',
      location: '서울 용산구'
    }
  ],
  preferences: {
    preferredSports: ['크로스핏', '웨이트트레이닝'],
    preferredTime: ['평일 저녁'],
    preferredDays: ['화', '목', '금'],
    preferredIntensity: '높음',
    preferredGroupSize: '소그룹'
  },
  badges: [
    { id: 'badge5', name: 'Strength Master', imageUrl: '/images/badge/strength.png', description: '근력운동 20회 달성!' },
    { id: 'badge6', name: 'Nutrition Expert', imageUrl: '/images/badge/nutrition.png', description: '식단관리 2주 연속 성공!' }
  ],
  ranking: {
    tier: 'Gold',
    rank: 15,
    total: 120,
    week: '2024-W23'
  },
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
  bio: 'CrossFit trainer and nutrition expert'
};

const user4: User = {
  id: 'user4',
  name: 'Sarah Wilson',
  email: 'sarah@example.com',
  fitnessLevel: '중급',
  skillLevel: '초급',
  preferredLocation: '실외',
  equipment: ['수영복', '수경'],
  activities: [
    {
      id: 'a7',
      type: 'workout',
      date: '2024-03-20',
      duration: 70,
      intensity: '보통',
      location: '서울 송파구'
    },
    {
      id: 'a8',
      type: 'achievement',
      date: '2024-03-15',
      duration: 40,
      intensity: '높음',
      location: '서울 송파구'
    }
  ],
  preferences: {
    preferredSports: ['수영', '트라이애슬론'],
    preferredTime: ['주말 오후'],
    preferredDays: ['일'],
    preferredIntensity: '보통',
    preferredGroupSize: '대그룹'
  },
  badges: [
    { id: 'badge7', name: 'Swimming Pro', imageUrl: '/images/badge/swimming.png', description: '수영 10km 달성!' },
    { id: 'badge8', name: 'Triathlon Finisher', imageUrl: '/images/badge/triathlon.png', description: '트라이애슬론 완주!' }
  ],
  ranking: {
    tier: 'Silver',
    rank: 5,
    total: 120,
    week: '2024-W23'
  },
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  bio: 'Swimming coach and triathlon athlete'
};

export const database = {
  users: [user1, user2, user3, user4]
}; 