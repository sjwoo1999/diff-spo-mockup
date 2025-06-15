'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    UserCircleIcon,
    ChartBarIcon,
    DocumentTextIcon,
    HeartIcon,
    ClockIcon,
    SparklesIcon,
    TrophyIcon,
    FireIcon,
    Squares2X2Icon
} from '@heroicons/react/24/outline';

export default function MyPage() {
    const router = useRouter();
    const [user] = useState<User>({
        id: '1',
        name: '홍길동',
        email: 'hong@example.com',
        fitnessLevel: '중급',
        skillLevel: '중급',
        preferredLocation: '실내',
        equipment: ['테니스 라켓', '수영복'],
        activities: [
            {
                id: '1',
                type: '테니스',
                date: '2024-03-15',
                duration: 120,
                intensity: '높음',
                location: '강남 테니스장'
            }
        ],
        preferences: {
            preferredSports: ['테니스', '수영'],
            preferredTime: ['평일 오후', '주말 오전'],
            preferredDays: ['월', '수', '금'],
            preferredIntensity: '높음',
            preferredGroupSize: '소그룹'
        }
    });

    const infoItems = [
        {
            title: '내 뱃지',
            description: '획득한 뱃지: 꾸준함의 아이콘, 도전왕',
            icon: SparklesIcon,
            button: '전체보기',
            onButtonClick: () => router.push('/my/badges'),
            type: 'badges',
            content: (
                <div className="flex items-center gap-3">
                    <img src="/images/badge/steady.png" alt="꾸준함의 아이콘" className="w-10 h-10 rounded-full" />
                    <span className="text-xs text-gray-700">꾸준함의 아이콘</span>
                    <img src="/images/badge/challenge.png" alt="도전왕" className="w-10 h-10 rounded-full" />
                    <span className="text-xs text-gray-700">도전왕</span>
                </div>
            ),
        },
        {
            title: '내 랭킹',
            description: 'Silver 7위 / 120명 (2024-W23 기준)',
            icon: TrophyIcon,
            button: '전체보기',
            onButtonClick: () => router.push('/my/ranking'),
            type: 'ranking',
            content: (
                <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-primary">Silver</span>
                    <span className="text-black">7위 / 120명</span>
                    <span className="text-xs text-gray-500">(2024-W23 기준)</span>
                </div>
            ),
        },
        {
            title: '최근 활동',
            description: user.activities && user.activities.length > 0
                ? user.activities.slice(0, 3).map(a => `${a.type} (${a.date}) · ${a.duration}분`).join(', ')
                : '아직 활동 기록이 없습니다.',
            icon: FireIcon,
            type: 'activities',
            content: (
                <div className="space-y-2 w-full">
                    {user.activities && user.activities.length > 0 ? user.activities.slice(0, 3).map(activity => (
                        <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-1">
                            <div>
                                <span className="font-medium mb-0.5 block">{activity.type}</span>
                                <span className="text-sm text-gray-600 block">{activity.date} · {activity.duration}분</span>
                            </div>
                            <span className={`px-2 py-1 rounded text-sm ${
                                activity.intensity === '높음'
                                    ? 'bg-red-100 text-red-800'
                                    : activity.intensity === '보통'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-green-100 text-green-800'
                            }`}>
                                {activity.intensity}
                            </span>
                        </div>
                    )) : <span className="text-gray-600">아직 활동 기록이 없습니다.</span>}
                </div>
            ),
        },
        {
            title: '운동 히트맵',
            description: '최근 운동 히트맵을 확인하세요.',
            icon: Squares2X2Icon,
            type: 'heatmap',
            content: (
                <div className="overflow-x-auto w-full">
                    <table className="min-w-max text-center border-collapse">
                        <thead>
                            <tr>
                                <th className="text-xs text-gray-500 px-2 py-1">일</th>
                                <th className="text-xs text-gray-500 px-2 py-1">월</th>
                                <th className="text-xs text-gray-500 px-2 py-1">화</th>
                                <th className="text-xs text-gray-500 px-2 py-1">수</th>
                                <th className="text-xs text-gray-500 px-2 py-1">목</th>
                                <th className="text-xs text-gray-500 px-2 py-1">금</th>
                                <th className="text-xs text-gray-500 px-2 py-1">토</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 py-1 text-xs">1</td>
                                <td className="px-2 py-1 text-xs">2</td>
                                <td className="px-2 py-1 text-xs">0</td>
                                <td className="px-2 py-1 text-xs">3</td>
                                <td className="px-2 py-1 text-xs">1</td>
                                <td className="px-2 py-1 text-xs">0</td>
                                <td className="px-2 py-1 text-xs">2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ),
        },
    ];

    const menuItems = [
        {
            title: '프로필',
            description: '개인 정보 및 선호도 설정',
            icon: UserCircleIcon,
            path: '/my/profile',
        },
        {
            title: '활동 통계',
            description: '운동 활동 및 성과 분석',
            icon: ChartBarIcon,
            path: '/my/stats',
        },
        {
            title: '리포트',
            description: '맞춤형 운동 리포트',
            icon: DocumentTextIcon,
            path: '/my/reports',
        },
        {
            title: '찜한 클래스',
            description: '저장한 클래스 목록',
            icon: HeartIcon,
            path: '/my/favorites',
        },
        {
            title: '활동 기록',
            description: '운동 활동 히스토리',
            icon: ClockIcon,
            path: '/my/history',
        },
    ];

    return (
        <div className="w-full px-4 py-8">
            <div>
                <div className="max-w-4xl mx-auto">
                    {/* 내 뱃지 섹션 */}
                    <Card className="p-0 rounded-xl border-0 bg-neutral-light mb-6">
                        <div className="flex items-center justify-between w-full mb-4 pl-6 pt-4 pr-4">
                            <span className="text-base font-semibold">내 뱃지</span>
                            <button className="text-xs text-primary font-semibold">전체보기</button>
                        </div>
                        <div className="flex items-center gap-3 pl-6 pb-4">
                            <img src="/images/badge/steady.png" alt="꾸준함의 아이콘" className="w-10 h-10 rounded-full" />
                            <span className="text-xs text-gray-700">꾸준함의 아이콘</span>
                            <img src="/images/badge/challenge.png" alt="도전왕" className="w-10 h-10 rounded-full" />
                            <span className="text-xs text-gray-700">도전왕</span>
                        </div>
                    </Card>

                    {/* 내 랭킹 섹션 */}
                    <Card className="p-0 rounded-xl border-0 bg-neutral-light mb-6">
                        <div className="flex items-center justify-between w-full mb-4 pl-6 pt-4 pr-4">
                            <span className="text-base font-semibold">내 랭킹</span>
                            <button className="text-xs text-primary font-semibold">전체보기</button>
                        </div>
                        <div className="flex items-center gap-2 pl-6 pb-4">
                            <span className="text-base font-bold text-primary">Silver</span>
                            <span className="text-black">7위 / 120명</span>
                            <span className="text-xs text-gray-500">(2024-W23 기준)</span>
                        </div>
                    </Card>

                    {/* 메뉴 카드들 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {infoItems.map((item) => (
                            <Card key={item.title} className="p-0 rounded-xl border-0 bg-neutral-light mb-6 shadow-sm">
                                <div className="flex items-center justify-between w-full mb-4 pl-6 pt-4 pr-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-base font-semibold">{item.title}</span>
                                    </div>
                                    {item.button && (
                                        <button className="text-xs text-primary font-semibold" onClick={item.onButtonClick}>{item.button}</button>
                                    )}
                                </div>
                                <div className="pl-6 pb-4">
                                    <span className="text-sm text-gray-500 leading-relaxed block mb-2">{item.description}</span>
                                    {item.content}
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* 최근 활동 섹션 */}
                    <Card className="p-0 rounded-xl border-0 bg-neutral-light mb-6">
                        <div className="flex items-center justify-between w-full mb-4 pl-6 pt-4 pr-4">
                            <span className="text-base font-semibold">최근 활동</span>
                        </div>
                        {user.activities.length > 0 ? (
                            <div className="space-y-2 w-full pl-6 pb-4">
                                {user.activities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-1"
                                    >
                                        <div>
                                            <span className="font-medium mb-0.5 block">{activity.type}</span>
                                            <span className="text-sm text-gray-600 block">
                                                {activity.date} · {activity.duration}분
                                            </span>
                                        </div>
                                        <span className={`px-2 py-1 rounded text-sm ${
                                            activity.intensity === '높음'
                                                ? 'bg-red-100 text-red-800'
                                                : activity.intensity === '보통'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-green-100 text-green-800'
                                        }`}>
                                            {activity.intensity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <span className="text-gray-600 pl-6 pb-4 block">아직 활동 기록이 없습니다.</span>
                        )}
                    </Card>

                    {/* 운동 히트맵 섹션 */}
                    <Card className="p-0 rounded-xl border-0 bg-neutral-light mb-6">
                        <div className="flex items-center justify-between w-full mb-4 pl-6 pt-4 pr-4">
                            <span className="text-base font-semibold">운동 히트맵</span>
                        </div>
                        <div className="overflow-x-auto w-full pl-6 pb-4">
                            <table className="min-w-max text-center border-collapse">
                                <thead>
                                    <tr>
                                        <th className="text-xs text-gray-500 px-2 py-1">일</th>
                                        <th className="text-xs text-gray-500 px-2 py-1">월</th>
                                        <th className="text-xs text-gray-500 px-2 py-1">화</th>
                                        <th className="text-xs text-gray-500 px-2 py-1">수</th>
                                        <th className="text-xs text-gray-500 px-2 py-1">목</th>
                                        <th className="text-xs text-gray-500 px-2 py-1">금</th>
                                        <th className="text-xs text-gray-500 px-2 py-1">토</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-2 py-1 text-xs">1</td>
                                        <td className="px-2 py-1 text-xs">2</td>
                                        <td className="px-2 py-1 text-xs">0</td>
                                        <td className="px-2 py-1 text-xs">3</td>
                                        <td className="px-2 py-1 text-xs">1</td>
                                        <td className="px-2 py-1 text-xs">0</td>
                                        <td className="px-2 py-1 text-xs">2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
} 