"use client";
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import ClassCard from '@/components/classes/ClassCard';
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

export default function FavoritesPage() {
  const router = useRouter();
  // 목업 데이터
  const favoriteClasses = [
    {
      id: 'class1',
      title: '초보자 클라이밍 강습',
      imageUrl: '/images/class/climbing.jpg',
      instructor: '김스핀',
      type: '클라이밍 · 초급 · 실내',
      price: 50000,
      duration: '2시간',
      recommendationScore: 0.82,
      location: '강남 클라이밍 짐',
    },
    {
      id: 'class2',
      title: '요가 베이직: 유연성 향상',
      imageUrl: '/images/class/yoga.jpg',
      instructor: '이다솜',
      type: '요가 · 중급 · 실내',
      price: 35000,
      duration: '1시간 30분',
      recommendationScore: 0.75,
      location: '홍대 요가 스튜디오',
    },
    {
      id: 'class3',
      title: '주말 러닝 모임 (5km)',
      imageUrl: '/images/class/running.jpg',
      instructor: '팀 러너스',
      type: '러닝 · 초급 · 야외',
      price: 10000,
      duration: '1시간',
      recommendationScore: 0.91,
      location: '한강 반포지구',
    },
  ];
  const favoritePosts = [
    {
      id: 'post-1',
      title: '파델 라켓 추천 부탁드려요!',
      author: 'user123',
      date: '2024-06-09',
      snippet: '입문용 파델 라켓 고민 중인데 추천 부탁드립니다!',
      imageUrl: '/images/sports/padel.jpg',
    }
  ];
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <h1 className="text-2xl font-extrabold text-black mb-2 text-center">즐겨찾기</h1>
            <p className="text-base text-black mb-8 text-center">찜한 클래스와 커뮤니티 글을 확인할 수 있습니다.</p>
            <div className="mb-6">
              <div className="font-semibold text-gray-500 mb-2">찜한 클래스</div>
              <div className="flex flex-col gap-4">
                {favoriteClasses.map((cls) => (
                  <Card key={cls.id} className="flex flex-col gap-2 rounded-2xl shadow-md px-5 py-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={cls.imageUrl} alt={cls.title} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                        <div>
                          <div className="font-bold text-black text-base mb-0.5">{cls.title}</div>
                          <div className="text-xs text-gray-500">{cls.type} · {cls.instructor} · {cls.location}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-primary font-bold text-lg">{cls.price > 0 ? `${cls.price.toLocaleString()}원` : '0원'}</span>
                        <span className="text-xs text-green-600">추천 점수: {cls.recommendationScore}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-500 mb-2">찜한 커뮤니티 글</div>
              <div className="flex flex-col gap-4">
                {favoritePosts.map((post) => (
                  <Card key={post.id} className="rounded-2xl shadow-md px-5 py-4 bg-white">
                    <div className="flex items-center gap-3 mb-2">
                      {post.imageUrl && (
                        <img src={post.imageUrl} alt={post.title} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                      )}
                      <div>
                        <div className="font-bold text-black text-base mb-1">{post.title}</div>
                        <div className="text-xs text-gray-500 mb-1">{post.author} · {post.date}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">{post.snippet}</div>
                  </Card>
                ))}
              </div>
            </div>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 