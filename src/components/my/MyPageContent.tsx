'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Database, User, Activity } from '@/types';
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
import ActivityHeatmap from '@/components/my/ActivityHeatmap';

interface MyPageContentProps {
    database: Database;
}

export default function MyPageContent({ database }: MyPageContentProps) {
    const router = useRouter();
    const [user] = useState<User>({
        ...database.user,
        activities: [
            { id: 'a1', type: '테니스', date: '2024-06-08', duration: 90, intensity: '보통', location: '서울 강남구' },
            { id: 'a2', type: '러닝', date: '2024-06-02', duration: 60, intensity: '높음', location: '서울 용산구' },
            { id: 'a3', type: '수영', date: '2024-05-30', duration: 45, intensity: '낮음', location: '서울 송파구' },
        ]
    });

    const infoItems = [
        {
            title: '내 뱃지',
            description: user.badges && user.badges.length > 0 ? user.badges.slice(0, 4).map(b => b.name).join(', ') : '아직 획득한 뱃지가 없어요',
            icon: SparklesIcon,
            button: '전체보기',
            onButtonClick: () => router.push('/my/badges'),
            type: 'badges',
            content: (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {user.badges && user.badges.length > 0 ? (
                        user.badges.slice(0, 4).map(badge => (
                            <div key={badge.id} className="flex flex-col items-center min-w-[64px]">
                                <img src={badge.imageUrl} alt={badge.name} className="w-10 h-10 rounded-full mb-1 border border-primary" />
                                <span className="text-xs text-black text-center whitespace-nowrap">{badge.name}</span>
                            </div>
                        ))
                    ) : (
                        <span className="text-gray-400 text-sm">아직 획득한 뱃지가 없어요</span>
                    )}
                </div>
            ),
        },
        {
            title: '내 랭킹',
            description: user.ranking ? `${user.ranking.tier} ${user.ranking.rank}위 / ${user.ranking.total}명 (${user.ranking.week} 기준)` : '아직 랭킹 정보가 없어요',
            icon: TrophyIcon,
            button: '전체보기',
            onButtonClick: () => router.push('/my/ranking'),
            type: 'ranking',
            content: (
                user.ranking ? (
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-primary">{user.ranking.tier}</span>
                        <span className="text-black">{user.ranking.rank}위 / {user.ranking.total}명</span>
                        <span className="text-xs text-gray-500">({user.ranking.week} 기준)</span>
                    </div>
                ) : (
                    <span className="text-gray-400 text-sm">아직 랭킹 정보가 없어요</span>
                )
            ),
        },
        {
            title: '최근 활동',
            description: user.activities && user.activities.length > 0 ? user.activities.slice(0, 3).map(a => `${a.type} (${a.date}) · ${a.duration}분`).join(', ') : '아직 활동 기록이 없습니다.',
            icon: FireIcon,
            type: 'activities',
            content: (
                user.activities && user.activities.length > 0 ? (
                    <ul className="space-y-2">
                        {user.activities.map(activity => (
                            <li key={activity.id} className="flex justify-between items-center">
                                <span className="text-black">{activity.type} ({activity.date})</span>
                                <span className="text-primary font-bold">{activity.duration}분</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">아직 활동 기록이 없습니다.</p>
                )
            ),
        },
        {
            title: '운동 히트맵',
            description: '최근 운동 히트맵을 확인하세요.',
            icon: Squares2X2Icon,
            type: 'heatmap',
            content: (
                <div className="w-full min-w-0 overflow-x-auto">
                    <ActivityHeatmap />
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
        <div className="w-full max-w-xl mx-auto px-4 py-8 bg-transparent min-h-screen">
            <h1 className="text-2xl font-extrabold text-black mb-2 text-center">마이페이지</h1>
            <p className="text-base text-black mb-8 text-center">내 정보와 활동을 확인하고 관리하세요.</p>
            {/* 팔로워/팔로잉 카운트 */}
            <div className="flex justify-center gap-4 mb-4">
                <button onClick={() => router.push('/my/followers')} className="text-primary font-bold hover:underline">팔로워 {user.followers?.length ?? 0}</button>
                <span className="text-gray-400">|</span>
                <button onClick={() => router.push('/my/following')} className="text-primary font-bold hover:underline">팔로잉 {user.following?.length ?? 0}</button>
            </div>

            {/* infoItems 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {infoItems.map(item => (
                    <Card key={item.title} className="flex flex-col gap-2 bg-white rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <item.icon className="w-7 h-7 text-primary" />
                                <h2 className="text-lg font-bold text-black">{item.title}</h2>
                            </div>
                            {item.button && (
                                <Button variant="secondary" onClick={item.onButtonClick}>{item.button}</Button>
                            )}
                        </div>
                        <div className="mb-1 text-sm text-gray-500">{item.description}</div>
                        {item.content}
                    </Card>
                ))}
            </div>

            {/* menuItems 카드 그리드 */}
            <div className="flex flex-col gap-4">
                {menuItems.map(item => (
                    <Card
                        key={item.title}
                        className="flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow rounded-2xl px-5 py-4 bg-white"
                        onClick={() => router.push(item.path)}
                    >
                        <item.icon className="w-8 h-8 text-primary" />
                        <div className="flex-1">
                            <div className="text-lg font-bold text-black mb-0.5">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Card>
                ))}
            </div>
        </div>
    );
}