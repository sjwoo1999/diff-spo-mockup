'use client';

import React, { useState, useEffect } from 'react';
import RecommendedSports from '@/components/home/RecommendedSports';
import ComparatorChart from '@/components/home/ComparatorChart';
import PopularClasses from '@/components/home/PopularClasses';
import { database } from '@/data/database';
import { Sport, OnboardingChoices } from '@/types';
import BottomNav from '@/components/common/BottomNav';
import PageHeader from '@/components/common/PageHeader';
import AllClasses from '@/components/classes/AllClasses';
import CommunityPosts from '@/components/community/CommunityPosts';
import Image from 'next/image';

type PageType = 'home' | 'classes' | 'community' | 'my' | 'store';

const HomePage: React.FC = () => {
    const [activePage, setActivePage] = useState<PageType>('home');
    const [userOnboardingChoices, setUserOnboardingChoices] = useState<OnboardingChoices>({
        purpose: [],
        ageGroup: [],
        availableTime: [],
        intensity: undefined,
        preference: undefined,
        cost: undefined,
        physicalLimitations: undefined,
        locationPreference: undefined,
    });
    const [recommendedSportsList, setRecommendedSportsList] = useState<Sport[]>([]);

    useEffect(() => {
        const savedChoices = localStorage.getItem('onboardingChoices');
        if (savedChoices) {
            setUserOnboardingChoices(JSON.parse(savedChoices) as OnboardingChoices);
        }
    }, []);

    useEffect(() => {
        const filtered = database.sports.filter((sport) => {
            let matches = true;

            if (userOnboardingChoices.intensity && sport.intensity !== userOnboardingChoices.intensity) {
                matches = false;
            }
            if (userOnboardingChoices.preference && sport.preference !== userOnboardingChoices.preference) {
                matches = false;
            }

            if (userOnboardingChoices.purpose && userOnboardingChoices.purpose.length > 0) {
                if (sport.purpose) {
                    const hasMatchingPurpose = userOnboardingChoices.purpose.some((choicePurpose) =>
                        sport.purpose!.includes(choicePurpose)
                    );
                    if (!hasMatchingPurpose) {
                        matches = false;
                    }
                } else {
                    matches = false;
                }
            }

            if (userOnboardingChoices.cost && sport.cost !== userOnboardingChoices.cost) {
                matches = false;
            }

            if (userOnboardingChoices.ageGroup && userOnboardingChoices.ageGroup.length > 0) {
                if (sport.ageGroup) {
                    const hasMatchingAgeGroup = userOnboardingChoices.ageGroup.some((choiceAge) =>
                        sport.ageGroup!.includes(choiceAge)
                    );
                    if (!hasMatchingAgeGroup) {
                        matches = false;
                    }
                } else {
                    matches = false;
                }
            }

            if (
                userOnboardingChoices.locationPreference &&
                sport.locationPreference !== userOnboardingChoices.locationPreference &&
                userOnboardingChoices.locationPreference !== '상관 없음'
            ) {
                matches = false;
            }

            if (userOnboardingChoices.availableTime && userOnboardingChoices.availableTime.length > 0) {
                if (!userOnboardingChoices.availableTime.includes('언제든')) {
                    if (sport.availableTime) {
                        const hasMatchingTime = userOnboardingChoices.availableTime.some((choiceTime) =>
                            sport.availableTime!.includes(choiceTime)
                        );
                        if (!hasMatchingTime) {
                            matches = false;
                        }
                    } else {
                        matches = false;
                    }
                }
            }

            return matches;
        });

        setRecommendedSportsList(filtered);
    }, [userOnboardingChoices]);

    const renderPageContent = () => {
        const commonPagePaddingClass = 'p-4 sm:p-6 md:p-8';

        switch (activePage) {
            case 'home':
                return (
                    <div className={`page active ${commonPagePaddingClass} overflow-y-auto`}>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">SPIN 홈</h1>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                            {userOnboardingChoices.preference === '개인' && '혼자서 즐기기 좋은'}
                            {userOnboardingChoices.preference === '그룹' && '함께 즐기기 좋은'}
                            {userOnboardingChoices.preference === '상관 없음' && '다양한'} 스포츠를 추천해 드려요!
                        </p>

                        <RecommendedSports sports={recommendedSportsList} />

                        <div className="mt-8">
                            <ComparatorChart recommendedSports={recommendedSportsList} />
                        </div>

                        <div className="mt-8">
                            <PopularClasses classes={database.classes} />
                        </div>
                    </div>
                );

            case 'classes':
                return (
                    <div className={`page active ${commonPagePaddingClass} overflow-y-auto`}>
                        <PageHeader
                            title="클래스 & 여행"
                            description="SPIN과 함께라면 당신의 취향을 찾아 더욱 풍부한 경험을 누릴 수 있습니다."
                        />
                        <div className="mt-6">
                            <AllClasses classes={database.classes} />
                        </div>
                    </div>
                );

            case 'community':
                return (
                    <div className={`page active ${commonPagePaddingClass} overflow-y-auto`}>
                        <PageHeader
                            title="커뮤니티"
                            description="SPIN 회원들과 소통하고 정보를 공유하며 새로운 경험을 나누세요!"
                        />
                        <div className="mt-6">
                            <CommunityPosts posts={database.community} />
                        </div>
                    </div>
                );

            case 'my':
                return (
                    <div className={`page active ${commonPagePaddingClass} overflow-y-auto`}>
                        <PageHeader title="마이페이지" description="SPIN과 함께한 당신의 기록과 활동을 관리해보세요." />

                        <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                            <div className="flex items-center">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-2xl sm:text-3xl mr-4 sm:mr-6">
                                    MY
                                </div>
                                <div className="flex-1"> {/* ✅ flex-1 추가 */}
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{database.user.name}스핀</h2>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {database.user.gender === 'male'
                                            ? '남성'
                                            : database.user.gender === 'female'
                                            ? '여성'
                                            : '기타'}{' '}
                                        | {database.user.dateOfBirth} | {database.user.phoneNumber}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <section className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">나의 활동 기록</h3>
                            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                                <li className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                    <span>클라이밍 강습 1-1회 완료</span>
                                    <span className="text-orange-500 font-semibold">2025.05.20</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                );

            case 'store':
                return (
                    <section id="page-store" className={`page active ${commonPagePaddingClass} overflow-y-auto`}>
                        <PageHeader
                            title="스핀 상점"
                            description="이색 스포츠 장비, 의류 및 관련 상품을 만나보세요. 파트너십을 통해 엄선된 상품을 제공합니다."
                        />
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg text-blue-700 text-sm animate-fade-in px-4">
                            구매와 관련한 책임은 각 판매 업체에 있습니다.
                        </div>
                        <div id="store-items" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {database.storeItems.map((item, index) => (
                                <a
                                    key={item.id}
                                    href={item.externalPurchaseLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition duration-300 interactive-card active:scale-99 animate-pop-in block"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>
                                        <div className="flex justify-between items-center mt-3">
                                            <span className="font-bold text-xl text-orange-600">{item.price}</span>
                                            {item.vendorName && (
                                                <span className="text-gray-500 text-xs">by {item.vendorName}</span>
                                            )}
                                        </div>
                                        {item.isAffiliateLink && (
                                            <p className="text-xs text-blue-500 mt-2">
                                                *본 링크는 제휴 마케팅이 적용되어 구매 시 수수료를 제공받을 수 있습니다.
                                            </p>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <main className="flex flex-col flex-grow min-h-0 mx-auto max-w-[512px] overflow-y-auto">
                {renderPageContent()}
            </main>
            <BottomNav activePage={activePage} setActivePage={setActivePage} />
        </>
    );
};

export default HomePage;
