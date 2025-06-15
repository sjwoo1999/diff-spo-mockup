'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Report } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BottomNav from '@/components/common/BottomNav';
import SafeAreaWrapper from '@/components/common/SafeAreaWrapper';
import React from 'react';

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

export default function ReportDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const router = useRouter();
    const [report, setReport] = useState<Report | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 실제 구현에서는 API 호출을 통해 리포트 데이터를 가져옴
        const fetchReport = async () => {
            setIsLoading(true);
            // 임시 데이터 (상태별 예시)
            let mockReport: Report;
            if (id === '2') {
                mockReport = {
                    id: '2',
                    userId: '1',
                    title: '테니스 성과 리포트',
                    createdAt: '2024-03-14T15:30:00Z',
                    status: 'processing',
                    type: 'performance'
                };
            } else if (id === '3') {
                mockReport = {
                    id: '3',
                    userId: '1',
                    title: '4월 활동 리포트',
                    createdAt: '2024-04-15T10:00:00Z',
                    status: 'pending',
                    type: 'activity'
                };
            } else if (id === '4') {
                mockReport = {
                    id: '4',
                    userId: '1',
                    title: '수영 성과 리포트',
                    createdAt: '2024-03-20T10:00:00Z',
                    status: 'failed',
                    type: 'performance',
                    error: '데이터 분석 실패'
                };
            } else {
                mockReport = {
                    id: id,
                    userId: '1',
                    title: '3월 활동 리포트',
                    createdAt: '2024-03-15T10:00:00Z',
                    status: 'completed',
                    type: 'activity',
                    content: {
                        summary: '3월 활동 분석 결과입니다. 전반적으로 운동 시간이 증가했으며, 특히 테니스와 수영 활동이 두드러집니다.',
                        details: [
                            {
                                category: '총 운동 시간',
                                value: '24시간',
                                description: '지난 달 대비 20% 증가'
                            },
                            {
                                category: '가장 많이 한 운동',
                                value: '테니스',
                                description: '총 12시간 (50%)'
                            },
                            {
                                category: '평균 운동 강도',
                                value: '중간',
                                description: '적절한 운동 강도 유지'
                            }
                        ],
                        badgesEarned: [
                            {
                                id: 'badge1',
                                name: '꾸준함의 아이콘',
                                description: '3주 연속 운동 달성! 꾸준함이 멋져요!',
                                imageUrl: '/images/badge/steady.png',
                                acquiredAt: '2024-06-01',
                            }
                        ],
                        ranking: {
                            tier: 'Silver',
                            rank: 7,
                            total: 120,
                            week: '2024-W23',
                        },
                        recommendations: [
                            {
                                title: '다양한 운동 추가',
                                description: '현재 테니스에 치중되어 있으므로, 수영이나 요가 등 다른 운동을 추가하면 좋을 것 같습니다.',
                                priority: 'high'
                            },
                            {
                                title: '운동 시간 조정',
                                description: '주말 오전 시간대에 운동 시간을 늘리면 더 효과적일 것 같습니다.',
                                priority: 'medium'
                            }
                        ]
                    }
                };
            }
            setReport(mockReport);
            setIsLoading(false);
        };

        fetchReport();
    }, [id]);

    if (isLoading) {
        return (
            <div className="w-full min-h-screen flex justify-center bg-black">
                <div className="relative w-full max-w-xl flex flex-col">
                    <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
                        <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6 items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </main>
                        <BottomNav activePage="my" setActivePage={() => {}} />
                    </SafeAreaWrapper>
                </div>
            </div>
        );
    }

    if (!report) {
        return (
            <div className="w-full min-h-screen flex justify-center bg-black">
                <div className="relative w-full max-w-xl flex flex-col">
                    <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
                        <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6 items-center justify-center">
                            <h1 className="text-2xl font-bold mb-4">리포트를 찾을 수 없습니다</h1>
                            <Button onClick={() => router.back()}>돌아가기</Button>
                        </main>
                        <BottomNav activePage="my" setActivePage={() => {}} />
                    </SafeAreaWrapper>
                </div>
            </div>
        );
    }

    if (report.status === 'processing' || report.status === 'pending') {
        return (
            <div className="w-full min-h-screen flex justify-center bg-black">
                <div className="relative w-full max-w-xl flex flex-col">
                    <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
                        <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6 items-center justify-center">
                            <Card className="w-full rounded-2xl shadow-md px-6 py-10 flex flex-col items-center bg-white">
                                <h1 className="text-xl font-bold text-black mb-3">리포트 {report.status === 'processing' ? '생성 중' : '대기 중'}</h1>
                                <p className="text-gray-700 mb-6">리포트가 {report.status === 'processing' ? '생성되고 있습니다.' : '생성 대기 중입니다.'} 잠시만 기다려 주세요.</p>
                                <div className="flex justify-center mt-2">
                                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                                </div>
                            </Card>
                        </main>
                        <BottomNav activePage="my" setActivePage={() => {}} />
                    </SafeAreaWrapper>
                </div>
            </div>
        );
    }
    if (report.status === 'failed') {
        return (
            <div className="w-full min-h-screen flex justify-center bg-black">
                <div className="relative w-full max-w-xl flex flex-col">
                    <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
                        <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6 items-center justify-center">
                            <Card className="w-full rounded-2xl shadow-md px-6 py-10 flex flex-col items-center bg-white">
                                <h1 className="text-xl font-bold text-black mb-3">리포트 생성 실패</h1>
                                <p className="text-red-600 mb-4">{report.error || '알 수 없는 오류가 발생했습니다.'}</p>
                                <Button onClick={() => router.back()} className="mt-2 px-6 py-2 rounded-lg bg-primary text-white font-bold">돌아가기</Button>
                            </Card>
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
                    <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
                        <MyBackButton label="이전" />
                        <Card className="w-full rounded-2xl shadow-md p-6 bg-white mb-6">
                            <div className="mb-6">
                                <h1 className="text-2xl font-bold mb-2">{report.title}</h1>
                                <p className="text-sm text-gray-600">
                                    {new Date(report.createdAt).toLocaleDateString('ko-KR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                            {/* 🏅 이번 주 신규 뱃지/랭킹 섹션 */}
                            {report.content && (
                              <div className="mb-8">
                                {report.content.badgesEarned && report.content.badgesEarned.length > 0 && (
                                  <div className="mb-4">
                                    <h2 className="text-lg font-semibold mb-2 text-primary">이번 주에 새로 획득한 뱃지</h2>
                                    <div className="flex gap-3 items-center">
                                      {report.content.badgesEarned.map(badge => (
                                        <div key={badge.id} className="flex flex-col items-center">
                                          <img src={badge.imageUrl} alt={badge.name} className="w-10 h-10 rounded-full border border-primary mb-1" />
                                          <span className="text-xs text-black font-bold">{badge.name}</span>
                                        </div>
                                      ))}
                                    </div>
                                    <p className="text-sm text-gray-700 mt-2">{report.content.badgesEarned[0].description}</p>
                                  </div>
                                )}
                                {report.content.ranking && (
                                  <div className="mb-2">
                                    <h2 className="text-lg font-semibold mb-2 text-primary">이번 주 내 랭킹</h2>
                                    <div className="flex items-center gap-2">
                                      <span className="text-base font-bold text-primary">{report.content.ranking.tier} 티어</span>
                                      <span className="text-black">{report.content.ranking.rank}위 / {report.content.ranking.total}명</span>
                                      <span className="text-xs text-gray-500">({report.content.ranking.week} 기준)</span>
                                    </div>
                                    <p className="text-sm text-gray-700 mt-2">이번 주에도 멋진 성과를 보여주셨어요! 계속해서 도전하는 모습이 정말 인상적입니다. 👏</p>
                                  </div>
                                )}
                              </div>
                            )}
                            {report.content && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-lg font-semibold mb-4">요약</h2>
                                        <p className="text-gray-700">{report.content.summary}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold mb-4">상세 분석</h2>
                                        <div className="grid grid-cols-1 gap-4">
                                            {report.content.details.map((detail, index) => (
                                                <Card key={index} className="p-4 compact shadow rounded-xl bg-white">
                                                    <h3 className="font-medium text-gray-900">{detail.category}</h3>
                                                    <p className="text-2xl font-bold text-primary mt-2">{detail.value}</p>
                                                    <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                    {report.content.recommendations && (
                                        <div>
                                            <h2 className="text-lg font-semibold mb-4">추천사항</h2>
                                            <div className="space-y-4">
                                                {report.content.recommendations.map((recommendation, index) => (
                                                    <Card key={index} className="p-4 compact shadow rounded-xl bg-white">
                                                        <div className="flex items-start gap-4">
                                                            <div className="flex-1">
                                                                <h3 className="font-medium text-gray-900">
                                                                    {recommendation.title}
                                                                </h3>
                                                                <p className="text-gray-700 mt-1">
                                                                    {recommendation.description}
                                                                </p>
                                                            </div>
                                                            <span className={`px-2 py-1 rounded text-sm ${
                                                                recommendation.priority === 'high'
                                                                    ? 'bg-red-100 text-red-800'
                                                                    : recommendation.priority === 'medium'
                                                                    ? 'bg-yellow-100 text-yellow-800'
                                                                    : 'bg-green-100 text-green-800'
                                                            }`}>
                                                                {recommendation.priority === 'high'
                                                                    ? '높음'
                                                                    : recommendation.priority === 'medium'
                                                                    ? '중간'
                                                                    : '낮음'}
                                                            </span>
                                                        </div>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Card>
                    </main>
                    <BottomNav activePage="my" setActivePage={() => {}} />
                </SafeAreaWrapper>
            </div>
        </div>
    );
} 