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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 4l9 5.75v8.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18V9.75z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75a4.5 4.5 0 0 0-4.5-4.5m-3 0a4.5 4.5 0 0 0-4.5 4.5M18 18.75H6m12 0v.75a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-.75m9-12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                        커뮤니티
                    </button>
                </li>
                <li>
                    <button
                        className={`flex flex-col items-center p-1 sm:p-2 text-xs sm:text-sm font-medium ${activePage === 'store' ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600'}`}
                        onClick={() => setActivePage('store')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9V6.75A4.5 4.5 0 0 0 12 2.25v0a4.5 4.5 0 0 0-4.5 4.5V9M4.5 9h15M4.5 9v10.5A2.25 2.25 0 0 0 6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V9M4.5 9h15" />
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