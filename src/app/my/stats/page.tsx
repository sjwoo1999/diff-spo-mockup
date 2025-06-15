"use client";
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/common/BottomNav';
import SafeAreaWrapper from '@/components/common/SafeAreaWrapper';
import { database } from '@/data/database';
import ActivityHeatmap from '@/components/my/ActivityHeatmap';

function MyBackButton({ label = '이전', className = '' }: { label?: string; className?: string }) {
  const router = useRouter();
  return (
    <div className={`w-full flex justify-start mb-4 ${className}`}>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-4 py-1.5 bg-primary text-white text-sm rounded-full shadow hover:bg-primary-dark transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        {label}
      </button>
    </div>
  );
}

export default function StatsPage() {
  const activities = database.user.activities || [];
  // 총 운동 시간 계산
  const totalMinutes = activities.reduce((sum, a) => sum + (a.duration || 0), 0);
  const totalHours = Math.floor(totalMinutes / 60);
  // 운동별 비율 계산
  const byType = activities.reduce((acc, a) => {
    acc[a.type] = (acc[a.type] || 0) + (a.duration || 0);
    return acc;
  }, {} as Record<string, number>);
  const total = Object.values(byType).reduce((a, b) => a + b, 0);
  // 최근 14주 히트맵용 mock
  const heatmapData = Array.from({length: 14*7}, (_,i) => ({day: i, count: Math.floor(Math.random()*3)}));
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <PageHeader
              title="활동 통계"
              description="운동 활동 및 성과를 한눈에 확인하세요."
              titleColor="text-black"
              descriptionColor="text-black"
            />
            <div className="mt-6 mb-6 bg-white rounded-2xl shadow-md p-6 text-gray-700">
              <div className="font-bold text-lg mb-2">총 운동 시간</div>
              <div className="text-2xl text-primary font-extrabold mb-4">{totalHours}시간</div>
              <div className="font-bold text-lg mb-2">운동별 비율</div>
              <div className="flex gap-4 mb-4">
                {Object.entries(byType).map(([type, min]) => (
                  <div key={type} className="flex flex-col items-center">
                    <span className="text-primary font-bold">{type}</span>
                    <span className="text-black">{Math.round((min/total)*100)}%</span>
                  </div>
                ))}
              </div>
              <div className="font-bold text-lg mb-2">최근 14주 히트맵</div>
              <ActivityHeatmap />
            </div>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 