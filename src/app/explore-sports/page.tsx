'use client'
import { useRouter } from 'next/navigation';
import { database } from '@/data/database';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

const ExploreSportsPage = () => {
    const router = useRouter();

    return (
        <main className="flex flex-col flex-grow min-h-0 mx-auto max-w-[512px] overflow-y-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">이색 스포츠 탐색</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                카드를 넘기면서 다양한 이색 스포츠를 탐색해보세요!
            </p>

            <Swiper
                modules={[Navigation, EffectCoverflow]}
                navigation
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={30}
                slidesPerView={1.2}
                centeredSlides
                loop
                grabCursor={true}
                className="w-full"
            >
                {database.sports.map((sport) => (
                    <SwiperSlide key={sport.id}>
                        <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-300">
                            <Image
                                src={sport.imageUrl}
                                alt={sport.name}
                                width={400}
                                height={300}
                                className="rounded-xl mb-4 object-cover w-full h-64"
                            />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                                {sport.name}
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base mb-4">
                                {sport.description}
                            </p>

                            <div className="text-sm text-gray-500 space-y-1">
                                <p>💪 강도: {sport.intensity}</p>
                                <p>👥 선호도: {sport.preference}</p>
                                <p>💰 비용: {sport.cost}</p>
                                <p>🏠 장소: {sport.locationPreference}</p>
                            </div>

                            <button
                                onClick={() => router.push('/classes')}
                                className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition"
                            >
                                관련 클래스 보러 가기
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
};

export default ExploreSportsPage;
