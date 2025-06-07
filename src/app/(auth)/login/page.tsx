// src/app/(auth)/login/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('test@example.com');
    const [password, setPassword] = useState('password123');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('수동 로그인 시도:', { email, password });

        // 실제 로그인 로직: API 호출 및 인증 처리
        const loginSuccess = true; // 임시 성공 처리

        if (loginSuccess) {
            localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태 저장
            // ✨ 변경: 로그인 성공 후 약관 동의 페이지로 이동
            router.replace('/terms-of-service'); // Next.js App Router에서는 절대 경로 `/login/terms-of-service` 또는 상대 경로 `./terms-of-service`를 사용
        } else {
            alert('로그인 실패');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
                <h1 className="text-4xl font-extrabold text-orange-600 mb-6">SPIN</h1>
                <p className="text-gray-700 text-lg mb-8">로그인하여 이색 스포츠를 경험하세요!</p>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="이메일"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="비밀번호"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg"
                    >
                        로그인
                    </button>
                </form>
                <div className="mt-6 text-sm text-gray-600">
                    <a href="#" className="hover:underline text-orange-500" onClick={(e) => { e.preventDefault(); alert('비밀번호 찾기 기능은 구현 예정입니다.'); }}>비밀번호 찾기</a> | <a href="#" className="hover:underline text-orange-500" onClick={() => router.push('/signup')}>회원가입</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;