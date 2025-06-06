// src/components/home/HomePage.tsx
import React, { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Database } from '@/types';
import { Chart as ChartJS } from 'chart.js'; // Import ChartJS type
import { createCompetitorChart } from '@/utils/chartUtils'; // Import the chart utility

interface HomePageProps {
    database: Database;
}

const HomePage: React.FC<HomePageProps> = ({ database }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<ChartJS | null>(null);

    // Chart.js rendering (useCallback for memoization)
    const renderChart = useCallback(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                createCompetitorChart(ctx, chartInstance); // Use the utility function
            }
        }
    }, []);

    // Effect to render chart when component mounts or dependencies change
    useEffect(() => {
        renderChart();
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy(); // Clean up chart instance on unmount
            }
        };
    }, [renderChart]); // Depend on renderChart itself

    // Recommended Sports rendering (useCallback for memoization)
    const renderRecommendations = useCallback(() => {
        const userChoices = database.user.onboardingChoices;
        const filteredSports = database.sports.filter(sport =>
            (!userChoices.intensity || sport.intensity === userChoices.intensity) &&
            (!userChoices.preference || sport.preference === userChoices.preference || sport.preference === 'group')
        );
        const sportsToShow = filteredSports.length > 0 ? filteredSports : database.sports;

        return sportsToShow.slice(0, 2).map((sport, index) => (
            <div
                key={sport.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 interactive-card active:scale-98 animate-pop-in"
                style={{ animationDelay: `${index * 0.15}s` }}
            >
                <Image src={sport.image} alt={sport.name} width={600} height={400} className="w-full h-48 object-cover" />
                <div className="p-5">
                    <h3 className="font-bold text-xl mb-1 text-gray-900">{sport.name}</h3>
                    <p className="text-gray-600 text-sm">{sport.tagline}</p>
                </div>
            </div>
        ));
    }, [database.sports, database.user.onboardingChoices]);

    // Popular Classes rendering (useCallback for memoization)
    const renderPopularClasses = useCallback(() => {
        return database.classes.map((c, index) => (
            <div
                key={c.id}
                className="flex items-center bg-white p-4 rounded-xl shadow-md transform hover:scale-[1.02] transition duration-300 interactive-card border border-gray-100 active:scale-98 animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <Image src={c.image} alt={c.name} width={80} height={80} className="w-20 h-20 rounded-lg object-cover mr-4 shadow-sm" />
                <div className="flex-grow">
                    <h4 className="font-bold text-lg text-gray-900">{c.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{c.instructor} <span className="mx-1">•</span> {c.location}</p>
                </div>
                <span className="font-bold text-xl text-orange-600">{c.price}</span>
            </div>
        ));
    }, [database.classes]);

    return (
        <section id="page-home" className="page active p-4">
            <header className="flex justify-between items-center py-5 border-b-2 border-gray-100 mb-6">
                <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-sm">SPIN</h1>
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            </header>

            <div id="recommendation-intro" className="my-4 px-4 py-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-md border border-orange-100 animate-slide-in">
                <p className="text-orange-800 leading-relaxed text-base"><strong className="font-bold text-orange-900">{database.user.name}</strong>님을 위한 <span className="font-semibold text-orange-700">오늘의 추천 스포츠</span>입니다. 온보딩 과정을 통해 SPIN이 엄선한 이색 스포츠들을 만나보세요. 카드를 클릭하면 더 자세한 정보를 확인할 수 있습니다.</p>
            </div>

            <div id="recommendations" className="grid grid-cols-1 gap-5 mt-8">
                {renderRecommendations()}
            </div>

            <div className="my-12">
                <h2 className="text-2xl font-bold mb-5 text-gray-800 border-l-4 border-orange-500 pl-3">SPIN의 차별점</h2>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">SPIN은 기존 플랫폼들과 달리, 정보의 깊이와 커뮤니티 활성화에 집중하여 이색 스포츠에 대한 접근성을 획기적으로 개선합니다. 아래 차트는 주요 경쟁사들과 SPIN의 포지셔닝을 비교하여 보여줍니다.</p>
                <div className="chart-container bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
                    <canvas id="competitorChart" ref={chartRef}></canvas>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-5 text-gray-800 border-l-4 border-orange-500 pl-3">요즘 인기 많은 클래스</h2>
                <div id="popular-classes" className="space-y-4">
                    {renderPopularClasses()}
                </div>
            </div>
        </section>
    );
};

export default HomePage;