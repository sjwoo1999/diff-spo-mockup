// src/components/my/MyPage.tsx
import React from 'react';
import Image from 'next/image';
import { Database } from '@/types';
import PageHeader from '@/components/common/PageHeader';

interface MyPageProps {
    database: Database;
}

const MyPage: React.FC<MyPageProps> = ({ database }) => {
    return (
        <section id="page-my" className="page active p-4">
            <PageHeader
                title="마이페이지"
                description="" // No specific description needed here based on original code
            />
            <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg border border-orange-100">
                <Image src="https://placehold.co/100x100/fecdd3/44403c?text=MY" alt="User" width={100} height={100} className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"/>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">열정적인 도전자</h2>
                    <p className="text-orange-700 mt-1 text-base">SPIN과 함께 3개의 스포츠를 탐험했어요!</p>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-5 text-gray-800 border-l-4 border-orange-500 pl-3">나의 활동 기록</h3>
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transform hover:scale-[1.01] transition duration-300 text-gray-800 active:scale-99">슬랙라이닝 클래스 수강 완료</div>
                    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transform hover:scale-[1.01] transition duration-300 text-gray-800 active:scale-99">&#39;주말 번개 트릭킹 모임&#39; 참여</div>
                </div>
            </div>
        </section>
    );
};

export default MyPage;