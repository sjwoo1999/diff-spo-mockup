import { database } from '@/data/database';

export async function generateStaticParams() {
    return database.sports.map((sport) => ({
        id: sport.id,
    }));
}

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const sport = database.sports.find((sport) => sport.id === id);

    if (!sport) {
        return (
            <main className="flex flex-col justify-center items-center min-h-screen text-center p-8">
                <h1 className="text-2xl font-bold text-red-600 mb-4">스포츠를 찾을 수 없습니다 😢</h1>
                <a
                    href="/explore-sports"
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                    돌아가기
                </a>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-black text-white">
            <h1 className="text-3xl font-bold mb-6">{sport.name}</h1>
            <p className="text-white/80 text-base mb-4">{sport.description}</p>
            <p className="text-sm text-white/70 mb-1">💪 강도: {sport.intensity}</p>
            <p className="text-sm text-white/70 mb-1">👥 선호도: {sport.preference}</p>
            <p className="text-sm text-white/70 mb-1">💰 비용: {sport.cost}</p>
            <p className="text-sm text-white/70 mb-1">🏠 장소: {sport.locationPreference}</p>

            <a
                href="/classes"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition"
            >
                관련 클래스 보러 가기
            </a>
        </main>
    );
}
