// src/app/sports/[id]/page.tsx
import { database } from '@/data/database';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
    params: { id: string };
}

const SportDetailPage = ({ params }: Props) => {
    const sport = database.sports.find((s) => s.id === params.id);

    if (!sport) {
        notFound(); // 없는 id면 404
    }

    return (
        <main className="flex flex-col flex-grow min-h-0 mx-auto max-w-[512px] overflow-y-auto p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                {sport.name} 상세 정보
            </h1>

            <Image
                src={sport.imageUrl}
                alt={sport.name}
                width={600}
                height={400}
                className="rounded-xl mb-6 object-cover w-full h-64"
            />

            <p className="text-gray-700 text-base mb-6">{sport.description}</p>

            <div className="bg-white rounded-xl shadow p-5 space-y-2 text-sm text-gray-600">
                <p>💪 강도: {sport.intensity}</p>
                <p>👥 선호도: {sport.preference}</p>
                <p>💰 비용: {sport.cost}</p>
                <p>🏠 장소: {sport.locationPreference}</p>
                {sport.ageGroup && <p>👶 연령대: {sport.ageGroup.join(', ')}</p>}
            </div>
        </main>
    );
};

export default SportDetailPage;
