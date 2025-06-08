'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Database } from '@/types';
import { useRouter } from 'next/navigation';

interface MyPageProps {
    database: Database;
}

const MyPageContent: React.FC<MyPageProps> = ({ database }) => {
    const user = database.user;
    const router = useRouter();

    const handlePrivacyPolicyClick = () => {
        router.push('/privacy-policy');
    };

    const handleTermsOfServiceClick = () => {
        router.push('/terms-of-service');
    };

    const handleLogout = () => {
        console.log('로그아웃 되었습니다.');
        router.push('/login');
    };

    const handleAccountDeletion = () => {
        if (window.confirm('정말로 회원 탈퇴하시겠습니까? 모든 데이터가 삭제됩니다.')) {
            console.log('회원 탈퇴가 완료되었습니다.');
            router.push('/signup');
        }
    };

    return (
        <section
            id="page-my"
            className="page active w-full max-w-[512px] mx-auto p-4 sm:p-6 md:p-8 overflow-y-auto min-h-screen flex flex-col"
        >
            <PageHeader title="마이페이지" description="SPIN과 함께한 당신의 기록과 활동을 관리해보세요." />

            {/* 유저 프로필 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 mb-6 mt-6 flex items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-2xl sm:text-3xl mr-4 sm:mr-6">
                    MY
                </div>
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{user.name}스핀</h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        {user.gender === 'male' ? '남성' : user.gender === 'female' ? '여성' : '기타'} | {user.dateOfBirth} | {user.phoneNumber}
                    </p>
                </div>
            </div>

            {/* 나의 활동 기록 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">나의 활동 기록</h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span>클라이밍 강습 1-1회 완료</span>
                        <span className="text-orange-500 font-semibold">2025.05.20</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span>커뮤니티 게시글 3개 작성</span>
                        <span className="text-orange-500 font-semibold">진행 중</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span>좋아하는 클래스 5개 저장</span>
                        <span className="text-orange-500 font-semibold">진행 중</span>
                    </li>
                </ul>
            </div>

            {/* 설정 및 약관 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">설정 및 약관</h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span>개인정보 처리방침</span>
                        <button
                            className="text-blue-500 hover:underline"
                            onClick={handlePrivacyPolicyClick}
                        >
                            보기
                        </button>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span>이용약관</span>
                        <button
                            className="text-blue-500 hover:underline"
                            onClick={handleTermsOfServiceClick}
                        >
                            보기
                        </button>
                    </li>
                </ul>
            </div>

            {/* 기타 정보 섹션 */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">기타</h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="py-2">
                        <button className="text-red-500 hover:underline" onClick={handleLogout}>
                            로그아웃
                        </button>
                    </li>
                    <li className="py-2">
                        <button className="text-red-500 hover:underline" onClick={handleAccountDeletion}>
                            회원 탈퇴
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MyPageContent;
