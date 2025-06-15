"use client";
import { useRouter, useParams } from 'next/navigation';
import { users } from '@/data/database';
import { Card } from '@/components/ui/card';
import SafeAreaWrapper from '@/components/common/SafeAreaWrapper';
import BottomNav from '@/components/common/BottomNav';

export default function UserProfilePage() {
  const router = useRouter();
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';
  const user = users.find(u => u.id === id);

  if (!user) {
    return (
      <div className="w-full min-h-screen flex justify-center bg-black">
        <div className="relative w-full max-w-xl flex flex-col">
          <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
            <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6 items-center justify-center">
              <Card className="p-8 text-center text-gray-500">유저를 찾을 수 없습니다</Card>
              <button className="mt-6 px-6 py-2 rounded-lg bg-primary text-white font-bold" onClick={() => router.back()}>돌아가기</button>
            </main>
            <BottomNav activePage="my" setActivePage={() => {}} />
          </SafeAreaWrapper>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6 items-center">
            <button className="self-start mb-4 px-4 py-1.5 bg-primary text-white text-sm rounded-full shadow hover:bg-primary-dark transition" onClick={() => router.back()}>
              ← 이전
            </button>
            <Card className="flex flex-col items-center gap-4 p-8 rounded-2xl shadow-md bg-white w-full max-w-md">
              <img src={user.profileImage || '/images/default/default_profile.jpg'} alt={user.name} className="w-24 h-24 rounded-full border border-primary" />
              <div className="text-2xl font-bold text-black">{user.name}</div>
              <div className="text-gray-600 text-sm">@{user.id}</div>
              <div className="text-gray-500 text-center mb-2">{user.bio}</div>
              <div className="w-full flex flex-col gap-2 mt-2">
                <div className="text-sm text-gray-700"><b>이메일:</b> {user.email}</div>
                <div className="text-sm text-gray-700"><b>선호 스포츠:</b> {user.preferences?.preferredSports?.join(', ') || '-'}</div>
                <div className="text-sm text-gray-700"><b>운동 레벨:</b> {user.fitnessLevel} / {user.skillLevel}</div>
              </div>
            </Card>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 