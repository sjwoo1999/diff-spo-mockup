'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { database } from '@/data/database';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import SwiperCore from 'swiper';

const ExploreSportsPage = () => {
    const router = useRouter();
    const swiperRef = useRef<SwiperCore | null>(null);

    const handleRandomClick = () => {
        if (swiperRef.current) {
            const totalSlides = database.sports.length;
            const randomIndex = Math.floor(Math.random() * totalSlides);
            swiperRef.current.slideTo(randomIndex);
        }
    };

    return (
        <main className="relative flex flex-col items-center mx-auto w-full max-w-[512px] min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white overflow-y-auto">
            {/* ⬅️ Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 bg-[#FF7A00] text-white text-xs rounded-full shadow hover:bg-[#e96a00] transition-all duration-200"
                aria-label="이전 페이지로 이동"
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
                <span className="hidden sm:inline">이전</span>
            </button>

            {/* 타이틀 및 설명 */}
            <h1 className="mt-12 text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800">
                이색 스포츠 탐색
            </h1>
            <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">
                카드를 넘기며 다양한 이색 스포츠를 알아보세요!
            </p>

            {/* 🎲 랜덤 버튼 */}
            <button
                onClick={handleRandomClick}
                className="mt-6 mb-4 px-5 py-2 bg-[#FF7A00] text-white text-sm sm:text-base font-semibold rounded-full hover:scale-105 transition"
            >
                🎲 랜덤 스포츠 보기
            </button>

            {/* Swiper */}
            <div className="w-full">
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    navigation
                    effect="coverflow"
                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    centeredSlides
                    loop
                    grabCursor
                    className="w-full"
                >
                    {database.sports.map((sport) => (
                        <SwiperSlide key={sport.id}>
                            <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex flex-col items-center text-center transition-transform duration-300">
                                <div className="relative w-full h-60 sm:h-64 mb-4">
                                    <Image
                                        src={sport.imageUrl}
                                        alt={sport.name}
                                        fill
                                        className="rounded-xl object-cover"
                                    />
                                </div>

                                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                    {sport.name}
                                </h2>

                                <p className="text-gray-600 text-sm sm:text-base mb-4">
                                    {sport.description}
                                </p>

                                <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                                    <p>💪 강도: {sport.intensity}</p>
                                    <p>👥 선호도: {sport.preference}</p>
                                    <p>💰 비용: {sport.cost}</p>
                                    <p>🏠 장소: {sport.locationPreference}</p>
                                </div>

                                <button
                                    onClick={() => router.push('/classes')}
                                    className="mt-6 w-full px-5 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-semibold rounded-lg hover:scale-105 transition"
                                >
                                    관련 클래스 보러 가기
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
};

export default ExploreSportsPage;
