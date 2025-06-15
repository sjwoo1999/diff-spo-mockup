"use client";
import { database, users } from '@/data/database';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import SafeAreaWrapper from '@/components/common/SafeAreaWrapper';
import BottomNav from '@/components/common/BottomNav';

function MyBackButton({ label = '이전', className = '' }) {
  const router = useRouter();
  return (
    <div className={`w-full flex justify-start mb-4 ${className}`}>
      <button
        onClick={() => router.push('/main?tab=my')}
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

export default function FollowingPage() {
  const router = useRouter();
  const following = database.user.following || [];
  // 실제 서비스라면 유저 DB에서 id로 조회, 여기선 mock
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <h1 className="text-2xl font-bold mb-4">팔로잉</h1>
            <div className="flex flex-col gap-4">
              {following.length === 0 ? (
                <Card className="text-center py-8 text-gray-500">아직 팔로잉한 사용자가 없습니다</Card>
              ) : (
                following.map(fid => {
                  const user = users.find(u => u.id === fid);
                  return (
                    <Card
                      key={fid}
                      className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 transition"
                      onClick={() => router.push(`/user/${fid}`)}
                    >
                      <img src={user?.profileImage || '/images/default/default_profile.jpg'} alt={user?.name || fid} className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <div className="font-bold text-black text-lg mb-1">{user?.name || fid}</div>
                        <div className="text-gray-600 text-sm mb-1">@{fid}</div>
                        <div className="text-xs text-gray-500">{user?.bio}</div>
                      </div>
                      <button className="px-4 py-1.5 bg-gray-300 text-gray-700 text-sm rounded-full shadow hover:bg-gray-400 transition" onClick={e => {e.stopPropagation();}}>언팔로우</button>
                    </Card>
                  );
                })
              )}
            </div>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 