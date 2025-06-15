'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Report } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlusIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
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

export default function ReportsPage() {
    const router = useRouter();
    const [reports, setReports] = useState<Report[]>([
        {
            id: '1',
            userId: '1',
            title: '3월 활동 리포트',
            createdAt: '2024-03-15T10:00:00Z',
            status: 'completed',
            type: 'activity',
            content: {
                summary: '3월 활동 분석 결과입니다.',
                details: [
                    {
                        category: '총 운동 시간',
                        value: '24시간',
                        description: '지난 달 대비 20% 증가'
                    }
                ]
            }
        },
        {
            id: '2',
            userId: '1',
            title: '테니스 성과 리포트',
            createdAt: '2024-03-14T15:30:00Z',
            status: 'processing',
            type: 'performance'
        },
        {
            id: '3',
            userId: '1',
            title: '4월 활동 리포트',
            createdAt: '2024-04-15T10:00:00Z',
            status: 'pending',
            type: 'activity'
        },
        {
            id: '4',
            userId: '1',
            title: '수영 성과 리포트',
            createdAt: '2024-03-20T10:00:00Z',
            status: 'failed',
            type: 'performance',
            error: '데이터 분석 실패'
        }
    ]);

    const handleCreateReport = () => {
        router.push('/my/reports/new');
    };

    const getStatusIcon = (status: Report['status']) => {
        switch (status) {
            case 'pending':
            case 'processing':
                return <ClockIcon className="w-5 h-5 text-yellow-500" />;
            case 'completed':
                return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
            case 'failed':
                return <XCircleIcon className="w-5 h-5 text-red-500" />;
        }
    };

    const getStatusText = (status: Report['status']) => {
        switch (status) {
            case 'pending':
                return '대기 중';
            case 'processing':
                return '생성 중';
            case 'completed':
                return '완료';
            case 'failed':
                return '실패';
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center bg-black">
            <div className="relative w-full max-w-xl flex flex-col">
                <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
                    <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
                        <MyBackButton label="이전" />
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-black text-center">내 리포트</h1>
                            <Button onClick={handleCreateReport} className="flex items-center gap-2 px-4 py-2 text-base rounded-lg shadow bg-primary text-white font-bold">
                                <PlusIcon className="w-5 h-5" />
                                새 리포트 생성
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {reports.map((report) => (
                                <Card
                                    key={report.id}
                                    className={`rounded-2xl shadow-md px-5 py-4 mb-1 flex flex-col gap-1 ${
                                      report.status === 'completed' ? 'border-green-200' :
                                      report.status === 'processing' ? 'border-yellow-200' :
                                      report.status === 'pending' ? 'border-yellow-100' :
                                      report.status === 'failed' ? 'border-red-200' : ''
                                    } bg-white`}
                                    onClick={() => router.push(`/my/reports/${report.id}`)}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <div>
                                            <h2 className="text-base font-bold text-black mb-0.5">{report.title}</h2>
                                            <p className="text-xs text-gray-500 mb-1">{new Date(report.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {getStatusIcon(report.status)}
                                            <span className={`text-xs font-semibold ${
                                              report.status === 'completed' ? 'text-green-600' :
                                              report.status === 'processing' ? 'text-yellow-600' :
                                              report.status === 'pending' ? 'text-yellow-500' :
                                              report.status === 'failed' ? 'text-red-600' : 'text-gray-600'
                                            }`}>
                                              {getStatusText(report.status)}
                                            </span>
                                        </div>
                                    </div>
                                    {report.content?.summary && (
                                        <p className="text-sm text-gray-700 mt-1">{report.content.summary}</p>
                                    )}
                                    {report.status === 'failed' && report.error && (
                                        <p className="text-xs text-red-500 mt-1">{report.error}</p>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </main>
                    <BottomNav activePage="my" setActivePage={() => {}} />
                </SafeAreaWrapper>
            </div>
        </div>
    );
} 