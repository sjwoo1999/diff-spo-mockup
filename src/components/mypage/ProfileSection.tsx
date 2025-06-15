import React from 'react';
import { User } from '@/types';
import { Card } from '@/components/ui/card';

interface ProfileSectionProps {
  user: User;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center gap-4">
        <img
          src={user.profileImage || '/images/default/default_profile.jpg'}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">{user.bio}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">운동 레벨</p>
          <p className="font-medium">{user.fitnessLevel} / {user.skillLevel}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">선호 장소</p>
          <p className="font-medium">{user.preferredLocation}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection; 