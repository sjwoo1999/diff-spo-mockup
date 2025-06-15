import { User } from '@/types';

// Create users first
const user1: User = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  bio: 'Fitness enthusiast and sports lover',
  badges: [
    { id: 'badge1', name: 'Early Bird', image: '/images/badge/early-bird.png' },
    { id: 'badge2', name: 'Consistent', image: '/images/badge/consistent.png' }
  ],
  ranking: {
    points: 1250,
    rank: 42,
    level: 5
  },
  activities: [
    {
      type: 'workout',
      title: 'Morning Run',
      date: '2024-03-20'
    },
    {
      type: 'achievement',
      title: 'Reached Level 5',
      date: '2024-03-19'
    }
  ],
  followers: [],
  following: []
};

const user2: User = {
  id: 'user2',
  name: 'Jane Smith',
  email: 'jane@example.com',
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  bio: 'Yoga instructor and wellness coach',
  badges: [
    { id: 'badge3', name: 'Yoga Master', image: '/images/badge/yoga-master.png' },
    { id: 'badge4', name: 'Meditation Guru', image: '/images/badge/meditation.png' }
  ],
  ranking: {
    points: 980,
    rank: 78,
    level: 4
  },
  activities: [
    {
      type: 'workout',
      title: 'Evening Yoga',
      date: '2024-03-20'
    },
    {
      type: 'achievement',
      title: 'Completed 100 Sessions',
      date: '2024-03-18'
    }
  ],
  followers: [],
  following: []
};

const user3: User = {
  id: 'user3',
  name: 'Mike Johnson',
  email: 'mike@example.com',
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
  bio: 'CrossFit trainer and nutrition expert',
  badges: [
    { id: 'badge5', name: 'Strength Master', image: '/images/badge/strength.png' },
    { id: 'badge6', name: 'Nutrition Expert', image: '/images/badge/nutrition.png' }
  ],
  ranking: {
    points: 1500,
    rank: 15,
    level: 6
  },
  activities: [
    {
      type: 'workout',
      title: 'CrossFit WOD',
      date: '2024-03-20'
    },
    {
      type: 'achievement',
      title: 'New PR in Deadlift',
      date: '2024-03-17'
    }
  ],
  followers: [],
  following: []
};

const user4: User = {
  id: 'user4',
  name: 'Sarah Wilson',
  email: 'sarah@example.com',
  profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  bio: 'Swimming coach and triathlon athlete',
  badges: [
    { id: 'badge7', name: 'Swimming Pro', image: '/images/badge/swimming.png' },
    { id: 'badge8', name: 'Triathlon Finisher', image: '/images/badge/triathlon.png' }
  ],
  ranking: {
    points: 2000,
    rank: 5,
    level: 7
  },
  activities: [
    {
      type: 'workout',
      title: 'Morning Swim',
      date: '2024-03-20'
    },
    {
      type: 'achievement',
      title: 'Completed Triathlon',
      date: '2024-03-15'
    }
  ],
  followers: [],
  following: []
};

// Set up follow relationships
user1.followers = [user2, user3];
user1.following = [user2, user4];

user2.followers = [user1, user4];
user2.following = [user1, user3];

user3.followers = [user2];
user3.following = [user1, user4];

user4.followers = [user1, user3];
user4.following = [user2];

export const database = {
  users: [user1, user2, user3, user4]
}; 