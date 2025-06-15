"use client";
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import BottomNav from '@/components/common/BottomNav';
import SafeAreaWrapper from '@/components/common/SafeAreaWrapper';

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

export default function ProfilePage() {
  const router = useRouter();
  // 목업 데이터
  const user = {
    name: '홍길동',
    email: 'honggildong@example.com',
    avatar: '/images/default/default_profile.jpg',
    gender: '남성',
    birth: '1995-07-15',
    location: '서울 강남구',
    favoriteSports: ['테니스', '수영', '러닝'],
    introduction: '운동을 사랑하는 직장인입니다. 다양한 스포츠를 즐기며 건강을 챙기고 있어요!'
  };
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <h1 className="text-2xl font-extrabold text-black mb-2 text-center">프로필</h1>
            <p className="text-base text-black mb-8 text-center">개인 정보 및 선호도를 설정할 수 있습니다.</p>
            <Card className="flex flex-col items-center gap-4 rounded-2xl shadow-md px-8 py-8 bg-white">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              </div>
              <div className="text-xl font-bold text-black">{user.name}</div>
              <div className="text-sm text-gray-500 mb-2">{user.email}</div>
              <div className="w-full flex flex-col gap-2 text-sm text-black">
                <div className="flex justify-between"><span className="font-semibold text-gray-500">성별</span><span className="text-black">{user.gender}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-gray-500">생년월일</span><span className="text-black">{user.birth}</span></div>
                <div className="flex justify-between"><span className="font-semibold text-gray-500">지역</span><span className="text-black">{user.location}</span></div>
              </div>
              <div className="w-full mt-4">
                <div className="font-semibold text-gray-500 mb-1">선호 스포츠</div>
                <div className="flex gap-2 flex-wrap">
                  {user.favoriteSports.map((sport) => (
                    <span key={sport} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{sport}</span>
                  ))}
                </div>
              </div>
              <div className="w-full mt-4">
                <div className="font-semibold text-gray-500 mb-1">소개</div>
                <div className="text-sm text-gray-700">{user.introduction}</div>
              </div>
            </Card>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 