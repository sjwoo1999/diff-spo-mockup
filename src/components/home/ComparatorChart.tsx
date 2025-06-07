// src/components/home/ComparatorChart.tsx
'use client'; // Chart.js는 클라이언트 측에서 동작하므로 필요

import React, { useRef, useEffect } from 'react';
import { Sport } from '@/types';
import { createCompetitorChart } from '@/utils/chartUtils'; // Chart.js 유틸리티 임포트
import ChartJS from 'chart.js/auto'; // Chart.js 임포트

interface ComparatorChartProps {
    recommendedSports?: Sport[];
}

const ComparatorChart: React.FC<ComparatorChartProps> = ({ recommendedSports = [] }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<ChartJS | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // recommendedSports 데이터를 기반으로 차트 데이터를 동적으로 생성할 수 있습니다.
                // 여기서는 예시로 고정 데이터를 사용하지만, 실제로는 recommendedSports를 분석하여
                // 'SPIN' 데이터와 '경쟁사 평균' 데이터를 유동적으로 구성할 수 있습니다.
                // 예를 들어, recommendedSports의 강도, 목적, 비용 등을 수치화하여 비교할 수 있습니다.
                // 현재는 예시 차트이므로 기존 유틸리티 함수를 그대로 사용합니다.
                createCompetitorChart(ctx, chartInstanceRef);
            }
        }

        // 컴포넌트 언마운트 시 차트 인스턴스 파괴
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [recommendedSports]); // recommendedSports가 변경될 때마다 차트 갱신 (옵션)

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                SPIN과 취향별 비교
            </h2>
            <p className="text-gray-600 mb-4">
                온보딩 설문 응답을 바탕으로 당신의 취향을 분석하여 최적의 스포츠를 제안합니다.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
                유사도 비교 (최대 3개)
            </h3>
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-center justify-center text-gray-600">
                <canvas ref={chartRef} className="max-h-[300px] w-full"></canvas> {/* 차트를 렌더링할 캔버스 */}
            </div>
            {recommendedSports.length === 0 && (
                <p className="text-gray-500 text-center mt-4">비교할 스포츠가 없습니다. 온보딩 설정을 확인해주세요.</p>
            )}
        </section>
    );
};

export default ComparatorChart;