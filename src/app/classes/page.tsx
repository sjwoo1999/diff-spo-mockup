'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ClassesPage = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-black">
      <h1 className="text-3xl font-bold mb-3 text-black">
        클래스 페이지 준비 중입니다!
      </h1>

      <p className="text-base text-gray-700 mb-6 leading-relaxed">
        <span className="font-semibold text-primary">클래스 상세 정보</span>,&nbsp;
        <span className="font-semibold text-primary">예약 기능</span>,&nbsp;
        <span className="font-semibold text-primary">후기 및 추천 시스템</span> 등<br />
        다양한 기능을 곧 만나보실 수 있어요!
      </p>

      <div className="mb-8 text-sm text-gray-700">
        <p className="font-medium text-gray-800">예정된 기능:</p>
        <ul className="mt-2 space-y-1 text-left">
          <li>✔️ 클래스별 상세 소개 및 강사 정보</li>
          <li>✔️ 원하는 일정 선택 후 실시간 예약</li>
          <li>✔️ 사용자 후기 기반 맞춤 추천</li>
          <li>✔️ 다양한 테마(운동, 취미, 워케이션 등) 클래스 탐색</li>
        </ul>
      </div>

      <button
        onClick={() => router.push('/main')}
        className="px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
      >
        홈으로 돌아가기
      </button>
    </main>
  );
};

export default ClassesPage;
