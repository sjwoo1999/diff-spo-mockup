import React from 'react';
import { ClassItem } from '@/types';
import Image from 'next/image';

interface ClassCardProps {
    classItem: ClassItem;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem }) => {
    const getScoreColor = (score: number) => {
        if (score >= 0.8) return 'text-green-600';
        if (score >= 0.6) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreIcon = (score: number) => {
        if (score >= 0.8) return '⭐️⭐️⭐️⭐️⭐️';
        if (score >= 0.6) return '⭐️⭐️⭐️⭐️';
        return '⭐️⭐️⭐️';
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
                <Image
                    src={classItem.imageUrl}
                    alt={classItem.title}
                    fill
                    className="object-cover"
                />
                {(classItem.recommendationScore || classItem.matchingScore) && (
                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold">
                        {classItem.recommendationScore && (
                            <span className={`mr-2 ${getScoreColor(classItem.recommendationScore)}`}>
                                {getScoreIcon(classItem.recommendationScore)}
                            </span>
                        )}
                        {classItem.matchingScore && (
                            <span className={getScoreColor(classItem.matchingScore)}>
                                {getScoreIcon(classItem.matchingScore)}
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{classItem.title}</h3>
                <p className="text-gray-600 mb-2">{classItem.type}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">강사: {classItem.instructor}</p>
                        <p className="text-sm text-gray-500">시간: {classItem.duration}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                            {classItem.price.toLocaleString()}원
                        </p>
                        {classItem.recommendationScore && (
                            <p className={`text-sm ${getScoreColor(classItem.recommendationScore)}`}>
                                추천 점수: {classItem.recommendationScore.toFixed(1)}
                            </p>
                        )}
                        {classItem.matchingScore && (
                            <p className={`text-sm ${getScoreColor(classItem.matchingScore)}`}>
                                매칭 점수: {classItem.matchingScore.toFixed(1)}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard; 