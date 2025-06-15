"use client";
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';

export default function ActivityStatsPage() {
  const router = useRouter();
  // 목업 데이터
  const stats = {
    totalSessions: 128,
    totalHours: 176.5,
    weekly: [2, 3, 1, 4, 2, 0, 1], // 최근 7일 운동 횟수
    monthly: [12, 15, 10, 18], // 최근 4주 운동 횟수
    lastActivity: '2024-06-10',
  };
  const weekDays = ['월', '화', '수', '목', '금', '토', '일'];
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-10 bg-background text-gray-900 min-h-screen">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push('/main?tab=my')}
      >
        ← 마이페이지로
      </Button>
      <PageHeader
        title="활동 통계"
        description="운동 기록과 통계를 확인할 수 있습니다."
      />
      <div className="mt-8 bg-card rounded-card shadow-md p-6">
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-sm text-gray-500">총 운동 횟수</div>
            <div className="text-2xl font-bold text-primary">{stats.totalSessions}회</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">총 운동 시간</div>
            <div className="text-2xl font-bold text-primary">{stats.totalHours}시간</div>
          </div>
        </div>
        <div className="mb-6">
          <div className="font-medium mb-2">최근 1주 운동 횟수</div>
          <div className="flex gap-2 items-end h-20">
            {stats.weekly.map((count, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-6 rounded-t bg-primary"
                  style={{ height: `${count * 18}px`, minHeight: '8px' }}
                ></div>
                <span className="text-xs mt-1 text-gray-500">{weekDays[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-medium mb-2">최근 4주 운동 횟수</div>
          <div className="flex gap-4 items-end h-20">
            {stats.monthly.map((count, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-8 rounded-t bg-primary/70"
                  style={{ height: `${count * 6}px`, minHeight: '8px' }}
                ></div>
                <span className="text-xs mt-1 text-gray-500">{i + 1}주차</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500">최근 운동일: {stats.lastActivity}</div>
      </div>
    </div>
  );
} 