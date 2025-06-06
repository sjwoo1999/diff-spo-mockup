// src/components/common/BottomNav.tsx
import React from 'react';

interface BottomNavProps {
    currentPage: string;
    showPage: (pageId: 'home' | 'community' | 'classes' | 'my') => void;
    showBottomNav: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, showPage, showBottomNav }) => {
    return (
        <nav id="bottom-nav" className={`fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t border-gray-200 flex justify-around py-3 shadow-2xl z-10 ${showBottomNav ? 'flex' : 'hidden'}`}>
            <button onClick={() => showPage('home')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'home' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                <span className="text-xs mt-1">홈</span>
            </button>
            <button onClick={() => showPage('community')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'community' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                 <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.001 3.001 0 015.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                <span className="text-xs mt-1">커뮤니티</span>
            </button>
            <button onClick={() => showPage('classes')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'classes' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"/></svg>
                <span className="text-xs mt-1">클래스</span>
            </button>
            <button onClick={() => showPage('my')} className={`nav-item flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${currentPage === 'my' ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-500 hover:text-gray-700'} active:scale-95`}>
                <svg className="bottom-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                <span className="text-xs mt-1">마이</span>
            </button>
        </nav>
    );
};

export default BottomNav;