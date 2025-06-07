// src/components/classes/AllClasses.tsx
import React from 'react';
import { ClassItem } from '@/types';
import Image from 'next/image';

interface AllClassesProps {
    classes: ClassItem[];
}

const AllClasses: React.FC<AllClassesProps> = ({ classes }) => {
    return (
        <section className="mx-auto max-w-[512px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classes.map((cls) => (
                    <div key={cls.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                        <Image
                            src={cls.imageUrl}
                            alt={cls.title}
                            width={600}
                            height={400}
                            className="w-full h-40 object-cover rounded-md mb-3 sm:h-48 lg:h-56"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{cls.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{cls.instructor} | {cls.type}</p>
                        <p className="text-orange-600 font-bold mt-auto">{cls.price.toLocaleString()}원</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllClasses;