export interface Badge {
  id: string;
  name: string;
  image: string;
}

export interface Ranking {
  points: number;
  rank: number;
  level: number;
}

export interface Activity {
  type: 'workout' | 'achievement';
  title: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  bio: string;
  badges: Badge[];
  ranking: Ranking;
  activities: Activity[];
  followers: User[];
  following: User[];
} 