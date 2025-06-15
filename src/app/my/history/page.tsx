"use client";
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
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

export default function HistoryPage() {
  const router = useRouter();
  // 목업 데이터
  const history = [
    {
      id: 'h1',
      title: '강남 테니스 아카데미',
      date: '2024-06-08',
      memo: '첫 참가! 분위기 좋고 강사님 친절함.',
      type: '클래스'
    },
    {
      id: 'h2',
      title: '한강 러닝 크루',
      date: '2024-06-02',
      memo: '5km 완주! 다음엔 기록 단축 도전.',
      type: '클래스'
    },
    {
      id: 'h3',
      title: '테니스 라켓 추천 글 댓글 작성',
      date: '2024-06-01',
      memo: '입문자에게 적합한 라켓 정보 공유.',
      type: '커뮤니티'
    }
  ];
  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl flex flex-col">
        <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
          <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
            <MyBackButton label="이전" />
            <PageHeader
              title="활동 내역"
              description="참여한 클래스와 커뮤니티 활동 내역을 확인할 수 있습니다."
              titleColor="text-black"
              descriptionColor="text-black"
            />
            <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
              <ul className="divide-y">
                {history.map((item) => (
                  <li key={item.id} className="py-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-black">{item.title}</span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-1">{item.type}</div>
                    <div className="text-sm text-gray-700">{item.memo}</div>
                  </li>
                ))}
              </ul>
            </div>
          </main>
          <BottomNav activePage="my" setActivePage={() => {}} />
        </SafeAreaWrapper>
      </div>
    </div>
  );
} 