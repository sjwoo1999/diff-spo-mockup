/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        kr: ['var(--font-noto-sans-kr)', 'sans-serif'],
      },

      colors: {
        /** 🎨 기존 orange 제거하고 primary 명명으로 일관성 확보 */
        primary: {
          DEFAULT: '#9333EA',   // 메인 퍼플
          light: '#A855F7',
          dark: '#6B21A8',
        },
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#E0E0E0',
          dark: '#9E9E9E',
        },
        black: '#1A1A1A',
        white: '#FFFFFF',

        /** 기존 브랜드 컬러는 필요시 유지 */
        diffPurple: '#B35FFF',
        diffGreen: '#3EFF8A',
        diffWhite: '#FFFFFF',
        diffBlack: '#0B0B0B',
      },

      borderRadius: {
        '2xl': '1.5rem',
      },
      spacing: {
        72: '18rem',
        80: '20rem',
        96: '24rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // ... 나머지 애니메이션은 그대로 유지
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        // ... 나머지 애니메이션은 그대로 유지
      },
    },
  },

  plugins: [require('tailwindcss-animate')],

  safelist: [
    'max-w-[512px]',
    'mx-auto',
    // 새로운 primary 컬러 클래스 추가
    'text-primary',
    'bg-primary',
    'hover:bg-primary',
    'bg-primary-light',
    'text-primary-light',
  ],
};
