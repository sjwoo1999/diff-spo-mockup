// src/components/common/BottomNav.tsx
'use client'
import React from 'react';

type PageType = 'home' | 'classes' | 'community' | 'my' | 'store'; // 'store' 추가

interface BottomNavProps {
    activePage: PageType;
    setActivePage: (page: PageType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
    return (
        // 'fixed bottom-0'은 유지하고,
        // 'left-1/2 transform -translate-x-1/2'를 추가하여 중앙 정렬합니다.
        // 그리고 'max-w-lg'로 최대 너비를 제한합니다.
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white shadow-lg border-t border-gray-100 z-50">
            <ul className="flex justify-around items-center h-14 sm:h-16">
                <li>
                    <button
                        className={`flex flex-col items-center p-1 sm:p-2 text-xs sm:text-sm font-medium ${activePage === 'home' ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                        onClick={() => setActivePage('home')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-4.5 9V9.75a2.25 2.25 0 0 0-2.25-2.25H15M12 18.75l-3-3m0 0-3 3m3-3v6m-9-6h12a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        홈
                    </button>
                </li>
                <li>
                    <button
                        className={`flex flex-col items-center p-1 sm:p-2 text-xs sm:text-sm font-medium ${activePage === 'classes' ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                        onClick={() => setActivePage('classes')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3.037.524M12 6.042V3.75c0-1.043.91-1.875 2.016-1.66.84.177 1.446.945 1.446 1.832v1.113M12 6.042A8.967 8.967 0 0 1 18 3.75c1.052 0 2.062.18 3.037.524M12 6.042v3.75m-3 0-4.784 1.133Y12A9 9 0 0 0 3.75 15h1.133l-1.133 4.784m-3-4.784H21.75M12 9.792v3.75m3 0 4.784 1.133Y12A9 9 0 0 1 20.25 15h-1.133l1.133 4.784m-3-4.784H3.75" />
                        </svg>
                        클래스
                    </button>
                </li>
                <li>
                    <button
                        className={`flex flex-col items-center p-1 sm:p-2 text-xs sm:text-sm font-medium ${activePage === 'community' ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                        onClick={() => setActivePage('community')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75a4.5 4.5 0 0 0-4.5-4.5H13.5a4.5 4.5 0 0 0-4.5 4.5M12 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM6 20.25a6 6 0 0 1 12 0H6Z" />
                        </svg>
                        커뮤니티
                    </button>
                </li>
                 <li>
                    <button
                        className={`flex flex-col items-center p-1 sm:p-2 text-xs sm:text-sm font-medium ${activePage === 'store' ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                        onClick={() => setActivePage('store')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5m-3 0v7.5m0-7.5H9M6.75 15.75h3V21L3 18.75m11.25-10.5H21m-4.5 4.5H21M3 5.25h2.25a2.25 2.25 0 0 1 2.25 2.25v2.25M6.75 15.75h-3V5.25A2.25 2.25 0 0 1 6 3h3.375c.621 0 1.125.504 1.125 1.125v3.625M4.5 15.75h4.5m-3-6h6m-3-6H15.75m-6 6h.008v.008H9m0 0h.008v.008H9m0 0h.008v.008H9m0 0h.008v.008H9M9 15.75h-.008v-.008H9m0 0h-.008v-.008H9m0 0h-.008v-.008H9m0 0h-.008v-.008H9" />
                        </svg>
                        상점
                    </button>
                </li>
                <li>
                    <button
                        className={`flex flex-col items-center p-1 sm:p-2 text-xs sm:text-sm font-medium ${activePage === 'my' ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                        onClick={() => setActivePage('my')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        마이페이지
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default BottomNav;