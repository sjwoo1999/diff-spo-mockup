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
        'xs': '480px',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        kr: ['var(--font-noto-sans-kr)'],
      },
      colors: {
        orange: {
          DEFAULT: '#FF7A00',
          '50': '#FFF8F0',
          '100': '#FFEEDD',
          '200': '#FFDDBB',
          '300': '#FFCC99',
          '400': '#FFBB77',
          '500': '#FF9933',
          '600': '#EA580C',
          '700': '#C2410C',
          '800': '#9A3412',
          '900': '#7C2D12',
        },
        'primary-light': '#FFF3E0',
        'spin-dark': '#1A1A1A',
        'spin-gray': '#E0E0E0',
        'spin-light-gray': '#F2F2F2',
      },
      keyframes: {
        'fadeIn': {
            from: { opacity: '0', transform: 'translateY(10px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
        },
        'bounceIn': {
            '0%': { opacity: '0', transform: 'scale(0.3) translateY(50px)' },
            '50%': { opacity: '1', transform: 'scale(1.1) translateY(-10px)' },
            '70%': { transform: 'scale(0.9) translateY(5px)' },
            '100%': { transform: 'scale(1) translateY(0)' },
        },
        'slideIn': {
            '0%': { opacity: '0', transform: 'translateX(-100%)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'popIn': {
            '0%': { opacity: '0', transform: 'scale(0.8)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'slide-in-right': { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        'slide-out-left': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-100%)' } },
        'rotate-center': { '0%': { transform: 'rotate(0)' }, '100%': { transform: 'rotate(360deg)' } },
        'ping-once': { '0%': { transform: 'scale(1)', opacity: '1' }, '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce-in': 'bounceIn 1s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'pop-in': 'popIn 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-left': 'slide-out-left 0.3s ease-out forwards',
        'rotate-center': 'rotate-center 1s linear infinite',
        'ping-once': 'ping-once 1s cubic-bezier(0, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
  // ⭐ 여기에 safelist 추가 ⭐
  safelist: [
    'max-w-[512px]',
    'mx-auto',
  ],
};