'use client';

import { useRouter } from 'next/navigation';
import { database } from '@/data/database';

interface PageProps {
    params: {
        id: string;
    };
}

export default function Page({ params }: PageProps) {
    const router = useRouter();
    const { id } = params;

    // id로 해당 스포츠 찾기
    const sport = database.sports.find((sport) => sport.id === id);

    if (!sport) {
        return (
            <main className="flex flex-col justify-center items-center min-h-screen text-center p-8">
                <h1 className="text-2xl font-bold text-red-600 mb-4">스포츠를 찾을 수 없습니다 😢</h1>
                <button
                    onClick={() => router.back()}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                    돌아가기
                </button>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{sport.name}</h1>
            <p className="text-gray-600 text-base mb-4">{sport.description}</p>
            <p className="text-sm text-gray-500 mb-1">💪 강도: {sport.intensity}</p>
            <p className="text-sm text-gray-500 mb-1">👥 선호도: {sport.preference}</p>
            <p className="text-sm text-gray-500 mb-1">💰 비용: {sport.cost}</p>
            <p className="text-sm text-gray-500 mb-1">🏠 장소: {sport.locationPreference}</p>

            <button
                onClick={() => router.push('/classes')}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition"
            >
                관련 클래스 보러 가기
            </button>
        </main>
    );
}
