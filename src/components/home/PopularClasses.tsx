'use client';

import React from 'react';
import { ClassItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface PopularClassesProps {
    classes: ClassItem[];
}

const PopularClasses: React.FC<PopularClassesProps> = ({ classes }) => {
    const topClasses = classes.slice(0, 3);

    return (
        <section className="mb-8 mx-auto max-w-[512px]">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">인기 클래스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topClasses.map((cls) => (
                    <Link href="/classes" key={cls.id}>
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition cursor-pointer">
                            <Image
                                src={cls.imageUrl}
                                alt={cls.title}
                                width={600}
                                height={400}
                                className="w-full h-32 object-cover rounded-md mb-2 sm:h-40 lg:h-48"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{cls.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{cls.instructor} - {cls.type}</p>
                            <p className="text-orange-600 font-bold mt-auto">{cls.price.toLocaleString()}원</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PopularClasses;
