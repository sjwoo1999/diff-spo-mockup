'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { Database, StoreItem } from '@/types';
import PageHeader from '@/components/common/PageHeader';

interface StorePageProps {
    database: Database;
}

const StorePage: React.FC<StorePageProps> = ({ database }) => {
    const renderStoreItems = useCallback(() => {
        return database.storeItems.map((item: StoreItem, index: number) => (
            <a
                key={item.id}
                href={item.externalPurchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-light transform hover:scale-[1.01] transition duration-300 interactive-card active:scale-99 animate-pop-in block"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="font-bold text-lg text-black">{item.name}</h3>
                    <p className="text-neutral-dark text-sm mt-1 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-xl text-primary">{item.price}</span>
                        {item.vendorName && (
                            <span className="text-neutral-light text-xs">by {item.vendorName}</span>
                        )}
                    </div>
                    {item.isAffiliateLink && (
                        <p className="text-xs text-blue-500 mt-2">
                            *본 링크는 제휴 마케팅이 적용되어 구매 시 수수료를 제공받을 수 있습니다.
                        </p>
                    )}
                </div>
            </a>
        ));
    }, [database.storeItems]);

    return (
        <section id="page-store" className="w-full max-w-xl mx-auto px-4 pt-6">
            <div className="mt-0 p-4 bg-blue-50 rounded-lg text-blue-700 text-sm animate-fade-in w-full mb-4">
                구매와 관련한 책임은 각 판매 업체에 있습니다.
            </div>
            <div id="store-items" className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
                {renderStoreItems()}
            </div>
            <button className="w-full mt-6 py-3 bg-neutral-light text-neutral-dark font-semibold rounded-lg hover:bg-neutral transition active:scale-98">
                더 많은 상품 보기
            </button>
        </section>
    );
};

export default StorePage;
