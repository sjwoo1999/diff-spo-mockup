'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/glitch.css'; // ✨ glitch 애니메이션 CSS

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginSuccess = true;

    if (loginSuccess) {
      localStorage.setItem('isLoggedIn', 'true');
      router.replace('/terms-of-service');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-primary to-primary-dark flex flex-col items-center justify-center px-4 py-10">
      
      {/* ✅ 글리치 로고 박스 바깥 배치 + 잘 보이도록 흰색 배경 제거 */}
      <div className="mb-8">
        <div
          data-glitch="DIFF-SPO"
          className="glitch text-4xl font-extrabold tracking-widest text-white select-none"
        >
          DIFF-SPO
        </div>
      </div>

      {/* 로그인 카드 */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-w-sm w-full text-center">
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          로그인하여 특별한 스포츠 경험을 시작하세요!
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="이메일"
            className="w-full px-4 py-3 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full px-4 py-3 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition duration-300 shadow-md"
          >
            로그인
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600 space-x-2">
          <button
            className="hover:underline text-primary"
            onClick={(e) => {
              e.preventDefault();
              alert('비밀번호 찾기 기능은 구현 예정입니다.');
            }}
          >
            비밀번호 찾기
          </button>
          <span>|</span>
          <button
            className="hover:underline text-primary"
            onClick={() => router.push('/signup')}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
