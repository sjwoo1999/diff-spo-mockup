import React from 'react';
import { User } from '@/types';
import { Card } from '@/components/ui/card';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface ReportSectionProps {
  user: User;
}

const ReportSection: React.FC<ReportSectionProps> = ({ user }) => {
  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">운동 리포트</h3>
        <DocumentTextIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="space-y-4">
        {user.activities?.slice(0, 3).map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{activity.type}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{activity.duration}분</p>
              <p className="text-sm text-gray-500">{activity.intensity}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ReportSection; 