/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '480px'
  		},
  		fontFamily: {
  			sans: [
  				'Pretendard',
  				'Noto Sans KR',
  				'Inter',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			neutral: {
  				light: '#F5F5F5',
  				DEFAULT: '#E0E0E0',
  				dark: '#9E9E9E'
  			},
  			black: '#1A1A1A',
  			white: '#FFFFFF',
  			diffPurple: '#B35FFF',
  			diffGreen: '#3EFF8A',
  			diffWhite: '#FFFFFF',
  			diffBlack: '#0B0B0B',
  			foreground: 'hsl(var(--foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			'2xl': '1.5rem',
  			card: '1.25rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'72': '18rem',
  			'80': '20rem',
  			'96': '24rem',
  			'112': '28rem',
  			'128': '32rem',
  			'144': '36rem',
  			'160': '40rem'
  		},
  		keyframes: {
  			fadeIn: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out'
  		}
  	}
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
