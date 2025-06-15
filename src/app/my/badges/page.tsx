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

export default function BadgesPage() {
  const badges = database.user.badges || [];
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <h1 className="text-2xl font-bold mb-4">내 뱃지</h1>
            <div className="flex flex-col gap-4">
              {badges.length === 0 ? (
                <Card className="text-center py-8 text-gray-500">아직 획득한 뱃지가 없어요</Card>
              ) : (
                badges.map(badge => (
                  <Card key={badge.id} className="flex items-center gap-4 p-4">
                    <img src={badge.imageUrl} alt={badge.name} className="w-14 h-14 rounded-full" />
                    <div className="flex-1">
                      <div className="font-bold text-black text-lg mb-1">{badge.name}</div>
                      <div className="text-gray-600 text-sm mb-1">{badge.description}</div>
                      {badge.acquiredAt && <div className="text-xs text-gray-400">획득일: {badge.acquiredAt}</div>}
                    </div>
                  </Card>
                ))
              )}
            </div>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 