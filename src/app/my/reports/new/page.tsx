'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Report } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup } from '@/components/ui/radio-group';
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

export default function NewReportPage() {
    const router = useRouter();
    const [reportType, setReportType] = useState<Report['type']>('activity');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateReport = async () => {
        setIsGenerating(true);
        // 실제 구현에서는 API 호출을 통해 리포트 생성
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsGenerating(false);
        router.push('/my/reports');
    };

    const reportTypes = [
        {
            value: 'activity',
            label: '활동 리포트',
            desc: '운동 활동 분석 및 통계',
        },
        {
            value: 'performance',
            label: '성과 리포트',
            desc: '운동 성과 및 개선점 분석',
        },
        {
            value: 'recommendation',
            label: '추천 리포트',
            desc: '맞춤형 운동 추천',
        },
    ];

    return (
        <div className="w-full min-h-screen flex justify-center bg-black">
            <div className="relative w-full max-w-xl flex flex-col">
                <SafeAreaWrapper className="min-h-screen bg-white pb-24 flex flex-col">
                    <main className="flex-1 flex flex-col w-full max-w-xl mx-auto px-4 pt-6">
                        <MyBackButton label="이전" />
                        <Card className="w-full rounded-2xl shadow-md p-6 bg-white mb-6">
                            <h1 className="text-2xl font-bold mb-8">새 리포트 생성</h1>
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">리포트 유형 선택</h2>
                                    <RadioGroup
                                        value={reportType}
                                        onValueChange={(value) => setReportType(value as Report['type'])}
                                        className="grid grid-cols-1 gap-4"
                                    >
                                        {reportTypes.map((type) => (
                                            <Card
                                                key={type.value}
                                                className={`p-4 cursor-pointer transition-all border-2 ${
                                                    reportType === type.value
                                                        ? 'border-primary bg-primary/10 shadow'
                                                        : 'border-gray-200 bg-white'
                                                }`}
                                                onClick={() => setReportType(type.value as Report['type'])}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="radio"
                                                        name="reportType"
                                                        value={type.value}
                                                        checked={reportType === type.value}
                                                        onChange={() => setReportType(type.value as Report['type'])}
                                                        className="accent-primary"
                                                    />
                                                    <div>
                                                        <h3 className="font-medium">{type.label}</h3>
                                                        <p className="text-sm text-gray-600 mt-1">{type.desc}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </RadioGroup>
                                </div>
                                <div>
                                    <Button
                                        onClick={handleGenerateReport}
                                        disabled={isGenerating}
                                        className="w-full"
                                    >
                                        {isGenerating ? '리포트 생성 중...' : '리포트 생성하기'}
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </main>
                    <BottomNav activePage="my" setActivePage={() => {}} />
                </SafeAreaWrapper>
            </div>
        </div>
    );
} 