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
      const randomIndex = Math.floor(Math.random() * database.sports.length);
      swiperRef.current.slideTo(randomIndex);
    }
  };

  return (
    <main className="flex flex-col items-center w-full max-w-[512px] min-h-screen mx-auto bg-gradient-to-b from-primary-light via-white to-white px-4 py-8 text-black font-kr">
      
      {/* ⬅️ Back Button */}
      <div className="w-full flex justify-start mb-4">
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
          이전
        </button>
      </div>

      {/* 🧭 Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold mb-2">이색 스포츠 탐색</h1>
        <p className="text-white text-sm sm:text-base">
          카드를 넘기며 다양한 스포츠를 만나보세요!
        </p>
      </div>

      {/* 🌀 Swiper 중앙 정렬 */}
      <div className="flex-grow flex items-center justify-center w-full pb-16">
        <div className="w-full">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            navigation
            effect="coverflow"
            centeredSlides
            slidesPerView={1}
            spaceBetween={16}
            loop
            grabCursor
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {database.sports.map((sport) => (
              <SwiperSlide key={sport.id}>
                <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center">
                  <div className="relative w-full h-60 mb-4">
                    <Image
                      src={sport.imageUrl}
                      alt={sport.name}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-black mb-1">{sport.name}</h2>
                  <p className="text-black text-sm mb-4">{sport.description}</p>
                  <ul className="text-xs text-neutral-dark space-y-1 mb-4">
                    <li>💪 강도: {sport.intensity}</li>
                    <li>👥 선호도: {sport.preference}</li>
                    <li>💰 비용: {sport.cost}</li>
                    <li>🏠 장소: {sport.locationPreference}</li>
                  </ul>
                  <button
                    onClick={() => router.push('/classes')}
                    className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition"
                  >
                    관련 클래스 보러 가기
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 🎲 하단 고정 버튼 */}
      <div className="fixed bottom-4 inset-x-0 px-4 max-w-[512px] mx-auto z-10">
        <button
          onClick={handleRandomClick}
          className="w-full py-2 bg-primary text-white text-sm sm:text-base font-semibold rounded-full hover:bg-primary-dark transition"
        >
          🎲 랜덤 스포츠 보기
        </button>
      </div>
    </main>
  );
};

export default ExploreSportsPage;
