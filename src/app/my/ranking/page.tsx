'use client';
import { database } from '@/data/database';
import { Card } from '@/components/ui/card';
import SafeAreaWrapper from '@/components/common/SafeAreaWrapper';
import BottomNav from '@/components/common/BottomNav';
import { useRouter } from 'next/navigation';

function MyBackButton({ label = '이전', className = '' }) {
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

export default function RankingPage() {
  const ranking = database.user.ranking;
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <h1 className="text-2xl font-bold mb-4">내 랭킹</h1>
            <Card className="flex flex-col items-center gap-2 p-6 mb-4">
              {ranking ? (
                <>
                  <div className="text-xl font-bold text-primary mb-1">{ranking.tier} 티어</div>
                  <div className="text-black text-lg mb-1">{ranking.rank}위 / {ranking.total}명</div>
                  <div className="text-xs text-gray-500 mb-1">{ranking.week} 기준</div>
                </>
              ) : (
                <div className="text-gray-400">아직 랭킹 정보가 없어요</div>
              )}
            </Card>
            {/* 향후 상위 랭커, 티어별 분포 등 확장 가능 */}
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 