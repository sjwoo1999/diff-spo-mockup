import React from 'react';
import { User } from '@/types';
import { Card } from '@/components/ui/card';
import { HeartIcon } from '@heroicons/react/24/outline';

interface FavoritesSectionProps {
  user: User;
}

const FavoritesSection: React.FC<FavoritesSectionProps> = ({ user }) => {
  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">즐겨찾기</h3>
        <HeartIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="font-medium">즐겨찾기한 클래스</p>
          <p className="text-sm text-gray-500">아직 즐겨찾기한 클래스가 없습니다.</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="font-medium">즐겨찾기한 커뮤니티 글</p>
          <p className="text-sm text-gray-500">아직 즐겨찾기한 글이 없습니다.</p>
        </div>
      </div>
    </Card>
  );
};

export default FavoritesSection; 