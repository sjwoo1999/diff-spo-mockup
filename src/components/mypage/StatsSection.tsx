import React from 'react';
import { User } from '@/types';
import { Card } from '@/components/ui/card';
import { TrophyIcon, ChartBarIcon, FireIcon } from '@heroicons/react/24/outline';

interface StatsSectionProps {
  user: User;
}

const StatsSection: React.FC<StatsSectionProps> = ({ user }) => {
  return (
    <Card className="p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">내 통계</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <TrophyIcon className="w-8 h-8 mx-auto text-primary mb-2" />
          <p className="text-sm text-gray-500">뱃지</p>
          <p className="font-medium">{user.badges?.length || 0}개</p>
        </div>
        <div className="text-center">
          <ChartBarIcon className="w-8 h-8 mx-auto text-primary mb-2" />
          <p className="text-sm text-gray-500">랭킹</p>
          <p className="font-medium">{user.ranking?.tier || '-'} {user.ranking?.rank || '-'}</p>
        </div>
        <div className="text-center">
          <FireIcon className="w-8 h-8 mx-auto text-primary mb-2" />
          <p className="text-sm text-gray-500">활동</p>
          <p className="font-medium">{user.activities?.length || 0}회</p>
        </div>
      </div>
    </Card>
  );
};

export default StatsSection; 