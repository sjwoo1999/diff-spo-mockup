'use client'; // 이 파일은 클라이언트 컴포넌트임을 명시

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Next.js Image 컴포넌트 사용

// Chart.js 임포트 방식 변경 및 필요한 컴포넌트 등록
import {
    Chart as ChartJS, // Chart를 ChartJS로 별칭 지정
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController,
} from 'chart.js';

// 필요한 컴포넌트들을 등록합니다.
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController
);

import { db as initialDb } from '@/data/db'; // 데이터베이스 임포트
import { Database, User, Sport, Class, CommunityPost } from '@/types'; // 타입 정의 임포트

export default function Home() {
    const [database, setDatabase] = useState<Database>(initialDb); // db 상태 관리
    const [currentPage, setCurrentPage] = useState<'onboarding' | 'home' | 'community' | 'classes' | 'my'>('onboarding');
    const [onboardingStep, setOnboardingStep] = useState(1);
    const [showBottomNav, setShowBottomNav] = useState(false);
    const chartRef = useRef<HTMLCanvasElement | null>(null); // Chart Canvas ref
    const chartInstance = useRef<ChartJS | null>(null); // ChartJS 인스턴스 ref (타입 변경)

    useEffect(() => {
      // // 개발/테스트 중에는 아래 localStorage 확인 로직을 주석 처리하거나 제거
      // const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
      // if (hasCompletedOnboarding === 'true') {
      //     setCurrentPage('home');
      //     setShowBottomNav(true);
      //     const savedChoices = localStorage.getItem('onboardingChoices');
      //     if (savedChoices) {
      //         setDatabase(prevDb => ({
      //             ...prevDb,
      //             user: {
      //                 ...prevDb.user,
      //                 onboardingChoices: JSON.parse(savedChoices)
      //             }
      //         }));
      //     }
      // } else {
      //     // 온보딩이 완료되지 않았다면 온보딩 페이지로 설정 (명시적으로)
      //     setCurrentPage('onboarding');
      //     setShowBottomNav(false); // 온보딩 중에는 하단 네비게이션 숨기기
      // }
      // 항상 온보딩으로 시작하려면 아래 두 줄만 남겨둡니다:
      setCurrentPage('onboarding');
      setShowBottomNav(false);
  }, []);

    // 페이지가 변경될 때마다 데이터 렌더링 및 스크롤 상단 이동
    useEffect(() => {
        if (currentPage === 'home') {
            renderRecommendations();
            renderPopularClasses();
            renderChart(); // Home 페이지로 전환될 때만 차트 렌더링
        } else if (currentPage === 'community') {
            renderCommunityPosts();
        } else if (currentPage === 'classes') {
            renderAllClasses();
        }
        window.scrollTo(0, 0); // 페이지 전환 시 스크롤 상단으로
    }, [currentPage, database.user.onboardingChoices]); // onboardingChoices 변경 시 재렌더링

    // Chart.js 렌더링 함수
    const renderChart = () => {
      if (chartRef.current) {
          if (chartInstance.current) {
              chartInstance.current.destroy(); // 이전 차트 인스턴스 파괴
          }
  
          const ctx = chartRef.current.getContext('2d');
          if (ctx) {
              chartInstance.current = new ChartJS(ctx, {
                  type: 'bar',
                  data: {
                      labels: ['커뮤니티 활성화', '이색 스포츠 다양성', '초보자 접근성', '정보의 깊이'],
                      datasets: [{
                          type: 'bar',
                          label: 'SPIN',
                          data: [9, 8, 9, 8.5],
                          // ⭐ 여기 Chart.js 색상을 Tailwind 기본 orange-600의 RGBA로 변경 ⭐
                          backgroundColor: 'rgba(234, 88, 12, 0.8)', // #EA580C의 RGBA
                          borderColor: 'rgba(234, 88, 12, 1)',   // #EA580C의 RGBA
                          borderWidth: 1
                      }, {
                          type: 'bar',
                          label: '경쟁사 평균',
                          data: [5, 7, 6, 5],
                          backgroundColor: 'rgba(156, 163, 175, 0.6)', // Tailwind gray-500 유사
                          borderColor: 'rgba(156, 163, 175, 1)',
                          borderWidth: 1
                      }]
                  },
                  options: {
                      indexAxis: 'y',
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                          x: {
                              beginAtZero: true,
                              max: 10,
                              grid: {
                                  color: 'rgba(0, 0, 0, 0.05)'
                              }
                          },
                          y: {
                              grid: {
                                  color: 'rgba(0, 0, 0, 0.05)'
                              }
                          }
                      },
                      plugins: {
                          legend: {
                              position: 'top',
                              labels: {
                                  font: {
                                      size: 14,
                                      weight: 'bold'
                                  },
                                  color: '#374151' // Tailwind gray-700 유사
                              }
                          },
                          tooltip: {
                              backgroundColor: 'rgba(0,0,0,0.7)',
                              bodyColor: '#fff',
                              titleColor: '#fff',
                              bodyFont: { size: 14 },
                              titleFont: { size: 16, weight: 'bold' },
                              padding: 10,
                              cornerRadius: 6
                          }
                      }
                  }
              });
          }
      }
  };

    // 온보딩 단계 전환
    const showOnboardingStep = (step: number) => {
        setOnboardingStep(step);
    };

    // 온보딩 선택 저장
    const saveOnboardingChoice = (key: 'preference' | 'intensity', value: 'solo' | 'group' | 'low' | 'medium' | 'high') => {
        setDatabase(prevDb => ({
            ...prevDb,
            user: {
                ...prevDb.user,
                onboardingChoices: {
                    ...prevDb.user.onboardingChoices,
                    [key]: value
                }
            }
        }));
    };

    // 온보딩 완료 및 앱 시작
    const finishOnboarding = () => {
        localStorage.setItem('hasCompletedOnboarding', 'true');
        localStorage.setItem('onboardingChoices', JSON.stringify(database.user.onboardingChoices));
        setCurrentPage('home');
        setShowBottomNav(true);
    };

    // 페이지 전환 함수 (하단 네비게이션)
    const showPage = (pageId: 'home' | 'community' | 'classes' | 'my') => {
        setCurrentPage(pageId);
    };

    // 추천 스포츠 렌더링
    const renderRecommendations = () => {
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
    };

    // 인기 클래스 렌더링
    const renderPopularClasses = () => {
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
    };

    // 커뮤니티 게시글 렌더링
    const renderCommunityPosts = () => {
        return database.community.map((post, index) => (
            <div
                key={post.id}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transform hover:scale-[1.01] transition duration-300 interactive-card active:scale-99 animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    post.category === '정보' ? 'bg-blue-100 text-blue-600' :
                    post.category === '모임' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-purple-100 text-purple-600'
                }`}>
                    {post.category}
                </span>
                <h3 className="font-bold text-lg mt-2 text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{post.author} <span className="mx-1">•</span> 댓글 {post.comments}</p>
            </div>
        ));
    };

    // 모든 클래스 렌더링
    const renderAllClasses = () => {
        return database.classes.map((c, index) => (
            <div
                key={c.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition duration-300 interactive-card active:scale-99 animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="p-5">
                    <h3 className="font-bold text-xl text-gray-900">{c.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">강사: <span className="font-medium">{c.instructor}</span></p>
                    <p className="text-gray-600 text-sm">장소: <span className="font-medium">{c.location}</span></p>
                    <div className="text-right font-bold text-2xl text-orange-600 mt-5">{c.price}</div>
                </div>
            </div>
        ));
    };

    return (
        <div id="app" className="max-w-lg mx-auto bg-white min-h-screen shadow-xl overflow-hidden relative">
            <main id="main-content" className="pb-20">
                {/* Onboarding Section */}
                <section id="page-onboarding" className={`page ${currentPage === 'onboarding' ? 'active' : ''}`}>
                <div className="h-screen flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-orange-600 to-red-600 text-white">
                        {onboardingStep === 1 && (
                            <div id="onboarding-step-1">
                                <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg animate-bounce-in">SPIN</h1>
                                <p className="text-xl text-white mb-12 leading-relaxed drop-shadow-md">일상에 새로운 스핀을 더하다.<br/>당신의 특별한 움직임, SPIN에서 시작!</p>
                                <button onClick={() => showOnboardingStep(2)} className="w-full bg-white text-orange-600 font-bold py-5 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-300 text-xl active:scale-95 border-b-4 border-orange-700 hover:border-orange-800">시작하기</button>
                            </div>
                        )}
                        {onboardingStep === 2 && (
                            <div id="onboarding-step-2" className="fade-in">
                                <h2 className="text-4xl font-bold mb-10 drop-shadow-md">어떤 스타일의 운동을<br/>선호하시나요?</h2>
                                <div className="space-y-6 w-full max-w-sm">
                                    <button onClick={() => { saveOnboardingChoice('preference', 'solo'); showOnboardingStep(3); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🧘 혼자서 집중하는 운동</button>
                                    <button onClick={() => { saveOnboardingChoice('preference', 'group'); showOnboardingStep(3); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🤝 여럿이 함께 즐기는 운동</button>
                                </div>
                            </div>
                        )}
                        {onboardingStep === 3 && (
                            <div id="onboarding-step-3" className="fade-in">
                                <h2 className="text-4xl font-bold mb-10 drop-shadow-md">선호하는 운동 강도를<br/>선택해주세요.</h2>
                                 <div className="space-y-6 w-full max-w-sm">
                                    <button onClick={() => { saveOnboardingChoice('intensity', 'low'); finishOnboarding(); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🍃 가볍게 즐기는 힐링</button>
                                    <button onClick={() => { saveOnboardingChoice('intensity', 'medium'); finishOnboarding(); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🔥 활동적인 에너지 발산</button>
                                    <button onClick={() => { saveOnboardingChoice('intensity', 'high'); finishOnboarding(); }} className="w-full text-left bg-white/20 border border-white/60 text-white p-6 rounded-2xl transition duration-300 hover:bg-white/30 backdrop-blur-sm text-lg shadow-lg active:scale-98 active:bg-white/40">🚀 한계를 넘는 익스트림</button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Home Section */}
                <section id="page-home" className={`page ${currentPage === 'home' ? 'active' : ''} p-4`}>
                    <header className="flex justify-between items-center py-5 border-b-2 border-gray-100 mb-6">
                        <h1 className="text-3xl font-extrabold text-orange-600 drop-shadow-sm">SPIN</h1>
                        <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </header>

                    <div id="recommendation-intro" className="my-4 p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-md border border-orange-100 animate-slide-in">
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

                {/* Community Section */}
                <section id="page-community" className={`page ${currentPage === 'community' ? 'active' : ''} p-4`}>
                    <header className="py-5 border-b-2 border-gray-100 mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">커뮤니티</h1>
                        <p className="text-gray-600 mt-2 leading-relaxed">다양한 정보를 나누고, 함께 운동할 메이트를 찾아보세요. SPIN의 커뮤니티는 언제나 새로운 도전으로 가득 차 있습니다.</p>
                    </header>
                    <div id="community-posts" className="space-y-4 mt-6">
                        {renderCommunityPosts()}
                    </div>
                </section>

                {/* Classes Section */}
                <section id="page-classes" className={`page ${currentPage === 'classes' ? 'active' : ''} p-4`}>
                    <header className="py-5 border-b-2 border-gray-100 mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">클래스 & 여행</h1>
                        <p className="text-gray-600 mt-2 leading-relaxed">전문가에게 직접 배우거나, 운동과 여행을 함께 즐겨보세요. SPIN이 검증한 수준 높은 클래스와 특별한 여행 상품이 준비되어 있습니다.</p>
                    </header>
                    <div id="all-classes" className="space-y-4 mt-6">
                        {renderAllClasses()}
                    </div>
                </section>

                {/* My Page Section */}
                <section id="page-my" className={`page ${currentPage === 'my' ? 'active' : ''} p-4`}>
                    <header className="py-5 border-b-2 border-gray-100 mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">마이페이지</h1>
                    </header>
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
                            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transform hover:scale-[1.01] transition duration-300 text-gray-800 active:scale-99">'주말 번개 트릭킹 모임' 참여</div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav id="bottom-nav" className={`fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t border-gray-200 flex justify-around py-3 shadow-2xl z-10 ${showBottomNav ? 'flex' : 'hidden'}`}>
                <button onClick={() => showPage('home')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'home' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                    <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    <span className="text-xs mt-1">홈</span>
                </button>
                <button onClick={() => showPage('community')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'community' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                     <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.001 3.001 0 015.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    <span className="text-xs mt-1">커뮤니티</span>
                </button>
                <button onClick={() => showPage('classes')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'classes' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                    <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"/></svg>
                    <span className="text-xs mt-1">클래스</span>
                </button>
                <button onClick={() => showPage('my')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'my' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                    <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    <span className="text-xs mt-1">마이</span>
                </button>
            </nav>
        </div>
    );
}