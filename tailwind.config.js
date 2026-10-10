/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B0D0F',
          900: '#111417',
          850: '#171B1F',
          800: '#171B1F',
          700: '#2A3035',
          600: '#2A3035',
          500: '#3A4248',
        },
        teal: {
          50: '#EEF8F5',
          100: '#DDEFEA',
          200: '#BFE0D9',
          300: '#7FC8BE',
          400: '#38B2A3',
          500: '#38B2A3',
          600: '#2E988B',
          700: '#1E6F67',
        },
        cyan: {
          400: '#7FC8BE',
          500: '#38B2A3',
          600: '#1E6F67',
        },
        snow: {
          50: '#F2EFE8',
          100: '#F2EFE8',
          200: '#D7D5CF',
          300: '#B8BAB7',
          400: '#A1A5A8',
          500: '#737A80',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
